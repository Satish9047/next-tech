"use server";

import { z } from "zod";
import { registerSchema, loginSchema } from "@/schemas/auth";
import dbConnect from "@/lib/db";
import { User } from "@/models/User";
import { auth } from "@/lib/auth";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  consumeRateLimit,
  RateLimitExceededError,
} from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request-ip";

// Type for the better-auth custom plugin API
interface MongooseSessionAPI {
  createMongooseSession: (params: {
    body: { userId: string; email: string; role: string };
    headers: Headers;
  }) => Promise<MongooseSessionResult>;
}

interface MongooseSessionResult {
  token?: string;
  expiresAt?: string | Date;
  session?: {
    token?: string;
    expiresAt?: string | Date;
  };
}

export async function registerAction(data: z.infer<typeof registerSchema>) {
  try {
    const ip = await getClientIp();
    await consumeRateLimit({
      key: `register:ip:${ip}`,
      limit: 5,
      windowMs: 10 * 60 * 1000,
    });

    const parsed = registerSchema.safeParse(data);
    if (!parsed.success) {
      return {
        error: "Validation failed",
        fields: parsed.error.flatten().fieldErrors,
      };
    }

    await dbConnect();

    const existingUser = await User.findOne({ email: parsed.data.email });
    if (existingUser) {
      return { error: "Email is already registered" };
    }

    await User.create({
      email: parsed.data.email,
      password: parsed.data.password,
      fullName: parsed.data.fullName,
      contact: parsed.data.contact,
      address: parsed.data.address,
      role: "user",
    });

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof RateLimitExceededError) {
      return { error: "Too many requests. Please try again later." };
    }
    console.error("Register Error:", error);
    return { error: "An unexpected error occurred during registration" };
  }
}

export async function loginAction(data: z.infer<typeof loginSchema>) {
  try {
    const ip = await getClientIp();
    await consumeRateLimit({
      key: `login:ip:${ip}`,
      limit: 10,
      windowMs: 10 * 60 * 1000,
    });

    const rawEmail =
      typeof data?.email === "string" ? data.email.trim().toLowerCase() : "";
    if (rawEmail) {
      await consumeRateLimit({
        key: `login:email:${rawEmail}`,
        limit: 20,
        windowMs: 10 * 60 * 1000,
      });
    }

    const parsed = loginSchema.safeParse(data);
    if (!parsed.success) {
      return {
        error: "Validation failed",
        fields: parsed.error.flatten().fieldErrors,
      };
    }

    await dbConnect();

    const user = await User.findOne({ email: parsed.data.email });
    if (!user) {
      await consumeRateLimit({
        key: `login:failed-email:${parsed.data.email.toLowerCase()}`,
        limit: 5,
        windowMs: 10 * 60 * 1000,
      });
      return { error: "Invalid email or password" };
    }

    const isMatch = await user.comparePassword(parsed.data.password);
    if (!isMatch) {
      await consumeRateLimit({
        key: `login:failed-email:${parsed.data.email.toLowerCase()}`,
        limit: 5,
        windowMs: 10 * 60 * 1000,
      });
      return { error: "Invalid email or password" };
    }

    const sessionResult = await (
      auth.api as unknown as MongooseSessionAPI
    ).createMongooseSession({
      body: {
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      },
      headers: await headers(),
    });

    const token = sessionResult?.token ?? sessionResult?.session?.token;
    const expiresAt =
      sessionResult?.expiresAt ?? sessionResult?.session?.expiresAt;

    if (!token) {
      return { error: "Unable to create login session. Please try again." };
    }

    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();

    cookieStore.set("better-auth.session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiresAt
        ? new Date(expiresAt)
        : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  } catch (error: unknown) {
    if (error instanceof RateLimitExceededError) {
      return { error: "Too many requests. Please try again later." };
    }
    console.error("Login Error:", error);
    return {
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred during login",
    };
  }

  return { success: true };
}

export async function logoutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error: unknown) {
    console.error("Logout Error:", error);
  }

  const cookieStore = await cookies();
  cookieStore.delete("better-auth.session_token");
  redirect("/login");
}
