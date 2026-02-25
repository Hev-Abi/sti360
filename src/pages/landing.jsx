import { useNavigate } from "react-router-dom";
import wallpaper from "../assets/stiwallpaper.jpg";

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navInner}>
          <div style={styles.logo}>STI Education Services Group</div>

          <div style={styles.navLinks}>
            <span>Campus Helpdesk</span>
            <span>FAQ</span>

            <button
              style={styles.loginBtn}
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </div>
        </div>
      </nav>

      <div
        style={{
          ...styles.hero,
          backgroundImage: `url(${wallpaper})`,
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  navbar: {
    width: "100%",
    background: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
  },

  navInner: {
    width: "100%",
    maxWidth: "1400px",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
  },

  logo: {
    fontSize: "20px",
    whiteSpace: "nowrap",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
  },

  loginBtn: {
    padding: "10px 20px",
    background: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
  },

  hero: {
    height: "calc(100vh - 70px)",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default Landing; 