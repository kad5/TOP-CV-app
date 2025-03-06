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

  if (isNew) {
    localStorage.removeItem("cvDraft");
    localStorage.setItem("cvDraft", JSON.stringify(initialCV));
    //setSearchParams({});
  }

  useEffect(() => {
    setHasDraft(true);
  }, []);
  /*
  useEffect(() => {
    localStorage.setItem("cvDraft", JSON.stringify(cvData));
  }, [cvData]);
*/

  return (
    <>
      <Aside cvData={cvData} setCvData={setCvData}></Aside>
    </>
  );
}
