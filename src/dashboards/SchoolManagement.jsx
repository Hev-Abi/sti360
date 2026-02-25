import AcademicDashboard from "./AcademicDashboard";
import SAODashboard from "./SAODashboard";
import StudentDashboard from "./StudentDashboard";
import FrontDeskDashboard from "./FrontDeskDashboard";
import GuidanceDashboard from "./GuidanceDashboard";

export default function SchoolManagement({ role }) {
  const logout = () => window.location.href = "/";

  if (role === "A") return <AcademicDashboard onLogout={logout} />;
  if (role === "SAO") return <SAODashboard onLogout={logout} />;
  if (role === "S") return <StudentDashboard onLogout={logout} />;
  if (role === "F") return <FrontDeskDashboard onLogout={logout} />;
  if (role === "G") return <GuidanceDashboard onLogout={logout} />;

  return <h1>No Role Assigned</h1>;
}