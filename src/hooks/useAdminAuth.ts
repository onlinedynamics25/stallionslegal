import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export function useAdminAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        if (!cancelled) navigate("/auth");
        return;
      }
      const { data } = await supabase.from("admin_settings").select("admin_email").maybeSingle();
      const ok = !!data?.admin_email && data.admin_email.toLowerCase() === (user.email ?? "").toLowerCase();
      if (cancelled) return;
      setEmail(user.email ?? null);
      setIsAdmin(ok);
      setLoading(false);
    };

    check();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth");
    });
    return () => { cancelled = true; sub.subscription.unsubscribe(); };
  }, [navigate]);

  return { loading, isAdmin, email };
}
