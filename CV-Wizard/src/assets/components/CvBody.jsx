import useCV from "../utils/context";
import Block from "./BodyBlock";
import { setNestedValue } from "../utils/setCV";

export default function CvBody({ body }) {
  const { cvData, setCvData } = useCV();
  function deleteBlock(index) {
    const keys = ["body", index];
    setCvData((prev) => setNestedValue(prev, keys, null));
  }
  return (
    <div
      className="cv-body"
      style={{ backgroundColor: cvData.styles.accentClr }}
    >
      {body.map((comp, index) =>
        comp === null ? null : typeof comp === "object" ? (
          <Block key={index} parent={index} obj={comp} />
        ) : (
          <div key={index} className="b-separator">
            <p>This is a separator, it will show as white space on print </p>
            <button onClick={() => deleteBlock(index)}>❌</button>
          </div>
        )
      )}
    </div>
  );
}
