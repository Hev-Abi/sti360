import { supabase } from "../../../lib/supabase";

export const getStudentGrades = async (studentId) => {
  const { data, error } = await supabase
    .from("student_grades")
    .select("*")
    .eq("student_id", studentId);

  if (error) throw error;
  return data;
};

export const saveAnalysis = async (analysis) => {
  const { error } = await supabase
    .from("performance_analysis")
    .insert([analysis]);

  if (error) throw error;
};

export const getAnalysis = async (studentId) => {
  const { data } = await supabase
    .from("performance_analysis")
    .select("*")
    .eq("student_id", studentId)
    .single();

  return data;
};