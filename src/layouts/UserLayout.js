import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
