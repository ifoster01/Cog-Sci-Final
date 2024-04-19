import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }
  
  const url = new URL(request.url);
  const login = url.searchParams.get('login');

  if (login === "true") {
    return NextResponse.redirect(`${origin}/authed`);
  }

  // If the user is signing up, create a new user in the database
  const supabase = createClient();
  const { data: user, error: error2 } = await supabase.auth.getUser();

  if (error2) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const { error: error3 } = await supabase
    .from("users")
    .insert([{
      id: user?.user?.id,
      correct: 0,
      incorrect: 0,
      total: 0,
      question_num: 0,
      first_name: user?.user?.user_metadata?.full_name?.split(" ")[0],
      last_name: user?.user?.user_metadata?.full_name?.split(" ")[1]
  }]);

  if (error3) {
    return NextResponse.redirect(`${origin}/login`);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/authed`);
}
