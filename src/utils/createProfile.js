import { supabase } from "../lib/supabase";

export const createProfile = async (id, email) => {
  await supabase.from("profiles").insert([
    {
      id,
      email,
      role: "student",
    },
  ]);
};