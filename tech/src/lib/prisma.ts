import * as path from "node:path";
import { PrismaClient } from "@/generated/prisma";

/**
 * Lazily-initialised PrismaClient singleton.
 *
 * Development (NODE_ENV=development):
 *   Uses PGlite — in-process PostgreSQL. No external DB, no env vars needed.
 *   Data stored in prisma/dev-pglite/ directory.
 *
 * Production:
 *   Uses standard pg Pool against an external PostgreSQL host (Supabase).
 *   Requires DATABASE_URL env var with a real connection string.
 *
 * Usage:
 *   const prisma = await getPrisma();
 *   const users = await prisma.profile.findMany();
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

async function createPrismaClient(): Promise<PrismaClient> {
  // Reuse existing client if available (HMR safety)
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  if (
    process.env.NODE_ENV === "development" ||
    !process.env.DATABASE_URL ||
    process.env.DATABASE_URL.includes("placeholder")
  ) {
    // PGlite — in-process PostgreSQL for local dev & build (no external DB needed)
    const { PGlite } = await import("@electric-sql/pglite");
    const { PrismaPGlite } = await import("pglite-prisma-adapter");

    const dataDir = path.join(process.cwd(), "prisma/dev-pglite");
    const pglite = new PGlite({ dataDir });

    // Wait for PGlite to be fully ready before creating the adapter.
    await pglite.query("SELECT 1 AS pglite_ready");

    const adapter = new PrismaPGlite(pglite);
    const client = new PrismaClient({ adapter });
    globalForPrisma.prisma = client;
    return client;
  }

  // Production: PostgreSQL via pg adapter
  const { Pool } = await import("pg");
  const { PrismaPg } = await import("@prisma/adapter-pg");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const client = new PrismaClient({ adapter, log: ["error"] });
  globalForPrisma.prisma = client;
  return client;
}

let prismaPromise: Promise<PrismaClient> | undefined;

/**
 * Returns a fully-initialised PrismaClient.
 *
 * In dev (PGlite), the first call awaits PGlite startup.
 * Subsequent calls return the cached singleton immediately.
 */
export async function getPrisma(): Promise<PrismaClient> {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  if (!prismaPromise) {
    prismaPromise = createPrismaClient();
  }
  return prismaPromise;
}

export default getPrisma;