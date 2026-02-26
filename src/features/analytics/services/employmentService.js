import { supabase } from "../../../lib/supabase";

export async function getEmploymentStats() {
  const { data, error } = await supabase
    .from("employment_status")
    .select("status");

  if (error) throw error;

  const employed = data.filter(d => d.status === "employed").length;
  const unemployed = data.filter(d => d.status === "unemployed").length;

  return { employed, unemployed };
}