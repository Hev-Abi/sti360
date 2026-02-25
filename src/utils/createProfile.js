import { supabase } from "../lib/supabase";

export async function createProfile(userId, role = "student") {
  const { error } = await supabase.from("profiles").insert([
    {
      id: userId,
      role: role,
    },
  ]);

  return error;
}