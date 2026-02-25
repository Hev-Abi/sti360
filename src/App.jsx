import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import SchoolManagement from "./pages/school-management";

import AcademicDashboard from "./dashboards/AcademicDashboard";
import AdminReports from "./dashboards/admin/AdminReports";
import EmploymentAnalytics from "./dashboards/admin/EmploymentAnalytics";
import GraduateData from "./dashboards/admin/GraduateData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/school-management" element={<SchoolManagement />} />

      <Route path="/admin-dashboard" element={<AcademicDashboard />}>
        <Route path="reports" element={<AdminReports />} />
        <Route path="employment" element={<EmploymentAnalytics />} />
        <Route path="graduate-data" element={<GraduateData />} />
      </Route>
    </Routes>
  );
}

export default App;