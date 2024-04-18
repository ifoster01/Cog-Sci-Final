import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { AuthWrapper } from "./AuthContext";
import Header from "@/components/Header";

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
    <div className="flex-1 w-full flex flex-col items-center">
      <Header user={user} />

      <AuthWrapper user={user}>
        {user && children}
      </AuthWrapper>
    </div>
  );
}
