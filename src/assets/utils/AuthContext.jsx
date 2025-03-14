import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logged, setLogged] = useState(!!localStorage.getItem("accessToken"));
  const [username, setUsername] = useState(
    localStorage.getItem("username") || null
  );

  useEffect(() => {
    if (!logged) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
    }
  }, [logged]);

  return (
    <AuthContext.Provider value={{ logged, setLogged, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth
export function useAuth() {
  return useContext(AuthContext);
}
