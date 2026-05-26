
-- Admin settings (single row holds the admin email)
CREATE TABLE public.admin_settings (
  id INT PRIMARY KEY DEFAULT 1,
  admin_email TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);
INSERT INTO public.admin_settings (id, admin_email) VALUES (1, NULL);
ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;

-- helper: is current user the admin?
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_settings s
    WHERE s.admin_email IS NOT NULL
      AND lower(s.admin_email) = lower(coalesce((auth.jwt() ->> 'email'), ''))
  );
$$;

CREATE POLICY "Anyone can read admin email" ON public.admin_settings FOR SELECT USING (true);
CREATE POLICY "Only admin can update settings" ON public.admin_settings FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Posts table
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  body TEXT NOT NULL DEFAULT '',
  cover_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published posts" ON public.posts FOR SELECT USING (published = true OR public.is_admin());
CREATE POLICY "Admin can insert posts" ON public.posts FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin can update posts" ON public.posts FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admin can delete posts" ON public.posts FOR DELETE USING (public.is_admin());

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER posts_touch BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE INDEX posts_published_idx ON public.posts (published, published_at DESC);

-- Storage bucket for blog cover images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

CREATE POLICY "Public can read blog images" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
CREATE POLICY "Admin can upload blog images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND public.is_admin());
CREATE POLICY "Admin can update blog images" ON storage.objects FOR UPDATE USING (bucket_id = 'blog-images' AND public.is_admin());
CREATE POLICY "Admin can delete blog images" ON storage.objects FOR DELETE USING (bucket_id = 'blog-images' AND public.is_admin());
