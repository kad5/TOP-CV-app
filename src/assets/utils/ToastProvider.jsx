import { useState } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "../components/Toast";

export default function ToastProvider({ children }) {
  const [isShown, setIsShown] = useState(false);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  return (
    <ToastContext.Provider value={{ setIsShown, setMsg, setType }}>
      {children}
      <Toast
        styl
        message={msg}
        type={type}
        setIsShown={setIsShown}
        isShown={isShown}
      />
    </ToastContext.Provider>
  );
}
