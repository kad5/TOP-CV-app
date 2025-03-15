import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainPage from "./assets/pages/mainPage";
import BuilderPage from "./assets/pages/BuilderPage";
import LoginSignup from "./assets/pages/LoginSignupPage";
import Profile from "./assets/pages/Profile";
import ProtectedRoute from "./assets/pages/ProtectedRoute";
import { useAuth } from "./assets/utils/AuthContext";
import ErrorPage from "./assets/pages/ErrorPage";

function App() {
  const { logged, setLogged, username, setUsername } = useAuth();
  const [hasDraft, setHasDraft] = useState(!!localStorage.getItem("cvDraft"));

  const navigate = useNavigate();

  function startNewCanvas() {
    if (hasDraft) {
      const confirmDelete = window.confirm("You have a draft. Start a new CV?");
      if (!confirmDelete) return;
    }
    navigate("/builder?new=true");
  }
  return (
    <>
      <Header
        username={username}
        logged={logged}
        setLogged={setLogged}
        hasDraft={hasDraft}
        startNewCanvas={startNewCanvas}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              className="page-wrapper"
              startNewCanvas={startNewCanvas}
            />
          }
        />
        <Route
          path="/builder"
          element={
            <BuilderPage className="page-wrapper" setHasDraft={setHasDraft} />
          }
        />
        <Route
          path="/login"
          element={
            <LoginSignup
              login={true}
              setLogged={setLogged}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <LoginSignup
              login={false}
              setLogged={setLogged}
              setUsername={setUsername}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute logged={logged} setLogged={setLogged}>
              <Profile username={username} />
            </ProtectedRoute>
          }
        />
        <Route path="/500" element={<ErrorPage code={500} />} />
        <Route path="*" element={<ErrorPage code={404} />} />
      </Routes>
      <Footer logged={logged}></Footer>
    </>
  );
}

export default App;
