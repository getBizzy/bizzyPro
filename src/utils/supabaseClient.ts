import { createClient, SupabaseClient } from "@supabase/supabase-js";

// CRA only exposes env vars prefixed with REACT_APP_ (set them in .env, see .env.example)
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Export null when not configured so the app can render without a kudos backend
export const supabase: SupabaseClient | null =
    supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
