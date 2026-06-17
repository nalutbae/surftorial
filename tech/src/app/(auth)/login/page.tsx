import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 — Surftorial",
  description: "Surftorial에 로그인하여 서핑 강좌를 계속하세요.",
};

export default function LoginPage() {
  return <LoginForm />;
}