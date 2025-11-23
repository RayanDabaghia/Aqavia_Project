import Sidebar from "../components/Sidebar";
import ButtonBack from "../components/ButtonBack";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      
      <div style={{ flex: 1, padding: "20px"}}>
        <ButtonBack />
        <main style={{ padding: "20px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
