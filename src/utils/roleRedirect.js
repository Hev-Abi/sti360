export const roleRedirect = (role) => {
  switch (role) {
    case "admin":
      return "/admin-dashboard";

    case "student":
      return "/student-dashboard";

    case "sao":
      return "/marketing-dashboard";

    case "guidance":
      return "/guidance-dashboard";

    case "frontdesk":
      return "/frontdesk-dashboard";

    default:
      return "/";
  }
};