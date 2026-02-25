import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SchoolManagement from "./pages/school-management";

function Admin() {
  return <h1>Admin Dashboard</h1>;
}

function ProgramHead() {
  return <h1>Program Head Dashboard</h1>;
}

function Guidance() {
  return <h1>Guidance Dashboard</h1>;
}

function FrontDesk() {
  return <h1>Front Desk Dashboard</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/school-management" element={<SchoolManagement />} />
      <Route path="/admin-dashboard" element={<Admin />} />
      <Route path="/program-dashboard" element={<ProgramHead />} />
      <Route path="/guidance-dashboard" element={<Guidance />} />
      <Route path="/frontdesk-dashboard" element={<FrontDesk />} />
    </Routes>
  );
}

export default App;