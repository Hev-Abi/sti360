export const roleRedirect = (role) => {
  switch (role) {
    case "admin":
      return "/admin-dashboard";

    case "student":
      return "/student-dashboard";

    case "marketing":
      return "/marketing-dashboard";

    case "guidance":
      return "/guidance-dashboard";

    default:
      return "/";
  }
};