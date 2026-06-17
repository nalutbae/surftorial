import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /auth/confirm
// Handles email confirmation link clicks from Supabase Auth.
// This route is called when a user clicks the confirmation link in their email.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as
    | "signup"
    | "recovery"
    | "magiclink"
    | null;
  const next = searchParams.get("next") ?? "/";
  const { origin } = new URL(request.url);

  if (tokenHash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });

    if (!error) {
      // Email confirmed successfully — redirect to the app
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Confirmation failed — redirect to login with error
  return NextResponse.redirect(
    `${origin}/login?error=email_confirmation_failed`
  );
}