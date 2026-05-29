import { createClient } from '@supabase/supabase-js';

// Uses Vite-prefixed env vars exposed to the browser.
// SUPABASE_ANON_KEY maps to SUPABASE_PUBLISHABLE_KEY in Lovable Cloud Secrets.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
