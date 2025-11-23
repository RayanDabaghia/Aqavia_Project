import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    navigate("/auth/login");
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"  placeholder="Full Name"
 onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
onChange={(e) => setEmail(e.target.value)}/>

        <input type="password" placeholder="Password" />

        <button type="submit">Create Account</button>
      </form>

      <p onClick={() => navigate("/auth/login")}>
        Already have an account? Login
      </p>
    </div>
  );
}
