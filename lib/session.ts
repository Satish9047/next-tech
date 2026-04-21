import { randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import { User } from "@/models/User";

type SessionDocument = {
  token: string;
  userId?: string;
  expiresAt?: Date;
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

async function getSessionCollection() {
  await dbConnect();
  return User.db.collection<SessionDocument>("session");
}

export async function createAppSession(userId: string) {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const sessionCollection = await getSessionCollection();

  await sessionCollection.insertOne({
    token,
    userId,
    expiresAt,
  });

  return { token, expiresAt };
}

export async function deleteAppSession(token: string) {
  const sessionCollection = await getSessionCollection();
  await sessionCollection.deleteOne({ token });
}

export async function getCurrentUser(): Promise<AuthenticatedUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("better-auth.session_token")?.value;
  if (!token) return null;

  const sessionCollection = await getSessionCollection();
  const sessionDoc = await sessionCollection.findOne({ token });

  if (!sessionDoc?.userId) return null;
  if (sessionDoc.expiresAt && new Date(sessionDoc.expiresAt) <= new Date()) {
    await sessionCollection.deleteOne({ token });
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
