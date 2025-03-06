import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ username, logged, hasDraft, startNewCanvas }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto");

  useEffect(() => {
    if (theme === "auto") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    } else if (theme === "light") {
      document.body.classList.remove("dark");
    } else if (theme === "dark") {
      document.body.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    const themeOrder = ["auto", "dark", "light"];
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  }
  return (
    <header>
      <div>
        <Link to="/">CV wizard</Link>
      </div>
      <nav>
        <ul>
          {logged ? (
            <>
              <li>Welcome back, {username || "User"}</li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/logout">Log out</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          )}
          <li>
            <button onClick={startNewCanvas}>New CV</button>
          </li>
          {hasDraft && (
            <li>
              <Link className="aBtn" to="/builder">
                Resume Last Draft
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" && "🌞"}
          {theme === "dark" && "🌚"}
          {theme === "auto" && "🌗"}
        </button>
      </div>
    </header>
  );
}
