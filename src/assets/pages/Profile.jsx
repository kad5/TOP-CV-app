import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useApiRequest } from "../utils/apiConfig";
import useToast from "../utils/ToastContext";

export default function Profile({ username }) {
  const [loading, setLoading] = useState(true);
  const [drafts, setDrafts] = useState([]);
  const [error, setError] = useState(null);
  const { setIsShown, setMsg, setType } = useToast();
  const navigate = useNavigate();
  const apiRequest = useApiRequest();

  useEffect(() => {
    loadDrafts();
  }, []);

  async function loadDrafts() {
    setLoading(true);
    try {
      const response = await apiRequest("/drafts", "GET");
      setDrafts(response.data.drafts);
    } catch (error) {
      console.log(error);
      setError("A problem occurred, please try again.");
    } finally {
      setLoading(false);
    }
  }

  function formatDate(date) {
    return new Date(date).toDateString();
  }

  function editDraft(draft, id, title) {
    console.log(draft);
    draft.id = id;
    draft.title = title;
    localStorage.setItem("cvDraft", JSON.stringify(draft));
    navigate("/builder");
  }
  async function deleteDraft(id) {
    try {
      const response = await apiRequest("/drafts", "DELETE", { draftId: id });
      setDrafts((dr) =>
        dr.filter((d) => d.id !== response.data.deletedDraft.id)
      );
      setIsShown(true);
      setMsg("Draft deleted successfully 👍"), setType("success");
    } catch (error) {
      console.log(error);
      setError("A problem occurred, please try again.");
    }
  }
  return (
    <div className="profile-page">
      <h2>
        All your drafts here, <span>{username}</span> :
      </h2>
      <div>
        {error && <p>{error}</p>}
        {loading && (
          <p className="loading-drafts">
            loading your data{" "}
            <svg
              viewBox="0 0 1400 1400"
              xmlns="http://www.w3.org/2000/svg"
              height={"2rem"}
              width={"2rem"}
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
          </p>
        )}
        {!loading && drafts.length === 0 ? (
          <p>
            You don't have anything saved here yet. Try creating a new draft
            from <Link to={"/builder?new=true"}>Here</Link>
          </p>
        ) : (
          <div className="cards-container">
            {drafts.map((dr) => {
              return (
                <div className="cv-card" key={dr.id}>
                  <h3>{dr.title}</h3>
                  <p>
                    You first created this draft on: {formatDate(dr.createdAt)}
                  </p>
                  <p>and last modifiedit on: {formatDate(dr.updatedAt)}</p>
                  <div className="cv-card-ctrls">
                    <button
                      onClick={() => editDraft(dr.content, dr.id, dr.title)}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteDraft(dr.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
