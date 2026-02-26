import { supabase } from "./supabase";

/* =========================
   CREATE USER (ADMIN ONLY)
========================= */
export const createUser = async ({ email, password, role, full_name }) => {
  try {
    // 1️⃣ Create auth user
    const { data: authData, error: authError } =
      await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });

    if (authError) throw authError;

    const userId = authData.user.id;

    // 2️⃣ Insert profile
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: userId,
        email,
        full_name,
        role,
      });

    if (profileError) throw profileError;

    return { success: true };
  } catch (err) {
    console.error("Create user error:", err);
    return { success: false, error: err.message };
  }
};

/* =========================
   FETCH USERS
========================= */
export const fetchUsers = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

/* =========================
   UPDATE ROLE
========================= */
export const updateUserRole = async (id, role) => {
  const { error } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", id);

  if (error) throw error;
};