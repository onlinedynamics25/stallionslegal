import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Post {
  id: string;
  title: string;
  slug: string;
  published_at: string | null;
  cover_image_url: string | null;
  body: string;
}

const fetchPost = async (slug: string): Promise<Post | null> => {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, published_at, cover_image_url, body")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw error;
  return data;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug!),
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {isLoading && (
        <div className="pt-32 pb-16 container mx-auto px-4 max-w-3xl animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-4" />
          <div className="h-12 bg-muted rounded w-3/4 mb-6" />
          <div className="h-80 bg-muted rounded mb-8" />
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/5" />
          </div>
        </div>
      )}

      {error && (
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <p className="text-destructive text-lg">Failed to load article.</p>
        </div>
      )}

      {post && (
        <>
          {post.cover_image_url && (
            <div className="pt-20 w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          )}

          <article className={`container mx-auto px-4 max-w-3xl ${post.cover_image_url ? "-mt-20 relative z-10" : "pt-32"} pb-16`}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Calendar className="h-4 w-4" />
              {post.published_at && (
                <time>
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="border-t border-border pt-8 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-foreground prose-a:text-gold">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
          </article>
        </>
      )}

      {!isLoading && !error && !post && (
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-gold hover:text-gold-dark transition-colors">
            ← Back to Blog
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
