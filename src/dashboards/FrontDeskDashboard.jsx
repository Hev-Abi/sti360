import { useState } from "react";
import DashboardShell from "../components/DashboardShell";

export default function FrontDeskDashboard({ onLogout }) {
  const [nav, setNav] = useState("home");

  return (
    <DashboardShell
      role="F"
      nav={[{ key: "home", label: "Front Desk" }]}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={onLogout}
    >
      <h1>Front Desk Dashboard</h1>
    </DashboardShell>
  );
}