import { PrismaClient } from "@/generated/prisma";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ────────────────────────────── DB path ──────────────────────────────
function getDbPath(): string {
  if (process.env.VERCEL || process.env.VERCEL_ENV) {
    return "file:/tmp/dev.db";
  }
  return "file:./prisma/dev.db";
}

// ────────────────────────── client factory ───────────────────────────
function createPrismaClient(): PrismaClient {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

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
