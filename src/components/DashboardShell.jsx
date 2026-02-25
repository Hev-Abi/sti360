import { ROLES } from "../constants/roles";

export default function DashboardShell({
  role,
  children,
  nav = [],
  activeNav,
  setActiveNav,
  onLogout,
}) {
  const roleConfig = ROLES[role];

  if (!roleConfig) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Invalid Role</h2>
        <p>No configuration found for: {role}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <div>
          <h2 style={styles.brand}>STI 360 Life Cycle</h2>
          <p style={styles.roleLabel}>{roleConfig.label}</p>

          <div style={styles.navContainer}>
            {nav.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveNav(item.key)}
                style={{
                  ...styles.navButton,
                  background:
                    activeNav === item.key ? "#0077b6" : "transparent",
                  color: activeNav === item.key ? "#fff" : "#333",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* LOGOUT */}
        <button style={styles.logoutBtn} onClick={onLogout}>
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f7f8fa",
  },

  sidebar: {
    width: 240,
    background: "#fff",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid #eee",
  },

  brand: {
    marginBottom: 4,
  },

  roleLabel: {
    fontSize: 13,
    color: "#777",
    marginBottom: 20,
  },

  navContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  navButton: {
    padding: "10px 12px",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    textAlign: "left",
    fontSize: 14,
    transition: "0.2s",
  },

  logoutBtn: {
    padding: "10px",
    border: "none",
    borderRadius: 6,
    background: "#e63946",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  main: {
    flex: 1,
    padding: 30,
  },
};