import { useNavigate } from "react-router-dom";
import ButtonBack from "./ButtonBack";
import '../styles/header.css'

export default function Header() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("role"); 

  return (
    <header className="header">
      <ButtonBack />

      <nav className="navbar">
        <button className="nav-item" onClick={() => navigate("/auth/login")}>Login</button>

        {userRole === "user" && (
          <button className="nav-item" onClick={() => navigate("/user/about")}>About</button>
        )}
        {userRole === "user" && (
          <button className="nav-item" onClick={() => navigate("/user/contact")}>Contact</button>
        )}
      </nav>
    </header>
  );
}
