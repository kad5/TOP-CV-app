import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import { AuthProvider } from "./assets/utils/AuthContext.jsx";
import ToastProvider from "./assets/utils/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
