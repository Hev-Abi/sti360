import { useState } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────
const ROLES = {
  A: { label: "Academic / Program Head", color: "#4A6FA5", bg: "#EEF2F9", accent: "#2C4A7C" },
  SAO: { label: "Student Affairs Officer", color: "#6B5B8B", bg: "#F3F0F8", accent: "#4A3569" },
  G: { label: "Guidance Counselor", color: "#2A9D8F", bg: "#E8F6F5", accent: "#1A6B60" },
  S: { label: "Student", color: "#457B9D", bg: "#EAF2F8", accent: "#1D5476" },
  F: { label: "Front Desk", color: "#C17B2A", bg: "#FBF3E8", accent: "#8B5217" },
};

const style = {
  fontFamily: "'DM Mono', 'Courier New', monospace",
};


// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function Badge({ text, color }) {
  return (
    <span style={{
      background: color + "22", color, border: `1px solid ${color}44`,
      borderRadius: 4, padding: "2px 10px", fontSize: 11, fontWeight: 700,
      letterSpacing: 1, textTransform: "uppercase",
    }}>{text}</span>
  );
}

function Card({ title, children, accent, style: s }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 10, padding: 24,
      border: `1px solid #e8e8e8`, boxShadow: `0 2px 8px #0000000a`,
      borderLeft: accent ? `4px solid ${accent}` : undefined,
      ...s,
    }}>
      {title && <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: "#888", marginBottom: 14 }}>{title}</div>}
      {children}
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 10, padding: "20px 24px",
      border: `1px solid #e8e8e8`, textAlign: "center",
    }}>
      <div style={{ fontSize: 32, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 12, color: "#888", marginTop: 4, letterSpacing: 0.5 }}>{label}</div>
    </div>
  );
}

function NavItem({ label, active, onClick, color }) {
  return (
    <button onClick={onClick} style={{
      display: "block", width: "100%", textAlign: "left",
      padding: "10px 16px", borderRadius: 8, marginBottom: 4,
      background: active ? color + "18" : "transparent",
      border: active ? `1px solid ${color}33` : "1px solid transparent",
      color: active ? color : "#555", fontSize: 13, fontWeight: active ? 700 : 400,
      cursor: "pointer", transition: "all 0.15s",
    }}>{label}</button>
  );
}

function Table({ headers, rows, color }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr style={{ background: color + "11" }}>
          {headers.map(h => <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color, fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", borderBottom: `2px solid ${color}33` }}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
            {row.map((cell, j) => <td key={j} style={{ padding: "10px 12px", color: "#444" }}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ActionButton({ label, onClick, color, outline }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: "9px 18px", borderRadius: 7, fontSize: 13, fontWeight: 600,
        cursor: "pointer", transition: "all 0.15s",
        background: outline ? "transparent" : hov ? color + "dd" : color,
        color: outline ? color : "#fff",
        border: `2px solid ${color}`,
        boxShadow: !outline && hov ? `0 4px 12px ${color}55` : "none",
      }}>{label}</button>
  );
}


// ─── DASHBOARD SHELL ──────────────────────────────────────────────────────────
function DashboardShell({ role, onLogout, children, nav, activeNav, setActiveNav }) {
  const r = ROLES[role];
  const [logoutModal, setLogoutModal] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f8fa", fontFamily: style.fontFamily }}>
      {/* Sidebar */}
      <div style={{
        width: 220, background: "#fff", borderRight: "1px solid #eee",
        display: "flex", flexDirection: "column", padding: "24px 16px",
        position: "fixed", top: 0, left: 0, height: "100vh", overflowY: "auto",
      }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#1a1a2e", letterSpacing: -0.5 }}>EduTrack</div>
          <div style={{ marginTop: 8 }}><Badge text={role} color={r.color} /></div>
          <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{r.label}</div>
        </div>

        <div style={{ flex: 1 }}>
          {nav.map(item => (
            <NavItem key={item.key} label={item.label} active={activeNav === item.key}
              onClick={() => setActiveNav(item.key)} color={r.color} />
          ))}
        </div>

        <button onClick={() => setLogoutModal(true)} style={{
          display: "block", width: "100%", padding: "10px 16px", borderRadius: 8,
          background: "transparent", border: "1px solid #ddd", color: "#888",
          fontSize: 13, cursor: "pointer", textAlign: "left", fontFamily: style.fontFamily,
        }}>⎋ Logout</button>
      </div>

      {/* Main */}
      <div style={{ marginLeft: 220, flex: 1, padding: 32 }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid #eee",
        }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", letterSpacing: -0.5 }}>
              {nav.find(n => n.key === activeNav)?.label}
            </div>
            <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>
              {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: "50%", display: "flex", alignItems: "center",
            justifyContent: "center", background: r.color, color: "#fff", fontWeight: 800, fontSize: 14,
          }}>{role[0]}</div>
        </div>
        {children}
      </div>

      {/* Logout Modal */}
      {logoutModal && (
        <div style={{
          position: "fixed", inset: 0, background: "#0000007a", display: "flex",
          alignItems: "center", justifyContent: "center", zIndex: 1000,
        }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: 36, width: 320, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⎋</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Logout?</div>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>Are you sure you want to end your session?</div>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <ActionButton label="Cancel" onClick={() => setLogoutModal(false)} color="#888" outline />
              <ActionButton label="Yes, Logout" onClick={onLogout} color="#e63946" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── STUDENT AFFAIRS DASHBOARD ────────────────────────────────────────────────
function SAODashboard({ onLogout }) {
  const [nav, setNav] = useState("marketing");
  const navItems = [
    { key: "marketing", label: "Marketing Dashboard" },
    { key: "leads", label: "Leads Tracking" },
    { key: "feeder", label: "Feeder School Analytics" },
    { key: "programs", label: "Track Programs Offered" },
    { key: "analytics", label: "Marketing Analytics" },
    { key: "competition", label: "Competition Analysis" },
    { key: "reports", label: "Generate Marketing Reports" },
  ];

  const views = {
    marketing: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          <StatCard label="Total Leads" value="1,284" color={ROLES.SAO.color} />
          <StatCard label="Feeder Schools" value="47" color={ROLES.SAO.color} />
          <StatCard label="Programs" value="32" color={ROLES.SAO.color} />
          <StatCard label="Enrolled" value="856" color={ROLES.SAO.color} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card title="Recent Campaigns" accent={ROLES.SAO.color}>
            <Table headers={["Campaign", "Reach", "Leads", "Status"]} rows={[
              ["Open House 2025", "4,200", "312", <Badge text="Active" color="#2A9D8F" />],
              ["Digital Drive Q1", "8,100", "540", <Badge text="Active" color="#2A9D8F" />],
              ["School Fair Oct", "2,900", "198", <Badge text="Ended" color="#888" />],
            ]} color={ROLES.SAO.color} />
          </Card>
          <Card title="Lead Sources" accent={ROLES.SAO.color}>
            <Table headers={["Source", "Count", "%"]} rows={[
              ["Feeder Schools", "521", "40.6%"],
              ["Social Media", "312", "24.3%"],
              ["Walk-ins", "198", "15.4%"],
              ["Referrals", "253", "19.7%"],
            ]} color={ROLES.SAO.color} />
          </Card>
        </div>
      </div>
    ),
    leads: (
      <Card title="Leads Tracking" accent={ROLES.SAO.color}>
        <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
          <ActionButton label="+ Add Lead" onClick={() => {}} color={ROLES.SAO.color} />
          <ActionButton label="Export" onClick={() => {}} color={ROLES.SAO.color} outline />
        </div>
        <Table headers={["Name", "School", "Program", "Status", "Date"]} rows={[
          ["Maria Santos", "St. Theresa HS", "BSIT", <Badge text="Hot" color="#e63946" />, "Feb 20"],
          ["Juan dela Cruz", "San Miguel HS", "BSBA", <Badge text="Warm" color="#f4a261" />, "Feb 19"],
          ["Ana Reyes", "Holy Cross", "BSED", <Badge text="Cold" color="#888" />, "Feb 18"],
          ["Pedro Lim", "Ateneo", "BSCS", <Badge text="Hot" color="#e63946" />, "Feb 17"],
          ["Carla Torres", "De La Salle", "BSN", <Badge text="Warm" color="#f4a261" />, "Feb 15"],
        ]} color={ROLES.SAO.color} />
      </Card>
    ),
    feeder: (
      <div style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card title="Feeder School Analytics" accent={ROLES.SAO.color}>
            <Table headers={["School", "Enrollees", "Programs"]} rows={[
              ["St. Theresa HS", "89", "4"],
              ["Holy Cross HS", "67", "3"],
              ["San Miguel HS", "54", "5"],
            ]} color={ROLES.SAO.color} />
          </Card>
          <Card title="Non-Feeder School Analytics" accent={ROLES.SAO.color}>
            <Table headers={["School", "Enrollees", "Programs"]} rows={[
              ["Rizal HS", "23", "2"],
              ["Mabini HS", "18", "1"],
              ["Laurel HS", "31", "3"],
            ]} color={ROLES.SAO.color} />
          </Card>
        </div>
        <Card title="Track Enrollees from Feeder Schools" accent={ROLES.SAO.color}>
          <Table headers={["Student", "From", "Program", "Year", "Standing"]} rows={[
            ["Ma. Flores", "St. Theresa HS", "BSIT", "2nd Year", <Badge text="Good" color="#2A9D8F" />],
            ["R. Gomez", "Holy Cross", "BSBA", "1st Year", <Badge text="Good" color="#2A9D8F" />],
            ["L. Morales", "Holy Cross", "BSED", "3rd Year", <Badge text="At Risk" color="#e63946" />],
          ]} color={ROLES.SAO.color} />
        </Card>
      </div>
    ),
    programs: (
      <Card title="Programs Offered" accent={ROLES.SAO.color}>
        <div style={{ marginBottom: 16 }}>
          <ActionButton label="+ Add Program" onClick={() => {}} color={ROLES.SAO.color} />
        </div>
        <Table headers={["Program", "Department", "Duration", "Enrolled", "Status"]} rows={[
          ["BSIT", "Engineering", "4 years", "342", <Badge text="Active" color="#2A9D8F" />],
          ["BSBA", "Business", "4 years", "289", <Badge text="Active" color="#2A9D8F" />],
          ["BSED", "Education", "4 years", "198", <Badge text="Active" color="#2A9D8F" />],
          ["BSN", "Nursing", "4 years", "154", <Badge text="Active" color="#2A9D8F" />],
          ["BSCS", "Engineering", "4 years", "127", <Badge text="Active" color="#2A9D8F" />],
        ]} color={ROLES.SAO.color} />
      </Card>
    ),
    analytics: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card title="Competitor Analysis" accent={ROLES.SAO.color}>
          <Table headers={["School", "Programs", "Tuition", "Enrollees"]} rows={[
            ["XYZ University", "28", "₱45,000", "3,400"],
            ["ABC College", "19", "₱38,000", "2,100"],
            ["DEF Institute", "22", "₱52,000", "1,800"],
          ]} color={ROLES.SAO.color} />
        </Card>
        <Card title="Competitor Analytics" accent={ROLES.SAO.color}>
          <Table headers={["Metric", "Us", "Avg. Competitor"]} rows={[
            ["Retention Rate", "88%", "79%"],
            ["Grad Rate", "91%", "83%"],
            ["Employment Rate", "87%", "75%"],
            ["Student Satisfaction", "4.3/5", "3.8/5"],
          ]} color={ROLES.SAO.color} />
        </Card>
      </div>
    ),
    competition: (
      <Card title="Competition Analysis" accent={ROLES.SAO.color}>
        <Table headers={["Category", "Our School", "Top Competitor", "Gap"]} rows={[
          ["Enrollment Growth", "+12%", "+8%", "+4% ✓"],
          ["Program Variety", "32", "28", "+4 ✓"],
          ["Online Programs", "8", "14", "-6 ✗"],
          ["Tuition (avg)", "₱42,000", "₱45,000", "-₱3K ✓"],
          ["Faculty PhD", "64%", "71%", "-7% ✗"],
        ]} color={ROLES.SAO.color} />
      </Card>
    ),
    reports: (
      <Card title="Generate Marketing Reports" accent={ROLES.SAO.color}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
          {["Monthly Leads Report", "Feeder School Report", "Campaign Performance", "Competitor Summary", "Program Inquiry Report", "Enrollment Forecast"].map(r => (
            <div key={r} style={{
              padding: 16, borderRadius: 8, border: "1px solid #eee", cursor: "pointer",
              background: "#fafafa", fontSize: 13, fontWeight: 500,
            }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>📊</div>
              {r}
              <div style={{ marginTop: 10 }}>
                <ActionButton label="Generate" onClick={() => {}} color={ROLES.SAO.color} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    ),
  };

  return (
    <DashboardShell role="SAO" onLogout={onLogout} nav={navItems} activeNav={nav} setActiveNav={setNav}>
      {views[nav]}
    </DashboardShell>
  );
}

// ─── STUDENT DASHBOARD ────────────────────────────────────────────────────────
function StudentDashboard({ onLogout }) {
  const [nav, setNav] = useState("lifecycle");
  const navItems = [
    { key: "lifecycle", label: "Student Lifecycle" },
    { key: "checklist", label: "Virtual Checklist" },
    { key: "grades", label: "Upload Grades" },
    { key: "personal", label: "Personal Data" },
    { key: "curriculum", label: "View Curriculum" },
    { key: "scholarship", label: "Scholarship Eligibility" },
    { key: "estimated", label: "Estimated Grade" },
  ];

  const views = {
    lifecycle: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          <StatCard label="Units Earned" value="78" color={ROLES.S.color} />
          <StatCard label="GPA" value="1.75" color={ROLES.S.color} />
          <StatCard label="Subjects This Sem" value="6" color={ROLES.S.color} />
          <StatCard label="Year Level" value="3rd" color={ROLES.S.color} />
        </div>
        <Card title="Academic Timeline" accent={ROLES.S.color}>
          {["1st Year — Foundation Courses", "2nd Year — Core Subjects", "3rd Year (Current) — Major Courses", "4th Year — Specialization + Thesis"].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                background: i < 2 ? ROLES.S.color : i === 2 ? ROLES.S.color + "44" : "#eee",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i < 2 ? "#fff" : ROLES.S.color, fontSize: 12, fontWeight: 700,
              }}>{i < 2 ? "✓" : i + 1}</div>
              <div style={{ fontSize: 13, color: i === 2 ? ROLES.S.color : i > 2 ? "#aaa" : "#333", fontWeight: i === 2 ? 700 : 400 }}>{step}</div>
            </div>
          ))}
        </Card>
      </div>
    ),
    checklist: (
      <Card title="Virtual Student Checklist" accent={ROLES.S.color}>
        {[
          { task: "Submit Enrollment Form", done: true },
          { task: "Pay Tuition Fee", done: true },
          { task: "Upload Medical Certificate", done: true },
          { task: "Submit 2x2 Photo", done: false },
          { task: "Sign Student Handbook", done: false },
          { task: "Complete Online Orientation", done: false },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid #f5f5f5" }}>
            <div style={{
              width: 22, height: 22, borderRadius: 4, border: `2px solid ${item.done ? ROLES.S.color : "#ccc"}`,
              background: item.done ? ROLES.S.color : "transparent", display: "flex",
              alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, flexShrink: 0,
            }}>{item.done ? "✓" : ""}</div>
            <span style={{ fontSize: 13, color: item.done ? "#666" : "#333", textDecoration: item.done ? "line-through" : "none" }}>{item.task}</span>
          </div>
        ))}
      </Card>
    ),
    grades: (
      <Card title="Upload Grades" accent={ROLES.S.color}>
        <div style={{ marginBottom: 20, padding: 20, border: "2px dashed #ddd", borderRadius: 8, textAlign: "center", color: "#888" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📄</div>
          <div style={{ fontSize: 13 }}>Drag & drop your grade document here</div>
          <div style={{ fontSize: 11, color: "#bbb", marginTop: 4 }}>PDF, JPG, PNG up to 10MB</div>
          <div style={{ marginTop: 12 }}>
            <ActionButton label="Browse Files" onClick={() => {}} color={ROLES.S.color} />
          </div>
        </div>
        <Table headers={["Subject", "Units", "Grade", "Semester"]} rows={[
          ["IT 301 - Data Structures", "3", "1.50", "1st Sem 2024"],
          ["IT 302 - Algorithms", "3", "1.75", "1st Sem 2024"],
          ["IT 303 - Web Dev", "3", "1.25", "1st Sem 2024"],
        ]} color={ROLES.S.color} />
      </Card>
    ),
    personal: (
      <Card title="Personal Data & Information" accent={ROLES.S.color}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            ["Student ID", "2022-10456"],
            ["Full Name", "Juan Dela Cruz"],
            ["Program", "BSIT"],
            ["Year Level", "3rd Year"],
            ["Email", "juan.delacruz@student.edu"],
            ["Contact", "+63 912 345 6789"],
            ["Address", "Quezon City, Metro Manila"],
            ["Enrollment Status", "Enrolled"],
          ].map(([label, value]) => (
            <div key={label} style={{ padding: "12px 0", borderBottom: "1px solid #f5f5f5" }}>
              <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{value}</div>
            </div>
          ))}
        </div>
      </Card>
    ),
    curriculum: (
      <Card title="View Curriculum — BSIT" accent={ROLES.S.color}>
        {["1st Year", "2nd Year", "3rd Year (Current)", "4th Year"].map((year, yi) => (
          <div key={year} style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 12, color: ROLES.S.color, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{year}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {["Introduction to Computing", "Programming 1", "Math for IT", "Data Structures", "OOP", "Discrete Math"].slice(0, yi === 2 ? 6 : 3).map(subj => (
                <div key={subj} style={{ padding: "8px 12px", background: yi < 2 ? ROLES.S.color + "11" : "#f5f5f5", borderRadius: 6, fontSize: 12, color: yi < 2 ? ROLES.S.color : "#555" }}>
                  {subj}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Card>
    ),
    scholarship: (
      <Card title="Check Scholarship Eligibility" accent={ROLES.S.color}>
        <div style={{ display: "grid", gap: 12 }}>
          {[
            { name: "Academic Excellence Award", gpa: "≤ 1.50", eligible: false, reason: "GPA: 1.75 (below cutoff)" },
            { name: "Dean's List Scholarship", gpa: "≤ 1.75", eligible: true, reason: "You qualify!" },
            { name: "Leadership Grant", gpa: "≤ 2.00", eligible: true, reason: "You qualify!" },
          ].map(s => (
            <div key={s.name} style={{ padding: 16, borderRadius: 8, border: `1px solid ${s.eligible ? ROLES.S.color + "44" : "#eee"}`, background: s.eligible ? ROLES.S.color + "08" : "#fafafa" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>Required GPA: {s.gpa}</div>
                </div>
                <Badge text={s.eligible ? "Eligible" : "Ineligible"} color={s.eligible ? "#2A9D8F" : "#888"} />
              </div>
              <div style={{ fontSize: 12, color: s.eligible ? ROLES.S.color : "#aaa", marginTop: 8 }}>{s.reason}</div>
            </div>
          ))}
        </div>
      </Card>
    ),
    estimated: (
      <Card title="Calculate Estimated Grade" accent={ROLES.S.color}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <Table headers={["Component", "Weight", "Score"]} rows={[
              ["Quizzes", "20%", "85"],
              ["Midterm Exam", "30%", "88"],
              ["Final Exam", "30%", "--"],
              ["Activities", "20%", "90"],
            ]} color={ROLES.S.color} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ padding: 20, background: ROLES.S.bg, borderRadius: 10, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#888", letterSpacing: 0.5, textTransform: "uppercase" }}>Current Estimated Grade</div>
              <div style={{ fontSize: 42, fontWeight: 900, color: ROLES.S.color, marginTop: 8 }}>1.75</div>
              <div style={{ fontSize: 11, color: "#888" }}>Based on completed assessments</div>
            </div>
            <div style={{ padding: 16, background: "#fff3cd", borderRadius: 8, fontSize: 12, color: "#856404" }}>
              ⚠️ Final exam score needed to maintain 1.75: <strong>88+</strong>
            </div>
          </div>
        </div>
      </Card>
    ),
  };

  return (
    <DashboardShell role="S" onLogout={onLogout} nav={navItems} activeNav={nav} setActiveNav={setNav}>
      {views[nav]}
    </DashboardShell>
  );
}

// ─── FRONT DESK DASHBOARD ────────────────────────────────────────────────────
function FrontDeskDashboard({ onLogout }) {
  const [nav, setNav] = useState("enrollment");
  const navItems = [
    { key: "enrollment", label: "Enrollment Dashboard" },
    { key: "scholarships", label: "Track Scholarships" },
    { key: "regular", label: "Regular Scholarships" },
    { key: "alumni", label: "Alumni Scholarships" },
    { key: "grades", label: "Assess Student Grades" },
    { key: "performance", label: "Predict Performance" },
    { key: "documentation", label: "Upload Documentation" },
    { key: "origin", label: "Track School Origin" },
    { key: "process", label: "Complete Enrollment" },
  ];

  const views = {
    enrollment: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          <StatCard label="Total Enrolled" value="856" color={ROLES.F.color} />
          <StatCard label="Pending" value="42" color={ROLES.F.color} />
          <StatCard label="Scholars" value="134" color={ROLES.F.color} />
          <StatCard label="New Students" value="289" color={ROLES.F.color} />
        </div>
        <Card title="Recent Enrollees" accent={ROLES.F.color}>
          <Table headers={["Student", "Program", "Type", "School Origin", "Status"]} rows={[
            ["Maria S.", "BSIT", "New", "St. Theresa", <Badge text="Complete" color="#2A9D8F" />],
            ["Juan D.", "BSBA", "Transferee", "XYZ College", <Badge text="Pending" color="#f4a261" />],
            ["Ana R.", "BSED", "New", "Holy Cross", <Badge text="Complete" color="#2A9D8F" />],
          ]} color={ROLES.F.color} />
        </Card>
      </div>
    ),
    scholarships: (
      <Card title="Track Scholarships" accent={ROLES.F.color}>
        <Table headers={["ID", "Student", "Type", "Amount", "Status"]} rows={[
          ["SCH-001", "Maria Santos", "Dean's List", "₱15,000", <Badge text="Active" color="#2A9D8F" />],
          ["SCH-002", "Pedro Reyes", "Alumni", "₱20,000", <Badge text="Active" color="#2A9D8F" />],
          ["SCH-003", "Carla Cruz", "Regular", "₱10,000", <Badge text="Pending" color="#f4a261" />],
        ]} color={ROLES.F.color} />
      </Card>
    ),
    regular: (
      <Card title="Regular Scholarships" accent={ROLES.F.color}>
        <Table headers={["Name", "Slots", "Filled", "GPA Req.", "Available"]} rows={[
          ["Academic Excellence", "20", "18", "1.50", "2"],
          ["Departmental Grant", "15", "12", "1.75", "3"],
          ["Financial Assistance", "30", "29", "2.00", "1"],
        ]} color={ROLES.F.color} />
      </Card>
    ),
    alumni: (
      <Card title="Alumni Scholarships" accent={ROLES.F.color}>
        <Table headers={["Donor", "Program", "Amount", "Slots", "Status"]} rows={[
          ["Class of 2010", "BSIT", "₱25,000", "5", <Badge text="Open" color="#2A9D8F" />],
          ["Batch 2005", "BSBA", "₱20,000", "3", <Badge text="Open" color="#2A9D8F" />],
          ["Alumni Assoc.", "Any", "₱15,000", "10", <Badge text="Closed" color="#888" />],
        ]} color={ROLES.F.color} />
      </Card>
    ),
    grades: (
      <Card title="Assess Student Grades" accent={ROLES.F.color}>
        <Table headers={["Student", "Program", "GPA", "Units", "Standing"]} rows={[
          ["Juan D.", "BSIT", "1.50", "42", <Badge text="Excellent" color="#2A9D8F" />],
          ["Maria S.", "BSBA", "2.25", "36", <Badge text="Good" color={ROLES.F.color} />],
          ["Ana R.", "BSED", "2.75", "30", <Badge text="Passing" color="#f4a261" />],
          ["Pedro L.", "BSCS", "3.25", "27", <Badge text="At Risk" color="#e63946" />],
        ]} color={ROLES.F.color} />
      </Card>
    ),
    performance: (
      <Card title="Predict Subject Performance" accent={ROLES.F.color}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12, color: ROLES.F.color, letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>Strengths</div>
            {["Mathematics", "Programming Logic", "Technical Writing"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: "1px solid #f5f5f5" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2A9D8F", flexShrink: 0 }} />
                <span style={{ fontSize: 13 }}>{s}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12, color: "#e63946", letterSpacing: 1, marginBottom: 10, textTransform: "uppercase" }}>Weaknesses</div>
            {["English Communication", "Research Methods"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", borderBottom: "1px solid #f5f5f5" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#e63946", flexShrink: 0 }} />
                <span style={{ fontSize: 13 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    ),
    documentation: (
      <Card title="Upload Documentation" accent={ROLES.F.color}>
        <div style={{ display: "grid", gap: 12 }}>
          {["Enrollment Form", "Birth Certificate", "Report Card / TOR", "ID Photo", "Medical Certificate"].map(doc => (
            <div key={doc} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#fafafa", borderRadius: 8, border: "1px solid #eee" }}>
              <span style={{ fontSize: 13 }}>📎 {doc}</span>
              <ActionButton label="Upload" onClick={() => {}} color={ROLES.F.color} />
            </div>
          ))}
        </div>
      </Card>
    ),
    origin: (
      <Card title="Track School Origin" accent={ROLES.F.color}>
        <Table headers={["School", "Type", "Students", "Programs"]} rows={[
          ["St. Theresa HS", "Feeder", "89", "BSIT, BSBA"],
          ["Holy Cross HS", "Feeder", "67", "BSED, BSN"],
          ["Rizal HS", "Non-Feeder", "23", "BSBA"],
          ["XYZ College", "Transferee", "31", "Various"],
        ]} color={ROLES.F.color} />
      </Card>
    ),
    process: (
      <Card title="Complete Enrollment Process" accent={ROLES.F.color}>
        <div style={{ display: "grid", gap: 10 }}>
          {[
            { step: "1. Document Submission", done: true },
            { step: "2. Grade Assessment", done: true },
            { step: "3. Scholarship Check", done: true },
            { step: "4. Program Assignment", done: false },
            { step: "5. Payment Processing", done: false },
            { step: "6. ID Issuance", done: false },
          ].map(item => (
            <div key={item.step} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: item.done ? ROLES.F.bg : "#fafafa", borderRadius: 8, border: `1px solid ${item.done ? ROLES.F.color + "33" : "#eee"}` }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: item.done ? ROLES.F.color : "#ddd", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{item.done ? "✓" : ""}</div>
              <span style={{ fontSize: 13, fontWeight: item.done ? 600 : 400, color: item.done ? ROLES.F.color : "#666" }}>{item.step}</span>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            <ActionButton label="Complete Enrollment" onClick={() => {}} color={ROLES.F.color} />
          </div>
        </div>
      </Card>
    ),
  };

  return (
    <DashboardShell role="F" onLogout={onLogout} nav={navItems} activeNav={nav} setActiveNav={setNav}>
      {views[nav]}
    </DashboardShell>
  );
}

// ─── GUIDANCE COUNSELOR DASHBOARD ────────────────────────────────────────────
function GuidanceDashboard({ onLogout }) {
  const [nav, setNav] = useState("employment");
  const navItems = [
    { key: "employment", label: "Employment Analytics" },
    { key: "graduates", label: "View Graduate Data" },
    { key: "employed", label: "Employed Analytics" },
    { key: "unemployed", label: "Unemployed Analytics" },
    { key: "reports", label: "Generate Reports" },
  ];

  const views = {
    employment: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          <StatCard label="Total Graduates" value="2,341" color={ROLES.G.color} />
          <StatCard label="Employed" value="1,987" color={ROLES.G.color} />
          <StatCard label="Unemployed" value="354" color={ROLES.G.color} />
          <StatCard label="Employment Rate" value="84.9%" color={ROLES.G.color} />
        </div>
        <Card title="Employment by Program" accent={ROLES.G.color}>
          <Table headers={["Program", "Graduates", "Employed", "Rate"]} rows={[
            ["BSIT", "456", "412", "90.4%"],
            ["BSCS", "312", "289", "92.6%"],
            ["BSBA", "523", "441", "84.3%"],
            ["BSED", "298", "231", "77.5%"],
            ["BSN", "198", "187", "94.4%"],
          ]} color={ROLES.G.color} />
        </Card>
      </div>
    ),
    graduates: (
      <Card title="Graduate Data" accent={ROLES.G.color}>
        <Table headers={["Name", "Program", "Batch", "Status", "Company"]} rows={[
          ["J. Santos", "BSIT", "2023", <Badge text="Employed" color="#2A9D8F" />, "TechCorp PH"],
          ["M. Reyes", "BSBA", "2022", <Badge text="Employed" color="#2A9D8F" />, "ABC Bank"],
          ["A. Cruz", "BSED", "2023", <Badge text="Unemployed" color="#e63946" />, "—"],
          ["P. Lim", "BSCS", "2021", <Badge text="Employed" color="#2A9D8F" />, "StartupXYZ"],
        ]} color={ROLES.G.color} />
      </Card>
    ),
    employed: (
      <Card title="Employed Analytics" accent={ROLES.G.color}>
        <Table headers={["Industry", "Count", "%", "Avg. Salary"]} rows={[
          ["IT / Tech", "612", "30.8%", "₱35,000"],
          ["Banking / Finance", "489", "24.6%", "₱30,000"],
          ["Education", "312", "15.7%", "₱22,000"],
          ["Healthcare", "187", "9.4%", "₱28,000"],
          ["Government", "387", "19.5%", "₱25,000"],
        ]} color={ROLES.G.color} />
      </Card>
    ),
    unemployed: (
      <Card title="Unemployed Analytics" accent={ROLES.G.color}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card title="Reasons" accent={ROLES.G.color} style={{}}>
            <Table headers={["Reason", "Count"]} rows={[
              ["Further Studies", "98"],
              ["Still Looking", "134"],
              ["Personal Reasons", "67"],
              ["Awaiting Board Exam", "55"],
            ]} color={ROLES.G.color} />
          </Card>
          <Card title="Program Breakdown" accent={ROLES.G.color} style={{}}>
            <Table headers={["Program", "Unemployed"]} rows={[
              ["BSED", "67"],
              ["BSBA", "82"],
              ["BSIT", "44"],
              ["BSN", "11"],
            ]} color={ROLES.G.color} />
          </Card>
        </div>
      </Card>
    ),
    reports: (
      <Card title="Generate Employment Reports" accent={ROLES.G.color}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {["Annual Employment Report", "Graduate Tracer Study", "Industry Placement Report", "Program Employment Rate", "Unemployed Follow-up List", "Alumni Directory"].map(r => (
            <div key={r} style={{ padding: 16, borderRadius: 8, border: "1px solid #eee", background: "#fafafa" }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>📈</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 12 }}>{r}</div>
              <ActionButton label="Generate" onClick={() => {}} color={ROLES.G.color} />
            </div>
          ))}
        </div>
      </Card>
    ),
  };

  return (
    <DashboardShell role="G" onLogout={onLogout} nav={navItems} activeNav={nav} setActiveNav={setNav}>
      {views[nav]}
    </DashboardShell>
  );
}

// ─── ACADEMIC/PROGRAM HEAD DASHBOARD ─────────────────────────────────────────
function AcademicDashboard({ onLogout }) {
  const [nav, setNav] = useState("admin");
  const navItems = [
    { key: "admin", label: "Admin Dashboard" },
    { key: "reports", label: "View All Reports" },
    { key: "employment_analytics", label: "Employment Analytics" },
    { key: "graduates", label: "View Graduate Data" },
  ];

  const views = {
    admin: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          <StatCard label="Total Students" value="3,421" color={ROLES.A.color} />
          <StatCard label="Programs" value="32" color={ROLES.A.color} />
          <StatCard label="Faculty" value="189" color={ROLES.A.color} />
          <StatCard label="Graduates (2024)" value="856" color={ROLES.A.color} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
          <Card title="Quick Access" accent={ROLES.A.color}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {["Marketing Reports", "Enrollment Reports", "Student Lifecycle Reports", "Employment Reports"].map(r => (
                <div key={r} onClick={() => setNav("reports")} style={{ padding: "14px 16px", borderRadius: 8, background: ROLES.A.bg, border: `1px solid ${ROLES.A.color}22`, cursor: "pointer", fontSize: 13, fontWeight: 500, color: ROLES.A.color }}>
                  📊 {r}
                </div>
              ))}
            </div>
          </Card>
          <Card title="System Summary" accent={ROLES.A.color}>
            {[["Enrollment Rate", "89%"], ["Employment Rate", "84.9%"], ["Retention Rate", "88%"], ["Scholarship Awards", "134"]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f5f5f5", fontSize: 13 }}>
                <span style={{ color: "#666" }}>{k}</span>
                <span style={{ fontWeight: 700, color: ROLES.A.color }}>{v}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    ),
    reports: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {[
            { title: "Marketing Reports", icon: "📣", desc: "Leads, campaigns, feeder schools" },
            { title: "Enrollment Reports", icon: "📋", desc: "Enrollment data, scholarships" },
            { title: "Student Lifecycle Reports", icon: "🎓", desc: "Academic standing, grades" },
            { title: "Employment Reports", icon: "💼", desc: "Graduate employment analytics" },
          ].map(r => (
            <Card key={r.title} title={r.title} accent={ROLES.A.color}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{r.icon}</div>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>{r.desc}</div>
              <ActionButton label="View Report" onClick={() => {}} color={ROLES.A.color} />
            </Card>
          ))}
        </div>
      </div>
    ),
    employment_analytics: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
          <StatCard label="Employment Rate" value="84.9%" color={ROLES.A.color} />
          <StatCard label="Employed Grads" value="1,987" color={ROLES.A.color} />
          <StatCard label="Unemployed" value="354" color={ROLES.A.color} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card title="Employed Analytics" accent={ROLES.A.color}>
            <Table headers={["Program", "Rate"]} rows={[
              ["BSN", "94.4%"], ["BSCS", "92.6%"], ["BSIT", "90.4%"], ["BSBA", "84.3%"], ["BSED", "77.5%"],
            ]} color={ROLES.A.color} />
          </Card>
          <Card title="Unemployed Analytics" accent={ROLES.A.color}>
            <Table headers={["Program", "Count"]} rows={[
              ["BSBA", "82"], ["BSED", "67"], ["BSIT", "44"], ["BSCS", "23"], ["BSN", "11"],
            ]} color={ROLES.A.color} />
          </Card>
        </div>
        <Card title="Generate Employment Reports" accent={ROLES.A.color} style={{ marginTop: 16 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <ActionButton label="Annual Report" onClick={() => {}} color={ROLES.A.color} />
            <ActionButton label="By Program" onClick={() => {}} color={ROLES.A.color} outline />
            <ActionButton label="By Industry" onClick={() => {}} color={ROLES.A.color} outline />
          </div>
        </Card>
      </div>
    ),
    graduates: (
      <Card title="Graduate Data" accent={ROLES.A.color}>
        <Table headers={["Name", "Program", "Batch", "Employment Status", "Industry"]} rows={[
          ["J. Santos", "BSIT", "2023", <Badge text="Employed" color="#2A9D8F" />, "IT / Tech"],
          ["M. Reyes", "BSBA", "2022", <Badge text="Employed" color="#2A9D8F" />, "Finance"],
          ["A. Cruz", "BSED", "2023", <Badge text="Unemployed" color="#e63946" />, "—"],
          ["P. Lim", "BSCS", "2021", <Badge text="Employed" color="#2A9D8F" />, "Tech"],
          ["C. Torres", "BSN", "2022", <Badge text="Employed" color="#2A9D8F" />, "Healthcare"],
        ]} color={ROLES.A.color} />
      </Card>
    ),
  };

  return (
    <DashboardShell role="A" onLogout={onLogout} nav={navItems} activeNav={nav} setActiveNav={setNav}>
      {views[nav]}
    </DashboardShell>
  );
}

export default function SchoolManagement() {
  // default role after login (you can change later)
  const role = "A";

  const handleLogout = () => {
    window.location.href = "/";
  };

  if (role === "SAO") return <SAODashboard onLogout={handleLogout} />;
  if (role === "S") return <StudentDashboard onLogout={handleLogout} />;
  if (role === "F") return <FrontDeskDashboard onLogout={handleLogout} />;
  if (role === "G") return <GuidanceDashboard onLogout={handleLogout} />;
  if (role === "A") return <AcademicDashboard onLogout={handleLogout} />;

  return null;
}
