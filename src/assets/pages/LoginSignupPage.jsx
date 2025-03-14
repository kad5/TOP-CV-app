import { useEffect, useState } from "react";
import { useApiRequest } from "../utils/apiConfig";
import { useNavigate } from "react-router-dom";
export default function LoginSignup({ login, setLogged, setUsername }) {
  const [username, setUsernameInp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiRequest = useApiRequest();
  const navigate = useNavigate();
  useEffect(() => {
    setErrors([]);
  }, [login]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    if (!login && password !== confirm) {
      setLoading(false);
      setErrors(["passwords don't match"]);
      return;
    }
    try {
      const endpoint = login ? "/auth/log-in" : "/auth/sign-up";
      const body = login
        ? { username, password }
        : { username, password, confirm };

      const response = await apiRequest(endpoint, "POST", body, false);
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        setLogged(true);
        setUsername(response.data.username);
        localStorage.setItem("accessToken", response.data.accessToken);
        return navigate("/profile");
      } else {
        if (response.status === 401 || response.status === 409) {
          setErrors([response.data.message]);
        }
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.message.includes("Failed to fetch"))
        setErrors(["Network error", "Please check your internet connection"]);
    }
  }

  return (
    <div className="auth-page">
      <div className="login-container">
        {login ? <h2>Log In</h2> : <h2>Sign Up</h2>}
        <div className="errors">
          {errors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={login ? "Enter your username" : "Pick a username"}
            value={username}
            onChange={(e) => setUsernameInp(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!login ? (
            <input
              style={
                password === "" || confirm === ""
                  ? { borderColor: "var(--border)" }
                  : password !== confirm
                  ? { borderColor: "red" }
                  : { borderColor: "green" }
              }
              type="password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          ) : null}
          <button
            style={
              !login
                ? password === "" || confirm === "" || username === ""
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
                : password === "" || username === ""
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
            disabled={
              !login
                ? password === "" || confirm === "" || username === ""
                : password === "" || username === ""
            }
            type="submit"
          >
            {loading ? (
              <svg
                viewBox="0 0 1400 1400"
                xmlns="http://www.w3.org/2000/svg"
                height={"1.1rem"}
                width={"1.1rem"}
              >
                <circle
                  className="spin"
                  cx="700"
                  cy="700"
                  fill="none"
                  r="650"
                  strokeWidth="150"
                  stroke="var(--btn-clr)"
                  strokeDasharray="1000 1400"
                  strokeLinecap="round"
                />
              </svg>
            ) : login ? (
              "Log in"
            ) : (
              "Sign up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
