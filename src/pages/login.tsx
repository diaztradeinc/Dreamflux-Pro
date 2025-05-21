import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  useEffect(() => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Redirecting to Google login...</p>
    </div>
  );
}
