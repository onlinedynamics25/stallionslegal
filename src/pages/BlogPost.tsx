import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Clock,
  User,
  ChevronRight,
  Link2,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const SITE_URL = "https://soft-scene-studio.lovable.app";

interface Post {
  id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  author: string | null;
  category: string | null;
  tags: string[] | null;
  excerpt: string | null;
  published_at: string | null;
  cover_image_url: string | null;
  body: string;
}

const POST_FIELDS =
  "id, title, slug, subtitle, author, category, tags, excerpt, published_at, cover_image_url, body";

const fetchPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from("posts")
    .select(POST_FIELDS)
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Post[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const formatDate = (value: string | null) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts", "full"],
    queryFn: fetchPosts,
  });

  const index = posts?.findIndex((p) => p.slug === slug) ?? -1;
  const post = index >= 0 ? posts![index] : undefined;
  const newer = index > 0 ? posts![index - 1] : undefined;
  const older = posts && index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined;

  const related = useMemo(() => {
    if (!posts || !post) return [];
    const others = posts.filter((p) => p.slug !== post.slug);
    const sameCategory = others.filter((p) => p.category && p.category === post.category);
    return [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, 3);
  }, [posts, post]);

  const headings = useMemo(() => {
    if (!post) return [];
    return post.body
      .split("\n")
      .filter((line) => /^##\s+/.test(line))
      .map((line) => {
        const text = line.replace(/^##\s+/, "").trim();
        return { text, id: slugify(text) };
      });
  }, [post]);

  const readingTime = useMemo(() => {
    if (!post) return 0;
    const words = post.body.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }, [post]);

  const canonical = `${SITE_URL}/blog/${slug}`;
  const seoTitle = post ? `${post.title} | Stallions Sterling Law Firm` : "Article";
  const metaDescription = post?.excerpt ?? post?.subtitle ?? "";

  const share = (network: "twitter" | "linkedin" | "facebook") => {
    const url = encodeURIComponent(canonical);
    const text = encodeURIComponent(post?.title ?? "");
    const targets = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    window.open(targets[network], "_blank", "noopener,noreferrer,width=600,height=600");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonical);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not copy the link");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {post && (
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={metaDescription} />
          <link rel="canonical" href={canonical} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={canonical} />
          {post.cover_image_url && (
            <meta property="og:image" content={`${SITE_URL}${post.cover_image_url}`} />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={metaDescription} />
          {post.cover_image_url && (
            <meta name="twitter:image" content={`${SITE_URL}${post.cover_image_url}`} />
          )}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              alternativeHeadline: post.subtitle ?? undefined,
              description: metaDescription,
              image: post.cover_image_url ? `${SITE_URL}${post.cover_image_url}` : undefined,
              datePublished: post.published_at ?? undefined,
              author: { "@type": "Person", name: post.author ?? "Stallions Sterling Law Firm" },
              publisher: {
                "@type": "Organization",
                name: "Stallions Sterling Law Firm",
              },
              articleSection: post.category ?? undefined,
              keywords: (post.tags ?? []).join(", "),
              mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            })}
          </script>
        </Helmet>
      )}

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
        <article>
          {/* Hero */}
          <header className="relative">
            <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
              {post.cover_image_url ? (
                <img
                  src={post.cover_image_url}
                  alt={`${post.title} — featured image`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
                />
              ) : (
                <div className="absolute inset-0 bg-primary" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-charcoal/45" />

              <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12 pt-28">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-cream/70">
                    <li>
                      <Link to="/" className="hover:text-gold transition-colors">
                        Home
                      </Link>
                    </li>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <li>
                      <Link to="/blog" className="hover:text-gold transition-colors">
                        Blog
                      </Link>
                    </li>
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <li aria-current="page" className="text-cream/90 line-clamp-1">
                      {post.title}
                    </li>
                  </ol>
                </nav>

                {post.category && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {post.category}
                  </span>
                )}

                <h1 className="max-w-4xl font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-cream">
                  {post.title}
                </h1>

                {post.subtitle && (
                  <p className="mt-5 max-w-3xl text-base md:text-xl font-light leading-relaxed text-cream/80">
                    {post.subtitle}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/75">
                  {post.author && (
                    <span className="inline-flex items-center gap-2">
                      <User className="h-4 w-4 text-gold" aria-hidden="true" />
                      {post.author}
                    </span>
                  )}
                  {post.published_at && (
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gold" aria-hidden="true" />
                      <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                    {readingTime} min read
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Body + sticky ToC */}
          <div className="container mx-auto px-4 py-14 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-12">
              <div className="min-w-0 max-w-3xl">
                {/* Sharing */}
                <div className="mb-10 flex flex-wrap items-center gap-3 border-y border-border py-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Share
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => share("twitter")}
                      aria-label="Share this article on X"
                      className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Twitter className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => share("linkedin")}
                      aria-label="Share this article on LinkedIn"
                      className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => share("facebook")}
                      aria-label="Share this article on Facebook"
                      className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Facebook className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={copyLink}
                      aria-label="Copy link to this article"
                      className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Link2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div
                  className="prose prose-neutral dark:prose-invert max-w-none
                    prose-headings:font-serif prose-headings:text-foreground prose-headings:tracking-tight
                    prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:scroll-mt-28
                    prose-h3:text-xl prose-h3:mt-10
                    prose-p:text-base md:prose-p:text-[1.0625rem] prose-p:leading-[1.85] prose-p:text-foreground/85
                    prose-strong:text-foreground
                    prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                    prose-li:leading-relaxed prose-li:text-foreground/85 prose-li:marker:text-gold
                    prose-ul:my-6 prose-ol:my-6
                    prose-blockquote:not-italic prose-blockquote:border-l-2 prose-blockquote:border-gold
                    prose-blockquote:bg-secondary/60 prose-blockquote:rounded-r-lg
                    prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:text-foreground
                    prose-blockquote:font-serif prose-blockquote:text-lg md:prose-blockquote:text-xl"
                >
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => {
                        const text = String(children);
                        return <h2 id={slugify(text)}>{children}</h2>;
                      },
                    }}
                  >
                    {post.body}
                  </ReactMarkdown>
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-8">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Prev / next */}
                <nav
                  aria-label="Article navigation"
                  className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {older ? (
                    <Link
                      to={`/blog/${older.slug}`}
                      className="group rounded-lg border border-border p-5 transition-colors hover:border-gold/60"
                    >
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous
                      </span>
                      <p className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                        {older.title}
                      </p>
                    </Link>
                  ) : (
                    <span aria-hidden="true" className="hidden sm:block" />
                  )}
                  {newer && (
                    <Link
                      to={`/blog/${newer.slug}`}
                      className="group rounded-lg border border-border p-5 text-right transition-colors hover:border-gold/60 sm:col-start-2"
                    >
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Next <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <p className="mt-2 font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                        {newer.title}
                      </p>
                    </Link>
                  )}
                </nav>
              </div>

              {/* Table of contents */}
              {headings.length > 0 && (
                <aside className="hidden lg:block">
                  <nav
                    aria-label="Table of contents"
                    className="sticky top-28 rounded-lg border border-border bg-card p-6"
                  >
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      On this page
                    </p>
                    <ul className="space-y-2.5">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="block text-sm leading-snug text-muted-foreground transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </aside>
              )}
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <section className="border-t border-border bg-secondary/40 py-16">
              <div className="container mx-auto px-4">
                <h2 className="mb-8 font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Related Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blog/${item.slug}`}
                      className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-gold/50 hover:shadow-lg"
                    >
                      {item.cover_image_url ? (
                        <img
                          src={item.cover_image_url}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-40 items-center justify-center bg-muted">
                          <span className="font-serif text-2xl text-muted-foreground">S</span>
                        </div>
                      )}
                      <div className="p-5">
                        {item.published_at && (
                          <p className="mb-2 text-xs text-muted-foreground">
                            {formatDate(item.published_at)}
                          </p>
                        )}
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back to all articles
                  </Link>
                </div>
              </div>
            </section>
          )}
        </article>
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
