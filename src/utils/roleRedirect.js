export function redirectByRole(role, navigate) {
  switch (role) {
    case "A":
      navigate("/admin-dashboard");
      break;

    case "S":
      navigate("/student-dashboard");
      break;

    case "G":
      navigate("/guidance-dashboard");
      break;

    case "F":
      navigate("/frontdesk-dashboard");
      break;

    case "SAO":
      navigate("/marketing-dashboard");
      break;

    default:
      navigate("/");
  }
}