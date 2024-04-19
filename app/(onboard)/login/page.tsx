import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";
import { PasswordInput } from "../password-input";
import { headers } from "next/headers";
import Image from "next/image";

import Logo from "@/public/app.jpg"
import Google from '@/public/google.svg'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const oAuthSignIn = async () => {
    "use server";

    const supabase = createClient();
    const origin = headers().get("origin");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback?login=true`,
      },
    });

    if (error) {
      return redirect("/login?message=An error occurred! Please try again");
    }
    
    return redirect(data.url);
  }

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Invalid username and/or password! Please try again");
    }

    return redirect("/authed");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <div className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        {/* Google sign in */}
        <form>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href="/">
              <Image src={Logo} alt="App Logo" height={100} width={100} className="mx-auto" />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <SubmitButton
            formAction={oAuthSignIn}
            className="bg-red-500 flex justify-center items-center rounded-md px-4 py-2 text-foreground mb-2 w-full text-white mt-4"
            pendingText="Signing In..."
          >
            <Image src={Google} alt="Google Logo" className="w-5 h-5 mr-2" />
            Sign in with google  
          </SubmitButton>
        </form>
        <div className="flex items-center">
          <div className="h-[1px] bg-gray-400 w-full" />
          <p className="text-center text-gray-500 mx-2">or</p>
          <div className="h-[1px] bg-gray-400 w-full" />
        </div>
        {/* Credentials sign in */}
        <form>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mt-6">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <PasswordInput />
              </div>

              <div>
              <SubmitButton
                formAction={signIn}
                className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 w-full text-white mt-8"
                pendingText="Signing In..."
              >
                Sign In
              </SubmitButton>
              </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signup" className="font-semibold leading-6 text-green-700 hover:text-green-600">
                Sign up for free
              </Link>
            </p>
          </div>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-red-500 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
