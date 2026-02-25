import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";

export default function AcademicDashboard({ onLogout }) {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("reports");

  const navItems = [
    { key: "reports", label: "View Reports" },
    { key: "employment", label: "Employment Analytics" },
  ];

  const handleNav = (key) => {
    setActiveNav(key);

    if (key === "reports") navigate("/admin-dashboard/reports");
    if (key === "employment") navigate("/admin-dashboard/employment");
  };

  return (
    <DashboardShell
      role="A"
      nav={navItems}
      activeNav={activeNav}
      setActiveNav={handleNav}
      onLogout={onLogout}
    >
      <h1>Admin Dashboard</h1>

      <Outlet />
    </DashboardShell>
  );
}