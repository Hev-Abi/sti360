import { useState } from "react";
import DashboardShell from "../components/DashboardShell";

export default function StudentDashboard({ onLogout }) {
  const [nav, setNav] = useState("home");

  return (
    <DashboardShell
      role="S"
      nav={[{ key: "home", label: "Student Dashboard" }]}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={onLogout}
    >
      <h1>Student Dashboard</h1>
    </DashboardShell>
  );
}