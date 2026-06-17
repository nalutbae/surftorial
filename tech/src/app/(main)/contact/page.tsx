import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "1:1 문의 — Surftorial",
  description: "Surftorial 서핑 강좌에 대해 궁금한 점이 있으신가요? 1:1 문의를 통해 빠르고 친절하게 답변해 드립니다.",
  openGraph: {
    title: "1:1 문의 — Surftorial",
    description: "서핑 강좌에 대해 궁금한 점이 있으신가요?",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-ocean-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-400" />
            지원
          </div>
          <h1 className="font-brand font-bold text-3xl md:text-4xl tracking-tight mb-4">
            1:1 문의
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            궁금한 점이 있으시면 언제든 문의해 주세요. 빠르고 친절하게 답변해 드립니다.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}