import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";
import { logoutUser } from "../lib/auth";

const NAV_ITEMS = [
  { key: "reports", label: "View Reports", path: "/admin-dashboard/reports" },
  { key: "employment", label: "Employment Analytics", path: "/admin-dashboard/employment" },
  { key: "users", label: "Manage Users", path: "/admin-dashboard/users" },
];

export default function AcademicDashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("reports");

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };

  const handleNav = (key) => {
    setActiveNav(key);
    const selected = NAV_ITEMS.find((item) => item.key === key);
    if (selected) navigate(selected.path);
  };

  return (
    <DashboardShell
      role="A"
      nav={NAV_ITEMS}
      activeNav={activeNav}
      setActiveNav={handleNav}
      onLogout={handleLogout}
    >
      <Outlet />
    </DashboardShell>
  );
}