import { supabase } from "../lib/supabase";

export const getUserRole = async (userId) => {
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  return data?.role || "student";
};