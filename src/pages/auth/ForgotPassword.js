import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleReset(e) {
    e.preventDefault();
  }

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>

      <form onSubmit={handleReset} className="auth-form">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send Reset Link</button>
      </form>

      <p onClick={() => navigate("/auth/login")}>Back to Login</p>
    </div>
  );
}
