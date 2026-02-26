import { supabase } from "../../../lib/supabase";

export const getStudents = async () => {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};