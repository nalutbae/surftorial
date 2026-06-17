import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CoursesPreview from "@/components/CoursesPreview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CoursesPreview />
        <Pricing />
        <section className="bg-gradient-to-br from-ocean-950 to-ocean-800 text-white text-center py-24 px-6">
          <h2 className="font-brand font-extrabold text-2xl md:text-4xl mb-4">
            지금, 파도 위에서 시작하세요 🌊
          </h2>
          <p className="text-base text-slate-300 max-w-[600px] mx-auto mb-8 leading-relaxed">
            처음이라 괜찮아요. 다 여기서부터 시작했으니까. 무료 강좌로 서핑의 세계를 경험해보세요.
          </p>
          <button className="btn btn-sunset btn-lg">
            무료로 시작하기 →
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}