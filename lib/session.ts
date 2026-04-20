import { cookies, headers } from "next/headers";
import { auth } from "@/lib/auth";
import dbConnect from "@/lib/db";
import { User } from "@/models/User";

type SessionRecord = Record<string, unknown>;
type SessionApiResponse = {
  user?: SessionRecord;
  session?: SessionRecord;
};

export type AppUserRole = "user" | "admin";

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: AppUserRole;
}

function normalizeRole(value: unknown): AppUserRole {
  return value === "admin" ? "admin" : "user";
}

function fromSessionPayload(payload: SessionApiResponse): AuthenticatedUser | null {
  const userRecord = payload.user;
  if (!userRecord) return null;

  const id = typeof userRecord.id === "string" ? userRecord.id : null;
  const email = typeof userRecord.email === "string" ? userRecord.email : null;
  if (!id || !email) return null;

  const roleFromSession = payload.session?.role;
  const roleFromUser = userRecord.role;
  const role = normalizeRole(
    typeof roleFromSession === "string" ? roleFromSession : roleFromUser,
  );

  return { id, email, role };
}

export async function getCurrentUser(): Promise<AuthenticatedUser | null> {
  const session = (await auth.api.getSession({
    headers: await headers(),
  })) as SessionApiResponse | null;

  if (session) {
    const userFromSession = fromSessionPayload(session);
    if (userFromSession) return userFromSession;
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("better-auth.session_token")?.value;
  if (!token) return null;

  await dbConnect();

  const sessionDoc = await User.db
    .collection("session")
    .findOne<{ userId?: string; expiresAt?: Date }>({ token });

  if (!sessionDoc?.userId) return null;
  if (sessionDoc.expiresAt && new Date(sessionDoc.expiresAt) <= new Date()) {
    return null;
  }

  const user = await User.findById(sessionDoc.userId).lean();
  if (!user) return null;

  return {
    id: String(user._id),
    email: user.email,
    role: normalizeRole(user.role),
  };
}
