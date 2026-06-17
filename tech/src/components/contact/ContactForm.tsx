"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요";
    }

    if (!formData.type) {
      newErrors.type = "문의 유형을 선택해주세요";
    }

    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해주세요";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "문의 내용은 최소 10자 이상 입력해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call (replace with actual API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", type: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="font-brand font-bold text-xl text-slate-900 mb-6">문의하기</h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm font-semibold">
            ✓ 문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm font-semibold">
            문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.name ? "border-red-300" : "border-slate-200"
            } focus:border-ocean-500 focus:outline-none transition-colors`}
            placeholder="홍길동"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.email ? "border-red-300" : "border-slate-200"
            } focus:border-ocean-500 focus:outline-none transition-colors`}
            placeholder="example@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-semibold text-slate-900 mb-2">
            문의 유형 <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.type ? "border-red-300" : "border-slate-200"
            } focus:border-ocean-500 focus:outline-none transition-colors bg-white`}
          >
            <option value="">문의 유형을 선택해주세요</option>
            <option value="course">강좌 관련</option>
            <option value="payment">결제/환불</option>
            <option value="account">계정 문제</option>
            <option value="technical">기술 지원</option>
            <option value="other">기타</option>
          </select>
          {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
            문의 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              errors.message ? "border-red-300" : "border-slate-200"
            } focus:border-ocean-500 focus:outline-none transition-colors resize-none`}
            placeholder="문의 내용을 자세히 적어주세요"
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          <p className="mt-1 text-xs text-slate-500 text-right">
            {formData.message.length}자
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "접수 중..." : "문의 접수하기"}
        </button>
      </form>
    </div>
  );
}