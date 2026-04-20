"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth";
import { z } from "zod";
import { useState, useTransition } from "react";
import { loginAction } from "@/actions/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    setServerError(null);
    startTransition(async () => {
      const res = await loginAction(data);
      if (res?.error) {
        setServerError(res.error);
        toast.error(res.error);
      } else if (res?.success) {
        toast.success("Successfully logged in!");
        router.replace("/admin");
        router.refresh();
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-dark2 border border-primary/10 shadow-lg">
      <h2 className="text-2xl font-bold text-center text-primary mb-6 font-rajdhani">
        Welcome Back
      </h2>

      {serverError && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm text-center">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs text-muted font-semibold uppercase tracking-wider">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full bg-dark border border-primary/20 text-text p-3 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs text-muted font-semibold uppercase tracking-wider">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="w-full bg-dark border border-primary/20 text-text p-3 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-6 bg-primary text-dark font-rajdhani font-bold text-lg p-3 rounded-xl hover:bg-primary-dark transition-all disabled:opacity-70 flex justify-center items-center gap-2"
        >
          {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
          {isPending ? "Logging in..." : "Sign In"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
