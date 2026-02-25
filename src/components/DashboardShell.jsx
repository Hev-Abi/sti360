import { useState } from "react";
import { ROLES } from "../constants/roles";

export default function DashboardShell({ role, children, nav, activeNav, setActiveNav, onLogout }) {
  const r = ROLES[role];

  if (!r) {
    return <div>Invalid role: {role}</div>;
  }
  
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f8fa" }}>
      <div style={{ width: 220, background: "#fff", padding: 20 }}>
        <h2>EduTrack</h2>
        <p>{r.label}</p>

        {nav.map(item => (
          <button key={item.key} onClick={() => setActiveNav(item.key)}>
            {item.label}
          </button>
        ))}

        <button onClick={onLogout}>Logout</button>
      </div>

      <div style={{ flex: 1, padding: 30 }}>
        {children}
      </div>
    </div>
  );
}