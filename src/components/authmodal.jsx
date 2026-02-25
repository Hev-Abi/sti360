import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { getUserRole } from "../utils/getUserRole";
import { roleRedirect } from "../utils/roleRedirect";
import { createProfile } from "../utils/createProfile";

function AuthModal({ onClose }) {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMsg("Incorrect email or password");
          return;
        }

        // ✅ GET USER ROLE
        const role = await getUserRole();

        if (!role) {
          setErrorMsg("No role assigned to this account.");
          return;
        }

        // ✅ REDIRECT BASED ON ROLE
        onClose();
        redirectByRole(role, navigate);
      } else {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            });

            if (!error && data.user) {
            await createProfile(data.user.id, "student"); // default role
            }

        setErrorMsg("Signup successful! Check your email.");
        setIsLogin(true);
      }
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.close} onClick={onClose}>✕</button>

        <h2>{isLogin ? "Login" : "Register"}</h2>

        {errorMsg && <p style={styles.error}>{errorMsg}</p>}

        <input
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleAuth} disabled={loading}>
          {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
        </button>

        <p style={{ marginTop: 10 }}>
          {isLogin ? "No account?" : "Already registered?"}
          <span
            style={styles.toggle}
            onClick={() => {
              setIsLogin(!isLogin);
              setErrorMsg("");
            }}
          >
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center",
    position: "relative",
  },

  close: {
    position: "absolute",
    right: 15,
    top: 10,
    border: "none",
    background: "none",
    fontSize: "20px",
    cursor: "pointer",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },

  btn: {
    width: "100%",
    padding: "12px",
    background: "#0077b6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  toggle: {
    color: "#0077b6",
    cursor: "pointer",
    fontWeight: "bold",
  },

  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
};

export default AuthModal;