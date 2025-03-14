import { useNavigate } from "react-router-dom";

export function useApiRequest() {
  const navigate = useNavigate();
  const BASE_URL = "https://top-cv-api-production.up.railway.app/api";

  async function tryRefresh() {
    console.warn("🔄 Token expired. Attempting refresh...");
    try {
      const refresh = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!refresh.ok) {
        throw new Error("Failed to refresh token");
      }

      const refreshData = await refresh.json();
      localStorage.setItem("accessToken", refreshData.accessToken);
      return refreshData;
    } catch (refreshError) {
      console.error("Unauthorized:", refreshError);
      navigate("/login");
      return;
    }
  }

  async function apiRequest(endpoint, type, payload = null, retry = true) {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const url = `${BASE_URL}${endpoint}`;
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    });

    if (token) myHeaders.append("Authorization", `Bearer ${token}`);

    const config = {
      method: type,
      headers: myHeaders,
      credentials: "include",
    };

    if (payload) {
      config.body = JSON.stringify(payload);
    }

    try {
      const response = await fetch(url, config);
      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = { message: "No JSON response" };
      }
      // try refresh
      if (response.status === 401 && retry) {
        const refresh = await tryRefresh();
        console.log(refresh);
        return apiRequest(endpoint, type, payload, false);
      }
      // universal error handling
      if (!response.ok) {
        if (response.status === 404) {
          return navigate("/404");
        } else if (response.status >= 500) {
          return navigate("/500");
        }
      }
      // send back the data and any 401, 403, 409 will be handled on case per case basis
      return { data, status: response.status };
    } catch (error) {
      console.error("API Request Failed:", error);
      throw error; // re-throw for handling in components
    }
  }
  return apiRequest;
}
