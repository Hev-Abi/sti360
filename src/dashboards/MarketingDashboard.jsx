import { useState } from "react";
import DashboardShell from "../components/DashboardShell";

import { marketingNav } from "../features/marketing/config/marketingNav";
import { marketingRoutes } from "../features/marketing/config/marketingRoutes";

export default function MarketingDashboard({ onLogout }) {
  const [activeNav, setActiveNav] = useState("marketing");

  const ActiveView = marketingRoutes[activeNav];

  return (
    <DashboardShell
      role="SAO"
      onLogout={onLogout}
      nav={marketingNav}
      activeNav={activeNav}
      setActiveNav={setActiveNav}
    >
      <ActiveView />
    </DashboardShell>
  );
}