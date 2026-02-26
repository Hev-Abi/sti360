import { supabase } from "./supabase";

export const logoutUser = async () => {
  try {
    await supabase.auth.signOut();

    // clear any local storage if used
    localStorage.clear();
    sessionStorage.clear();

    // force reload so protected routes reset
    window.location.href = "/";
  } catch (err) {
    console.error("Logout error:", err);
  }
};