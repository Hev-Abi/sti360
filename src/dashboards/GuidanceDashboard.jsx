import { useState } from "react";
import DashboardShell from "../components/DashboardShell";

export default function GuidanceDashboard({ onLogout }) {
  const [nav, setNav] = useState("home");

  return (
    <DashboardShell
      role="G"
      nav={[{ key: "home", label: "Guidance" }]}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={onLogout}
    >
      <h1>Guidance Dashboard</h1>
    </DashboardShell>
  );
}