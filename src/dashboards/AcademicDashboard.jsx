import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";
import { supabase } from "../lib/supabase";

export default function AcademicDashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("reports");

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const navItems = [
    { key: "reports", label: "View Reports" },
    { key: "employment", label: "Employment Analytics" },
  ];

  const handleNav = (key) => {
    setActiveNav(key);

    const routes = {
      reports: "/admin-dashboard/reports",
      employment: "/admin-dashboard/employment",
    };

    navigate(routes[key]);
  };

  return (
    <DashboardShell
      role="A"
      nav={navItems}
      activeNav={activeNav}
      setActiveNav={handleNav}
      onLogout={handleLogout}
    >
      <h1>Admin Dashboard</h1>
      <Outlet />
    </DashboardShell>
  );
}