import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // DATABASE_URL is a placeholder for Prisma CLI commands (generate, etc.).
    // In development, the runtime uses PGlite (no external DB needed).
    // In production, set a real PostgreSQL connection string in .env.local.
    url: env("DATABASE_URL"),
  },
});