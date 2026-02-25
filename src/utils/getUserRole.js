export async function getUserRole() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Role fetch error:", error);
    return null;
  }

  return Array.isArray(data?.roles)
    ? data.roles[0]
    : data?.roles || null;
}