import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ logged, setLogged, children }) {
  useEffect(() => {
    if (!logged) {
      setLogged(false);
      localStorage.removeItem("accessToken");
    }
  }, [logged, setLogged]);

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
