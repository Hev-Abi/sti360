  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { supabase } from "../lib/supabase";
  import { getUserRole } from "../utils/getUserRole";
  import { roleRedirect } from "../utils/roleRedirect";
  import { createProfile } from "../utils/createProfile";
  import wallpaper from "../assets/stiwallpaper.jpg";
  import "./login.css";

  function Login() {
    const navigate = useNavigate();

    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ RESET HELPER
    const clearForm = () => {
      setEmail("");
      setPassword("");
      setError("");
    };

    // ✅ TOGGLE WITH CLEAR
    const handleToggle = () => {
      setIsSignup(prev => !prev);
      clearForm();
    };

    const handleAuth = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
        if (isSignup) {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
          });

          if (error) throw error;

          await createProfile(data.user.id, email);

          alert("Signup successful! Check your email.");

          setIsSignup(false);
          clearForm(); // ✅ CLEAR AFTER SIGNUP
        } else {
          const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });

          if (error) throw error;

          const {
            data: { session },
          } = await supabase.auth.getSession();

          const role = await getUserRole(session.user.id);
          navigate(roleRedirect(role));
        }
      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    };

    return (
      <div
        className="login-page"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        <div className="login-overlay">
          <form className="login-box" onSubmit={handleAuth}>
            <button
              type="button"
              className="back-btn"
              onClick={() => {
                  clearForm();
                  navigate("/");
                  }}
            >
              ← Back
            </button>

            <h2>{isSignup ? "Create Account" : "STI Login"}</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error">{error}</p>}

            <button className="login-btn" disabled={loading}>
              {loading
                ? "Please wait..."
                : isSignup
                ? "Register"
                : "Login"}
            </button>

            <p className="toggle">
              {isSignup
                ? "Already have an account?"
                : "No account yet?"}

              <span onClick={handleToggle}>
                {isSignup ? " Login" : " Register"}
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }

  export default Login;