import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const pretendard = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surftorial — 서핑 온라인 강좌 플랫폼",
  description: "파도 위에서의 경험을 온라인으로. 초보자부터 중급 서퍼까지, 체계적인 서핑 강좌를 언제 어디서나.",
  keywords: ["서핑", "서핑 강좌", "서핑 레슨", "온라인 강좌", "스포츠"],
  authors: [{ name: "Surftorial" }],
  openGraph: {
    title: "Surftorial — 서핑 온라인 강좌 플랫폼",
    description: "파도 위에서의 경험을 온라인으로. 초보자부터 중급 서퍼까지, 체계적인 서핑 강좌를 언제 어디서나.",
    type: "website",
    locale: "ko_KR",
    siteName: "Surftorial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surftorial — 서핑 온라인 강좌 플랫폼",
    description: "파도 위에서의 경험을 온라인으로. 초보자부터 중급 서퍼까지, 체계적인 서핑 강좌를 언제 어디서나.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
