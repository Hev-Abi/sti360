import { useState } from "react";
import DashboardShell from "../components/DashboardShell";

export default function AcademicDashboard({ onLogout }) {
  const [nav, setNav] = useState("admin");

  const navItems = [
    { key: "admin", label: "Admin Dashboard" },
  ];

  return (
    <DashboardShell
      role="A"
      nav={navItems}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={onLogout}
    >
      <h1>Academic Dashboard</h1>
    </DashboardShell>
  );
}