import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jjwdohuyzdmfrlawlnbs.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqd2RvaHV5emRtZnJsYXdsbmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5OTgwNTcsImV4cCI6MjA4NzU3NDA1N30._Md8Oxm0buQHOwftwvxNzgOqOMpaWUTd_TSyAfRfwuM";

export const supabase = createClient(supabaseUrl, supabaseKey);