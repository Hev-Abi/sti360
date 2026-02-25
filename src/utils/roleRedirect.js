export function redirectByRole(role, navigate) {
  switch (role) {
    case "admin":
      navigate("/admin-dashboard");
      break;

    case "student":
      navigate("/student-dashboard");
      break;

    case "guidance":
      navigate("/guidance-dashboard");
      break;

    case "frontdesk":
      navigate("/frontdesk-dashboard");
      break;

    case "sao":
      navigate("/marketing-dashboard");
      break;

    default:
      navigate("/");
  }
}