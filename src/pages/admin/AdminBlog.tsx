import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Eye, EyeOff, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const AdminBlog = () => {
  const { loading, isAdmin, email } = useAdminAuth();
  const qc = useQueryClient();

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, published, published_at, updated_at")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: isAdmin,
  });

  const togglePublished = async (id: string, current: boolean) => {
    const { error } = await supabase
      .from("posts")
      .update({ published: !current, published_at: !current ? new Date().toISOString() : null })
      .eq("id", id);
    if (error) return toast.error(error.message);
    toast.success(!current ? "Published" : "Unpublished");
    qc.invalidateQueries({ queryKey: ["admin-posts"] });
  };

  const remove = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    qc.invalidateQueries({ queryKey: ["admin-posts"] });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-16">
          <div className="max-w-md text-center bg-card border border-border rounded-lg p-8">
            <h1 className="text-2xl font-serif font-bold text-foreground mb-2">Not authorized</h1>
            <p className="text-muted-foreground text-sm mb-4">
              You're signed in as <span className="font-medium text-foreground">{email}</span> but this email isn't the configured admin.
            </p>
            <p className="text-muted-foreground text-xs mb-6">
              Ask the project owner to set this email as the admin in the database, or sign in with the admin email.
            </p>
            <Button onClick={signOut} variant="outline" className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Blog Admin</h1>
            <p className="text-muted-foreground text-sm mt-1">Signed in as {email}</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" /> Sign out
            </Button>
            <Link to="/admin/blog/new">
              <Button className="bg-gold hover:bg-gold-dark text-primary">
                <Plus className="h-4 w-4 mr-2" /> New Post
              </Button>
            </Link>
          </div>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading posts…</p>}

        {posts && posts.length === 0 && (
          <p className="text-muted-foreground">No posts yet. Click "New Post" to write your first one.</p>
        )}

        <div className="space-y-3">
          {posts?.map((p) => (
            <div key={p.id} className="bg-card border border-border rounded-lg p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif text-lg text-foreground truncate">{p.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${p.published ? "bg-gold/20 text-gold-dark" : "bg-muted text-muted-foreground"}`}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">/{p.slug}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => togglePublished(p.id, p.published)}>
                  {p.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Link to={`/admin/blog/${p.id}`}>
                  <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="sm" variant="outline" onClick={() => remove(p.id, p.title)} className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminBlog;
