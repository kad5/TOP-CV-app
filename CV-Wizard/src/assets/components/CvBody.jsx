import useCV from "../utils/context";
import { setNestedValue } from "../utils/setCV";
import Block from "./BodyBlock";

export default function CvBody({ body }) {
  const { cvData } = useCV();
  return (
    <div
      className="cv-body"
      style={{ backgroundColor: cvData.styles.accentClr }}
    >
      {body.map((comp, index) =>
        comp === null ? null : <Block key={index} parent={index} obj={comp} />
      )}
    </div>
  );
}
