import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { blankCV } from "../utils/draft";
import Aside from "../components/Aside";

export default function BuilderPage({ setHasDraft }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isNew = searchParams.has("new");
  const initialCV = isNew
    ? blankCV()
    : JSON.parse(localStorage.getItem("cvDraft")) || blankCV();

  const [cvData, setCvData] = useState(initialCV);
  // this fixes a bug that caused the state not to update without an unmounting (page reload), so we force a state reset. Thank you AI
  useEffect(() => {
    if (isNew) {
      const newCV = blankCV();
      setCvData(newCV); // resets the state
      localStorage.removeItem("cvDraft");
      localStorage.setItem("cvDraft", JSON.stringify(newCV));
      setSearchParams({}); // clears the "new" parameter so that a donkey user who clicks refresh while working on a draft doesn't trigger a delete of the draft (not refreshing to ?new=true)
    }
  }, [isNew, setSearchParams]);

  useEffect(() => {
    setHasDraft(true);
  }, [setHasDraft]);

  useEffect(() => {
    localStorage.setItem("cvDraft", JSON.stringify(cvData));
  }, [cvData]);

  return (
    <>
      <Aside cvData={cvData} setCvData={setCvData}></Aside>
    </>
  );
}
