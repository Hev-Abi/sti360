import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";
import { logoutUser } from "../lib/auth";

import {
  LifecyclePage,
  ChecklistPage,
  GradesPage,
  PersonalPage,
  CurriculumPage,
  ScholarshipPage,
  EstimatedGradePage,
} from "../features/studentLifecycle";

export default function StudentDashboard() {
  const [nav, setNav] = useState("home");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const navItems = [
    { key: "home", label: "Dashboard" },
    { key: "lifecycle", label: "Student Lifecycle" },
    { key: "checklist", label: "Virtual Checklist" },
    { key: "grades", label: "Upload Grades" },
    { key: "personal", label: "Personal Data" },
    { key: "curriculum", label: "View Curriculum" },
    { key: "scholarship", label: "Scholarship Eligibility" },
    { key: "estimated", label: "Estimated Grade" },
  ];

  const renderContent = () => {
    switch (nav) {
      case "lifecycle":
        return <LifecyclePage />;

      case "checklist":
        return <ChecklistPage />;

      case "grades":
        return <GradesPage />;

      case "personal":
        return <PersonalPage />;

      case "curriculum":
        return <CurriculumPage />;

      case "scholarship":
        return <ScholarshipPage />;

      case "estimated":
        return <EstimatedGradePage />;

      default:
        return <h1 className="text-2xl font-bold">Welcome Student 👋</h1>;
    }
  };

  return (
    <DashboardShell
      role="S"
      nav={navItems}
      activeNav={nav}
      setActiveNav={setNav}
      onLogout={handleLogout}
    >
      {renderContent()}
    </DashboardShell>
  );
}