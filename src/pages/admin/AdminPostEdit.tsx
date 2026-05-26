import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAdminAuth } from "@/hooks/useAdminAuth";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 100);
}

const AdminPostEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { loading: authLoading, isAdmin } = useAdminAuth();
  const isNew = !id;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [published, setPublished] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (isNew || !isAdmin) return;
    (async () => {
      const { data, error } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
      if (error) { toast.error(error.message); return; }
      if (data) {
        setTitle(data.title);
        setSlug(data.slug);
        setExcerpt(data.excerpt ?? "");
        setBody(data.body ?? "");
        setCoverUrl(data.cover_image_url ?? "");
        setPublished(data.published);
      }
      setLoading(false);
    })();
  }, [id, isNew, isAdmin]);

  const onTitle = (v: string) => {
    setTitle(v);
    if (isNew && !slug) setSlug(slugify(v));
  };

  const uploadImage = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("blog-images").upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
      setCoverUrl(data.publicUrl);
      toast.success("Image uploaded");
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    if (!title || !slug) return toast.error("Title and slug are required");
    setSaving(true);
    const payload = {
      title,
      slug: slugify(slug),
      excerpt: excerpt || body.slice(0, 200),
      body,
      cover_image_url: coverUrl || null,
      published,
      published_at: published ? new Date().toISOString() : null,
    };
    const op = isNew
      ? supabase.from("posts").insert(payload).select("id").single()
      : supabase.from("posts").update(payload).eq("id", id!).select("id").single();
    const { error } = await op;
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Saved");
    navigate("/admin/blog");
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!isAdmin) {
    navigate("/admin/blog");
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <Link to="/admin/blog" className="inline-flex items-center gap-2 text-gold hover:text-gold-dark mb-6 text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to posts
        </Link>

        <h1 className="text-3xl font-serif font-bold text-foreground mb-8">
          {isNew ? "New Post" : "Edit Post"}
        </h1>

        <div className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => onTitle(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
            <p className="text-xs text-muted-foreground mt-1">Will appear at /blog/{slug || "your-slug"}</p>
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt (optional)</Label>
            <Textarea id="excerpt" rows={2} value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
          </div>

          <div>
            <Label>Cover image</Label>
            {coverUrl && (
              <img src={coverUrl} alt="" className="mt-2 max-h-48 rounded border border-border" />
            )}
            <div className="mt-2 flex gap-2 items-center">
              <Input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0])}
              />
              {uploading && <span className="text-xs text-muted-foreground">Uploading…</span>}
            </div>
            <Input
              className="mt-2"
              placeholder="…or paste an image URL"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="body">Body (Markdown)</Label>
            <Textarea
              id="body"
              rows={20}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="font-mono text-sm"
              placeholder="# Heading&#10;&#10;Paragraph text. Use **bold** and *italic*."
            />
            <p className="text-xs text-muted-foreground mt-1">
              Supports Markdown: # headings, **bold**, *italic*, lists, links, blockquotes.
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
            <Switch checked={published} onCheckedChange={setPublished} id="pub" />
            <Label htmlFor="pub" className="cursor-pointer">
              {published ? "Published (live on site)" : "Draft (only you can see it)"}
            </Label>
          </div>

          <div className="flex gap-2">
            <Button onClick={save} disabled={saving} className="bg-gold hover:bg-gold-dark text-primary">
              {saving ? "Saving…" : "Save"}
            </Button>
            <Link to="/admin/blog">
              <Button variant="outline">Cancel</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPostEdit;
