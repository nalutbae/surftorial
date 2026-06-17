import { execSync } from "child_process";

let setupDone = false;

/**
 * Vercel 서버리스: 최초 로딩 시 DB push + seed (동기).
 * execSync로 실행하므로 module level에서 호출 가능.
 */
export function ensureDbSync(): void {
  if (setupDone) return;

  const isVercel = !!(process.env.VERCEL || process.env.VERCEL_ENV);
  if (!isVercel) {
    setupDone = true;
    return;
  }

  const dbUrl = "file:/tmp/dev.db";
  console.log("[surftorial] Vercel cold start — setting up DB at", dbUrl);

  // DATABASE_URL을 명시해서 prisma CLI와 seed가 같은 DB를 바라보게 함
  const env = { ...process.env, DATABASE_URL: dbUrl };

  try {
    // 1. 스키마 push
    execSync("npx prisma db push --schema=prisma/schema.prisma --accept-data-loss", {
      cwd: process.cwd(),
      env,
      stdio: "pipe",
      timeout: 15_000,
    });
    console.log("[surftorial] prisma db push OK");

    // 2. seed
    execSync("npx tsx prisma/seed.ts", {
      cwd: process.cwd(),
      env,
      stdio: "pipe",
      timeout: 10_000,
    });
    console.log("[surftorial] seed OK");
  } catch (err) {
    console.error("[surftorial] DB setup FAILED:", String(err));
    throw err;
  }

  setupDone = true;
}
