import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { AuthWrapper } from "./AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="w-full flex flex-col justify-between h-screen items-center">
      <Header user={user} />

      <div className="mb-auto w-full">
        <AuthWrapper user={user}>
          {user && children}
        </AuthWrapper>
      </div>

      <Footer />
    </div>
  );
}
