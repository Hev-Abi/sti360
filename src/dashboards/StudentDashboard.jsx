import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardShell from "../components/DashboardShell";
import { logoutUser } from "../lib/auth";
import { StudentLifecyclePage } from "../features/studentLifecycle";

export default function StudentDashboard() {
  const [nav, setNav] = useState("home");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const navItems = [
    { key: "home", label: "Student Dashboard" },
    { key: "lifecycle", label: "Student Lifecycle" },
  ];

  const renderContent = () => {
    switch (nav) {
      case "lifecycle":
        return <StudentLifecyclePage />;

      case "home":
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