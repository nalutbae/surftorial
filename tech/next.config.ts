import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 런타임에서 DB 파일을 번들에 포함
  outputFileTracingIncludes: {
    "/*": ["./prisma/dev.db"],
  },
};

export default nextConfig;
