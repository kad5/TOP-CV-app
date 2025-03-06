import { useEffect } from "react";
import { blankCV } from "../utils/draft";
import Aside from "../components/Aside";

export default function BuilderPage({ cvData, setCvData, setHasDraft }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("new")) {
      localStorage.removeItem("cvDraft"); // if the user accessed the function via the new CV btton then this will clear any draft
      const defaultCV = blankCV(); // get a fresh blacnck cv obj
      localStorage.setItem("cvDraft", JSON.stringify(defaultCV)); // set the new draft to local storage so that builder can access it
      setCvData(defaultCV); // have the default cv synced into state
      params.delete("new"); // removes the new param to prevent accidental loss of the draft on page refresh
      window.history.replaceState({}, "", `${window.location.pathname}`); // resets it to builkder (the default for drafts)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cvDraft", JSON.stringify(cvData));
    setHasDraft(true);
  }, [cvData]);

  function updateField(field, value) {
    setCvData((prev) => ({ ...prev, [field]: value }));
  }
  return (
    <>
      <Aside></Aside>
    </>
  );
}
