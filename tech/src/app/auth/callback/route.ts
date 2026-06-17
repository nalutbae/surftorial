import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /auth/callback
// Handles the OAuth callback redirect from Supabase Auth.
// Exchanges the auth code for a session and sets cookies.
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // If user came from OAuth, they may also have a "next" param
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Successful auth — redirect to the intended page
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // If no code or error, redirect to login with error message
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
}