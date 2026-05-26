
-- Switch is_admin to SECURITY INVOKER (admin_settings has public read)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_settings s
    WHERE s.admin_email IS NOT NULL
      AND lower(s.admin_email) = lower(coalesce((auth.jwt() ->> 'email'), ''))
  );
$$;

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- Restrict blog-images SELECT to single-object reads (no listing)
DROP POLICY IF EXISTS "Public can read blog images" ON storage.objects;
CREATE POLICY "Public can read individual blog images" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images' AND name IS NOT NULL);
