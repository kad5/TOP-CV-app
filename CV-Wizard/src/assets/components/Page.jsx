import CvHeader from "./CvHeader";
import CvBody from "./CvBody";
import useCV from "../utils/context";

export default function Page({ type = "" }) {
  const { cvData } = useCV();
  const { body } = cvData;
  return (
    <div
      className={`cv-page ${type}`}
      style={{ fontSize: `${cvData.styles.fontSize}px` }}
    >
      <CvHeader type={cvData.header.template} />
      <CvBody body={body} />
    </div>
  );
}
