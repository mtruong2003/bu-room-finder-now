// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ilqvadnqmavrkbjaanwc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlscXZhZG5xbWF2cmtiamFhbndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4OTUxNTgsImV4cCI6MjA2NjQ3MTE1OH0.ktaYm9GH9x8zgRn5IXsMNQOZqdmpgjEvI5xN9VqaCjE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);