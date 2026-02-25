import { useState } from "react";
import { supabase } from "../lib/supabase";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); 

  const handleLogin = async (e) => {        
    e.preventDefault();
    setLoading(true);
    setErrorMsg(""); 

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      if (error.message.includes("Invalid login credentials")) {
        setErrorMsg("Incorrect email or password.");
      } else {
        setErrorMsg(error.message);
      }
    } else {
      setErrorMsg("");
      alert("Login successful! Redirecting... ");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(""); // 

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setErrorMsg("");
      alert("Signup successful! Check email 📩");
    }
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={isSignup ? handleSignup : handleLogin}
      >
        <h2 className="login-title">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        <input
          className="login-input"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* ✅ Inline error message */}
        {errorMsg && <div className="login-error">{errorMsg}</div>}

        <button className="login-btn" disabled={loading}>
          {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="login-text">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>

        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            setIsSignup(!isSignup);
            setErrorMsg(""); 
          }}
        >
          {isSignup ? "Login Instead" : "Create Account"}
        </button>
      </form>
    </div>
  );
}

export default Login;