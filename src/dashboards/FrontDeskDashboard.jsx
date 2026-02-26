import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";
import { logoutUser } from "../lib/auth";

import LeadsPage from "../features/frontdesk/pages/LeadsPage";
import GradesPage from "../features/frontdesk/pages/GradesPage";
import DocumentsPage from "../features/frontdesk/pages/DocumentsPage";
import StudentProfilePage from "../features/frontdesk/pages/StudentProfilePage";
import AnalysisPage from "../features/frontdesk/pages/AnalysisPage";

export default function FrontDeskDashboard() {
  const navigate = useNavigate();
  const [nav, setNav] = useState("leads");

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <DashboardShell
      role="F"
      nav={[
        { key: "leads", label: "Leads" },
        { key: "grades", label: "Grades" },
        { key: "documents", label: "Documents" },
        { key: "profile", label: "Student Profile" },
        { key: "analysis", label: "Performance Analysis" },
      ]}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={handleLogout}
    >
      {nav === "leads" && <LeadsPage />}
      {nav === "grades" && <GradesPage />}
      {nav === "documents" && <DocumentsPage />}
      {nav === "profile" && <StudentProfilePage />}
      {nav === "analysis" && <AnalysisPage />}
    </DashboardShell>
  );
}