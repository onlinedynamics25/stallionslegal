-- Make is_admin() SECURITY DEFINER so it can check admin identity without public read on admin_settings
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_settings s
    WHERE s.admin_email IS NOT NULL
      AND lower(s.admin_email) = lower(coalesce((auth.jwt() ->> 'email'), ''))
  );
$function$;

-- Remove public read of admin email; only the admin can read settings
DROP POLICY IF EXISTS "Anyone can read admin email" ON public.admin_settings;
CREATE POLICY "Only admin can read settings"
  ON public.admin_settings FOR SELECT TO authenticated
  USING (public.is_admin());

REVOKE SELECT ON public.admin_settings FROM anon;
GRANT SELECT, UPDATE ON public.admin_settings TO authenticated;
GRANT ALL ON public.admin_settings TO service_role;

-- Scope blog-images reads to files referenced by published posts (or admins)
DROP POLICY IF EXISTS "Public can read individual blog images" ON storage.objects;
DROP POLICY IF EXISTS "Public can read blog images" ON storage.objects;
CREATE POLICY "Read blog images of published posts"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'blog-images'
    AND (
      public.is_admin()
      OR EXISTS (
        SELECT 1 FROM public.posts p
        WHERE p.published = true
          AND (
            p.cover_image_url LIKE '%' || storage.objects.name
            OR p.body LIKE '%' || storage.objects.name || '%'
          )
      )
    )
  );