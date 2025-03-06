import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./assets/styles/App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MainPage from "./assets/pages/mainPage";
import BuilderPage from "./assets/pages/BuilderPage";

function App() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState(null);
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
