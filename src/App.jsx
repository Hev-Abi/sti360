import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/login";
import SchoolManagement from "./pages/school-management";

/* ADMIN DASHBOARD */
import AcademicDashboard from "./dashboards/AcademicDashboard";
import AdminReports from "./dashboards/admin/AdminReports";
import EmploymentAnalytics from "./dashboards/admin/EmploymentAnalytics";
import GraduateData from "./dashboards/admin/GraduateData";

/* OTHER ROLE DASHBOARDS */
import StudentDashboard from "./dashboards/StudentDashboard";
import GuidanceDashboard from "./dashboards/GuidanceDashboard";
import MarketingDashboard from "./dashboards/MarketingDashboard";
import FrontDeskDashboard from "./dashboards/FrontDeskDashboard";

function App() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/school-management" element={<SchoolManagement />} />

      {/* ADMIN */}
      <Route path="/admin-dashboard" element={<AcademicDashboard />}>
        <Route path="reports" element={<AdminReports />} />
        <Route path="employment" element={<EmploymentAnalytics />} />
        <Route path="graduate-data" element={<GraduateData />} />
      </Route>

      {/* STUDENT */}
      <Route path="/student-dashboard" element={<StudentDashboard />} />

      {/* GUIDANCE */}
      <Route path="/guidance-dashboard" element={<GuidanceDashboard />} />

      {/* MARKETING (SAO) */}
      <Route path="/marketing-dashboard" element={<MarketingDashboard />} />

      {/* FRONTDESK */}
      <Route path="/frontdesk-dashboard" element={<FrontDeskDashboard />} />
    </Routes>
  );
}

export default App;