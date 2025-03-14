import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ logged, setLogged, children }) {
  if (!logged) {
    setLogged(false);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }
  return children;
}
