"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { loginSchema, type LoginInput } from "@/lib/validations";
import { useAuthStore } from "@/stores/auth-store";

const isDev = process.env.NEXT_PUBLIC_SUPABASE_URL === "https://placeholder.supabase.co";

export default function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    setServerError(null);
    setLoading(true);

    // Dev mode: bypass Supabase Auth entirely, create local session
    if (isDev) {
      let role: "student" | "instructor" | "admin" = "student";
      let displayName: string | null = null;
      let skillLevel: "beginner" | "intermediate" | "advanced" | "expert" = "beginner";

      // Try fetching a dev profile from the session endpoint
      try {
        const profileRes = await fetch("/api/auth/session");
        if (profileRes.ok) {
          const profileJson = await profileRes.json();
          const profile = profileJson?.data?.profile;
          if (profile) {
            role = profile.role ?? "student";
            displayName = profile.displayName ?? profile.display_name ?? null;
            skillLevel = profile.skillLevel ?? profile.skill_level ?? "beginner";
          }
        }
      } catch {
        // No session API available — use sensible defaults
      }

      // admin@localhost → role="admin", student@localhost → role="student"
      if (data.email === "admin@localhost") {
        role = "admin";
        displayName = displayName ?? "관리자";
      } else if (data.email === "student@localhost") {
        role = "student";
        displayName = displayName ?? "파도초보";
      }

      setUser({
        id: `dev-${data.email.replace(/[^a-zA-Z0-9]/g, "-")}`,
        email: data.email,
        displayName: displayName ?? data.email.split("@")[0],
        avatarUrl: null,
        role,
        skillLevel,
      });

      setLoading(false);
      window.location.href = role === "admin" ? "/admin" : "/";
      return;
    }

    // Production: use Supabase Auth
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setLoading(false);
      // Map common Supabase auth errors to Korean messages
      const errorMessages: Record<string, string> = {
        "Invalid login credentials": "이메일 또는 비밀번호가 올바르지 않습니다.",
        "Email not confirmed": "이메일 인증이 완료되지 않았습니다. 이메일을 확인해주세요.",
        "Too many requests": "로그인 시도가 너무 많습니다. 잠시 후 다시 시도해주세요.",
      };
      setServerError(errorMessages[error.message] ?? error.message);
      return;
    }

    // Fetch profile after successful login
    // IMPORTANT: Read role from the DB profile, NOT from user_metadata.
    // user_metadata.role is client-controllable (security risk — C-1).
    // The DB profile.role is the authoritative source.
    const { data: authData } = await supabase.auth.getUser();
    if (authData?.user) {
      // Fetch the authoritative profile from our API
      let role: "student" | "instructor" | "admin" = "student";
      let displayName: string | null = null;
      let avatarUrl: string | null = null;
      let skillLevel: "beginner" | "intermediate" | "advanced" | "expert" = "beginner";

      try {
        const profileRes = await fetch("/api/auth/session");
        if (profileRes.ok) {
          const profileJson = await profileRes.json();
          const profile = profileJson?.data?.profile;
          if (profile) {
            role = profile.role ?? "student";
            displayName = profile.displayName ?? profile.display_name ?? null;
            avatarUrl = profile.avatarUrl ?? profile.avatar_url ?? null;
            skillLevel = profile.skillLevel ?? profile.skill_level ?? "beginner";
          }
        }
      } catch {
        // Profile fetch failed — fall through with safe defaults
      }

      setUser({
        id: authData.user.id,
        email: authData.user.email ?? "",
        displayName: displayName ?? authData.user.user_metadata?.display_name ?? null,
        avatarUrl: avatarUrl ?? authData.user.user_metadata?.avatar_url ?? null,
        role,
        skillLevel,
      });
    }

    setLoading(false);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-50 via-white to-sunset-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              width="40"
              height="40"
              className="text-ocean-700"
            >
              <path
                d="M4 22c4-6 8 2 12-4s8-2 12 4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M14 14l4-2v8" fill="currentColor" />
            </svg>
            <span className="font-brand font-extrabold text-2xl text-ocean-700">
              Surftorial
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl card-shadow-lg border border-slate-200 p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">로그인</h1>
          <p className="text-slate-500 mb-6">
            서핑 강좌를 이어서 시작하세요
          </p>

          {serverError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {serverError}
            </div>
          )}

          {/* Dev login shortcut — only visible in development */}
          {isDev && (
            <button
              type="button"
              onClick={() =>
                onSubmit({ email: "admin@localhost", password: "admin" })
              }
              className="w-full mb-4 px-4 py-2.5 border-2 border-dashed border-amber-300 bg-amber-50 rounded-lg text-sm font-medium text-amber-800 hover:bg-amber-100 transition-colors"
            >
              🛠️ 개발자 로그인 (admin@localhost)
            </button>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="hello@surftorial.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors"
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn btn-sunset btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  로그인 중…
                </span>
              ) : (
                "로그인"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              아직 계정이 없으신가요?{" "}
              <Link
                href="/register"
                className="font-semibold text-ocean-700 hover:text-ocean-800 transition-colors"
              >
                회원가입
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          © 2025 Surftorial. 파도 위에서의 경험을 온라인으로.
        </p>
      </div>
    </div>
  );
}