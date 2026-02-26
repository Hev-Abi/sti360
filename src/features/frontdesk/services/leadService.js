import { supabase } from "../../../lib/supabase";

export const getLeads = async () => {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const createLead = async (lead) => {
  const { data, error } = await supabase
    .from("leads")
    .insert([lead]);

  if (error) throw error;
  return data;
};

export const updateLeadStatus = async (id, status) => {
  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id);

  if (error) throw error;
};

export const convertLeadToStudent = async (lead) => {
  const { error: studentError } = await supabase
    .from("students")
    .insert([
      {
        full_name: lead.student_name,
        email: lead.email,
        status: "active"
      }
    ]);

  if (studentError) throw studentError;

  const { error: leadError } = await supabase
    .from("leads")
    .update({ status: "enrolled" })
    .eq("id", lead.id);

  if (leadError) throw leadError;
};