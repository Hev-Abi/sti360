import { useState } from "react";
import DashboardShell from "../components/DashboardShell";

export default function MarketingDashboard({ onLogout }) {
  const [nav, setNav] = useState("marketing");

  return (
    <DashboardShell
      role="SAO"
      nav={[{ key: "marketing", label: "Marketing Dashboard" }]}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={onLogout}
    >
      <h1>Marketing Dashboard</h1>
    </DashboardShell>
  );
}