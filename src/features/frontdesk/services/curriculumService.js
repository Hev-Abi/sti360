import { supabase } from "../../lib/supabase";

export const getAllAnalysis = async () => {
  const { data, error } = await supabase
    .from("performance_analysis")
    .select("*");

  if (error) throw error;
  return data;
};