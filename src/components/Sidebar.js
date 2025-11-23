import { useNavigate } from "react-router-dom";
import '../styles/sidebar.css'

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">

      <h3>Admin Panel</h3>

       <button onClick={() => navigate("/admin")} className="btnSidebar">Dashboard</button>
      <button onClick={() => navigate("/admin/users")} className="btnSidebar">Users</button>
    </aside>
  );
}

