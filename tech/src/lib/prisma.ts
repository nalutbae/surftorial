import { PrismaClient } from "@/generated/prisma";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { copyFileSync, existsSync } from "fs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ────────────────────────────── DB setup ──────────────────────────────
const isVercel = !!(process.env.VERCEL || process.env.VERCEL_ENV);

function getDbPath(): string {
  if (isVercel) {
    // 런타임: /tmp/에 복사본 사용
    return "file:/tmp/dev.db";
  }
  return "file:./prisma/dev.db";
}

function ensureRuntimeDb(): void {
  if (!isVercel) return;
  if (existsSync("/tmp/dev.db")) return;

  // outputFileTracingIncludes로 번들된 DB를 /tmp로 복사
  const bundledPath = "./prisma/dev.db";
  if (existsSync(bundledPath)) {
    copyFileSync(bundledPath, "/tmp/dev.db");
    console.log("[surftorial] DB copied to /tmp/dev.db");
  } else {
    console.error("[surftorial] DB not found at", bundledPath);
  }
}

// ────────────────────────── client factory ───────────────────────────
function createPrismaClient(): PrismaClient {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  // Vercel 런타임: DB를 /tmp로 복사
  ensureRuntimeDb();

  const dbUrl = getDbPath();
  console.log("[surftorial] Prisma →", dbUrl);

  const adapter = new PrismaLibSql({ url: dbUrl });
  const client = new PrismaClient({ adapter });
  globalForPrisma.prisma = client;
  return client;
}

// ─────────────────────────── eager init ──────────────────────────────
const prisma: PrismaClient = createPrismaClient();

// ─────────────────────────── exports ─────────────────────────────────
export async function getPrisma(): Promise<PrismaClient> {
  return prisma;
}
export default prisma;
