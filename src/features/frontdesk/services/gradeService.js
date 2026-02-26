import { supabase } from "../../../lib/supabase";

export const getStudents = async () => {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .order("full_name");

  if (error) throw error;
  return data;
};

export const getGrades = async (studentId) => {
  const { data, error } = await supabase
    .from("student_grades")
    .select("*")
    .eq("student_id", studentId);

  if (error) throw error;
  return data;
};

export const addGrade = async (grade) => {
  const { error } = await supabase
    .from("student_grades")
    .insert([grade]);

  if (error) throw error;
};