import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";
import { logoutUser } from "../lib/auth";

import GraduateList from "../features/guidance/GraduateList";
import EmployedAnalytics from "../features/analytics/components/EmployedAnalytics";
import UnemployedAnalytics from "../features/analytics/components/UnemployedAnalytics";
import ReportGenerator from "../features/guidance/ReportGenerator";

export default function GuidanceDashboard() {
  const navigate = useNavigate();
  const [nav, setNav] = useState("analytics");

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login"); 
  };

  return (
    <DashboardShell
      role="G"
      nav={[
        { key: "analytics", label: "Analytics" },
        { key: "graduates", label: "Graduates" },
        { key: "reports", label: "Reports" }
      ]}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={handleLogout}
    >
      {nav === "analytics" && (
        <>
          <EmployedAnalytics />
          <UnemployedAnalytics />
        </>
      )}

      {nav === "graduates" && <GraduateList />}
      {nav === "reports" && <ReportGenerator />}
    </DashboardShell>
  );
}