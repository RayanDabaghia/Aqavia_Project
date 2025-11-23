import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  if (!userRole) {
    return <Navigate to="/auth/login" replace />;
  }

  if (userRole !== role) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}
