"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { registerSchema, type RegisterInput } from "@/lib/validations";
import { useAuthStore } from "@/stores/auth-store";

export default function RegisterForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema) as any,
    defaultValues: {
      email: "",
      password: "",
      display_name: "",
    },
  });

  const onSubmit = async (data: RegisterInput) => {
    setServerError(null);
    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          display_name: data.display_name,
          phone: data.phone ?? undefined,
          // Role is always "student" on registration.
          // Instructor role can only be assigned by an admin.
          role: "student",
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setLoading(false);
      const errorMessages: Record<string, string> = {
        "User already registered": "이미 가입된 이메일입니다.",
        "Password should be at least 6 characters":
          "비밀번호는 6자 이상이어야 합니다.",
        "Unable to validate email address: invalid format":
          "올바르지 않은 이메일 형식입니다.",
        "Signup requires a valid password": "유효한 비밀번호를 입력해주세요.",
      };
      setServerError(errorMessages[error.message] ?? error.message);
      return;
    }

    // Auto-create profile via API route
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        display_name: data.display_name,
        phone: data.phone,
      }),
    });

    if (!res.ok) {
      // Profile creation failed but auth account was created
      // User can retry profile creation later
      console.warn("Profile creation returned non-OK status:", res.status);
    }

    setLoading(false);
    setEmailSent(true);
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean-50 via-white to-sunset-50 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl card-shadow-lg border border-slate-200 p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-ocean-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              인증 이메일을 보냈습니다
            </h2>
            <p className="text-slate-500 mb-6">
              이메일의 링크를 클릭하여 가입을 완료해주세요.
              <br />
              이메일이 보이지 않으면 스팸함을 확인해주세요.
            </p>
            <Link href="/login" className="btn btn-primary inline-block">
              로그인하러 가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-slate-900 mb-2">회원가입</h1>
          <p className="text-slate-500 mb-6">
            서핑 강좌를 시작하기 위해 계정을 만들어주세요
          </p>

          {serverError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Display Name */}
            <div>
              <label
                htmlFor="display_name"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                이름
              </label>
              <input
                id="display_name"
                type="text"
                autoComplete="name"
                placeholder="홍길동"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors"
                {...register("display_name")}
              />
              {errors.display_name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.display_name.message}
                </p>
              )}
            </div>

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

            {/* Phone (optional) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                휴대전화 <span className="text-slate-400">(선택)</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="01012345678"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition-colors"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
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
                autoComplete="new-password"
                placeholder="영문자+숫자, 8자 이상"
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
                  가입 처리 중…
                </span>
              ) : (
                "회원가입"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">
              이미 계정이 있으신가요?{" "}
              <Link
                href="/login"
                className="font-semibold text-ocean-700 hover:text-ocean-800 transition-colors"
              >
                로그인
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          가입 시 서비스 이용약관과 개인정보처리방침에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}