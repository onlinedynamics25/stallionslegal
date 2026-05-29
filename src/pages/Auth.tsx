import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Auth = () => {
  const navigate = useNavigate();
  const { user, signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/admin/blog", { replace: true });
  }, [user, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (mode === "signin") {
      const { error } = await signIn(email, password);
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("Signed in");
      navigate("/admin/blog", { replace: true });
    } else {
      const { error } = await signUp(email, password);
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("Account created. Check your email to confirm, then sign in.");
      setMode("signin");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
            {mode === "signin" ? "Sign in" : "Create account"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Access the admin area for Stallions Sterling.
          </p>

          <Tabs value={mode} onValueChange={(v) => setMode(v as "signin" | "signup")} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin" />
            <TabsContent value="signup" />
          </Tabs>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold-dark text-primary">
              {loading ? "Working…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
