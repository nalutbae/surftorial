import RegisterForm from "@/components/auth/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입 — Surftorial",
  description: "Surftorial 회원가입으로 서핑 강좌를 시작하세요.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}