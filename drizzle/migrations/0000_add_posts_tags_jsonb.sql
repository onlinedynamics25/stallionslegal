ALTER TABLE public.posts ADD COLUMN tags_jsonb jsonb NOT NULL DEFAULT '[]'::jsonb;
UPDATE public.posts SET tags_jsonb = to_jsonb(tags);
COMMENT ON COLUMN public.posts.tags IS 'DEPRECATED: replaced by tags_jsonb (jsonb). Do not write to this column.';