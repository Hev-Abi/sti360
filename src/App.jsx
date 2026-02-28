import { Routes, Route } from "react-router-dom";

/* ========= PAGES ========= */
import Landing from "./pages/landing.jsx";
import Login from "./pages/login.jsx";
import SchoolManagement from "./pages/school-management.jsx";

/* ========= DASHBOARDS ========= */
import AcademicDashboard from "./dashboards/AcademicDashboard";
import StudentDashboard from "./dashboards/StudentDashboard";
import GuidanceDashboard from "./dashboards/GuidanceDashboard";
import MarketingDashboard from "./dashboards/MarketingDashboard";
import FrontDeskDashboard from "./dashboards/FrontDeskDashboard";

/* ========= ADMIN FEATURES ========= */
import AdminReports from "./features/admin/AdminReports";
import EmploymentAnalytics from "./features/admin/EmploymentAnalytics";
import GraduateData from "./features/admin/GraduateData";
import UserManager from "./features/admin/UserManager";

/* ========= STUDENT FEATURES ========= */
import { LifecyclePage } from "./features/studentLifecycle";

export default function App() {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/school-management" element={<SchoolManagement />} />

      {/* ================= ADMIN DASHBOARD ================= */}
      <Route path="/admin-dashboard" element={<AcademicDashboard />}>
        <Route index element={<AdminReports />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="employment" element={<EmploymentAnalytics />} />
        <Route path="graduate-data" element={<GraduateData />} />
        <Route path="users" element={<UserManager />} />
      </Route>

      {/* ================= STUDENT DASHBOARD ================= */}
      <Route path="/student-dashboard" element={<StudentDashboard />}>
       <Route path="lifecycle" element={<LifecyclePage />} />
      </Route>

      {/* ================= OTHER ROLE DASHBOARDS ================= */}
      <Route path="/guidance-dashboard" element={<GuidanceDashboard />} />
      <Route path="/marketing-dashboard" element={<MarketingDashboard />} />
      <Route path="/frontdesk-dashboard" element={<FrontDeskDashboard />} />
    </Routes>
  );
}