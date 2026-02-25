import { useState } from "react";
import AuthModal from "../components/authmodal";
import wallpaper from "../assets/stiwallpaper.jpg";

function Landing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navInner}>
          <div style={styles.logo}>STI Education Services Group</div>

          <div style={styles.navLinks}>
            <span>Campus Helpdesk</span>
            <span>FAQ</span>

            <button
              style={styles.loginBtn}
              onClick={() => setShowModal(true)}
            >
              Log in
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div
        style={{
          ...styles.hero,
          backgroundImage: `url(${wallpaper})`,
        }}
      />

      {/* MODAL */}
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
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