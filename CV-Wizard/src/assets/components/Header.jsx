import { useEffect, useState } from "react";

export default function Header({ username, logged }) {
  const [hasDraft, setHasDraft] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto");

  // draft state
  useEffect(() => {
    setHasDraft(!!localStorage.getItem("cvDraft"));
  }, []);

  function resumeDraft() {
    if (hasDraft) window.location.href = "/builder";
  }

  function startNewCanvas() {
    if (localStorage.getItem("cvDraft")) {
      const confirmDelete = window.confirm("You have a draft. Start a new CV?");
      if (!confirmDelete) return;
    }
    window.location.href = "/builder?new=true";
  }
  // dark/ light mode
  useEffect(() => {
    if (theme === "auto") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.getElementById("root").classList.add("dark")
        : document.getElementById("root").classList.remove("dark");
    } else if (theme === "light") {
      document.getElementById("root").classList.remove("dark");
    } else if (theme === "dark") {
      document.getElementById("root").classList.add("dark");
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
        <a href="/">CV wizard</a>
      </div>
      <nav>
        <ul>
          {logged ? (
            <>
              <li>Welcome back, {username || "User"}</li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/logout">Log out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login">Sign in</a>
              </li>
              <li>
                <a href="/signup">Sign up</a>
              </li>
            </>
          )}
          <li>
            <button onClick={startNewCanvas}>New CV</button>
          </li>
          {hasDraft && (
            <li>
              <button onClick={resumeDraft}>Resume Last Draft</button>
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
