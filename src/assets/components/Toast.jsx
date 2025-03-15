import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Toast({ message, type, setIsShown, isShown }) {
  const [styles, setStyles] = useState("");

  useEffect(() => {
    if (!isShown) return setStyles("");

    setStyles("toast-visible");

    const hideTimeout = setTimeout(() => {
      setStyles("toast-visible animate-toast-out");
    }, 2000);

    const removeTimeout = setTimeout(() => {
      setStyles("");
      setIsShown(false);
    }, 2350);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, [isShown, setIsShown]);

  return createPortal(
    <div className={`toast ${type} ${styles}`}>
      <span>{message}</span>
      <button onClick={() => setIsShown(false)}>❌</button>
    </div>,
    document.body
  );
}
