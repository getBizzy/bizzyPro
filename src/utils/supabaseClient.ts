import { createClient } from "@supabase/supabase-js";

console.log("Environment Variables Loaded in React:");
console.log("Supabase URL:", process.env);
console.log("Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Loaded" : "Not Loaded");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);