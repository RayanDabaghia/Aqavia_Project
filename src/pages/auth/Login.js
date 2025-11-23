import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@test.com" && password === "123456") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else {

      localStorage.setItem("role", "user");
      navigate("/user");
    }
  }

  return (
    <div className="auth-container">

      <h2>Login</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <p style={{cursor:"pointer"}}  onClick={() => navigate("/auth/register")}>
        Don no t have an account Register
      </p>

      <p style={{cursor:"pointer"}} onClick={() => navigate("/auth/forgot-password")}>
        Forgot password?
      </p>
    </div>
  );
}
