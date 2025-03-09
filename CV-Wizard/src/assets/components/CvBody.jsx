import useCV from "../utils/context";
import { setNestedValue } from "../utils/setCV";

export default function CvBody({ body }) {
  const { cvData } = useCV();
  return (
    <div
      className="cv-body"
      style={{ backgroundColor: cvData.styles.accentClr }}
    >
      {body.map((comp, compIndex) => (
        <CVComponent key={compIndex} data={comp} />
      ))}
    </div>
  );
}

function CVComponent({ comp }) {
  console.log(comp);
  return (
    <p>
      Tet corrupti error. Ex officiis reprehenderit libero nobis totam delectus
      ab amet dicta aperiam culpa. Harum quibusdam laboriosam, quisquam tempore
      paripit tenetur eveniet tempora repellendus reprehenderit porro
    </p>
  );
}
