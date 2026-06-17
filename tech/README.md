# Surftorial Backend

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values.

```bash
cp .env.example .env.local
```

## Getting Started

```bash
pnpm install
pnpm prisma generate
pnpm dev
```

## Project Structure

```
src/
├── app/api/          # API Routes (App Router)
│   ├── auth/         # Authentication
│   ├── courses/      # Course CRUD
│   ├── lessons/      # Lesson & progress
│   ├── payments/     # Toss Payments
│   ├── subscriptions/# Subscription management
│   ├── users/        # User profile & enrollments
│   ├── webhooks/     # Toss webhook
│   └── admin/        # Admin endpoints
├── lib/
│   ├── prisma.ts     # Prisma client singleton
│   ├── supabase/     # Supabase auth helpers
│   ├── validations/  # Zod schemas
│   ├── utils/        # Shared utilities
│   └── cloudflare/   # Cloudflare Stream helpers
├── types/            # TypeScript type definitions
└── __tests__/        # Test files
```

## API Documentation

See `docs/api-design.md` for the full API specification.