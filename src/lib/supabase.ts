// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// Load environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supapeUrl || !supabaseAnonKey) {
  throw new Error("❌ Missing Supabase environment variables. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.")
}

// Create the typed Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  }
})
