import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect API routes that require authentication
  const { pathname } = request.nextUrl;

  // Public routes that don't require auth
  const publicRoutes = [
    "/",
    "/api/auth/register",
    "/api/auth/session",
    "/api/courses",
    "/api/webhooks/toss",
  ];

  // Check if the route matches a public pattern
  const isPublicRoute =
    publicRoutes.some((route) => pathname === route) ||
    pathname.match(/^\/api\/courses\/[^/]+$/) !== null ||
    pathname.match(/^\/api\/courses\/[^/]+\/lessons$/) !== null;

  // Admin routes require admin role
  if (pathname.startsWith("/api/admin")) {
    if (!user) {
      return NextResponse.json(
        { error: { code: "UNAUTHORIZED", message: "인증이 필요합니다." } },
        { status: 401 }
      );
    }
    // Role check handled in the route handler
  }

  // Protected routes require authentication
  const protectedRoutes = [
    "/api/payments",
    "/api/subscriptions",
    "/api/users",
    "/api/lessons",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !user) {
    return NextResponse.json(
      { error: { code: "UNAUTHORIZED", message: "인증이 필요합니다." } },
      { status: 401 }
    );
  }

  return supabaseResponse;
}
