import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: any;
  body?: any[];
}

const fetchPosts = () =>
  sanityClient.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, image, body
    }`
  );

function getExcerpt(body?: any[]): string {
  if (!body) return "";
  const textBlock = body.find(
    (b) => b._type === "block" && b.children?.some((c: any) => c.text)
  );
  if (!textBlock) return "";
  const text = textBlock.children.map((c: any) => c.text || "").join("");
  return text.length > 160 ? text.substring(0, 160) + "…" : text;
}

const Blog = () => {
  const [search, setSearch] = useState("");

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const filtered = posts?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-gold">Blog</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Insights, updates, and legal perspectives from Stallions Sterling.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="container mx-auto px-4 -mt-6 relative z-10 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-border shadow-md"
          />
        </div>
      </div>

      {/* Posts */}
      <section className="container mx-auto px-4 py-16">
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden animate-pulse border border-border">
                <div className="h-48 bg-muted" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-muted rounded w-1/3" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive text-lg">Failed to load posts. Please ensure CORS is configured in your Sanity project.</p>
          </div>
        )}

        {filtered && filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found.</p>
          </div>
        )}

        {filtered && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug.current}`}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                {post.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={urlFor(post.image).width(600).height(400).url()}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground font-serif text-2xl">S</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <time>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-foreground group-hover:text-gold transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {getExcerpt(post.body)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
