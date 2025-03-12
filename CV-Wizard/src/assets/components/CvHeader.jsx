import useCV from "../utils/context";
import Para from "./Para";
import Rows from "./Rows";

export default function CvHeader({ type = "" }) {
  const { cvData } = useCV();
  return (
    <div
      style={{ backgroundColor: cvData.styles.primaryClr }}
      className={`cv-header ${type}`}
    >
      <div className="name-title">
        <Para
          className={"h-name"}
          keys={["header", "name"]}
          init={cvData.header.name}
          primary={true}
        />
        <Para
          className={"h-titleLetters"}
          keys={["header", "titleLetters"]}
          init={cvData.header.titleLetters}
          primary={true}
        />
      </div>
      <Para
        className={"h-jobTitle"}
        keys={["header", "jobTitle"]}
        init={cvData.header.jobTitle}
        primary={true}
      />
      <Para
        className={"h-email1"}
        keys={["header", "email1"]}
        init={cvData.header.email1}
        primary={true}
      />
      <Para
        className={"h-email2"}
        keys={["header", "email2"]}
        init={cvData.header.email2}
        primary={true}
      />
      <Para
        className={"h-phone1"}
        keys={["header", "phone1"]}
        init={cvData.header.phone1}
        primary={true}
      />
      <Para
        className={"h-phone2"}
        keys={["header", "phone2"]}
        init={cvData.header.phone2}
        primary={true}
      />
      <Para
        className={"h-address"}
        keys={["header", "address"]}
        init={cvData.header.address}
        primary={true}
      />
      <Para
        className={"h-workAddress"}
        keys={["header", "workAddress"]}
        init={cvData.header.workAddress}
        primary={true}
      />
      <Para
        className={"h-customList1Title"}
        keys={["header", "customList1Title"]}
        init={cvData.header.customList1Title}
        primary={true}
      />
      <Rows
        className="h-list customList1Content"
        keys={["header", "customList1Content"]}
        list={cvData.header.customList1Content}
        primary={true}
      ></Rows>
      <Para
        className={"h-customList2Title"}
        keys={["header", "customList2Title"]}
        init={cvData.header.customList2Title}
        primary={true}
      />
      <Rows
        className="h-list customList2Content"
        keys={["header", "customList2Content"]}
        list={cvData.header.customList2Content}
        primary={true}
      ></Rows>
      <Para
        className={"h-customPara1Title"}
        keys={["header", "customPara1Title"]}
        init={cvData.header.customPara1Title}
        primary={true}
      />
      <Para
        className={"h-customPara1Content"}
        keys={["header", "customPara1Content"]}
        init={cvData.header.customPara1Content}
        primary={true}
      />
      <Para
        className={"h-customPara2Title"}
        keys={["header", "customPara2Title"]}
        init={cvData.header.customPara2Title}
        primary={true}
      />
      <Para
        className={"h-customPara2Content"}
        keys={["header", "customPara2Content"]}
        init={cvData.header.customPara2Content}
        primary={true}
      />
    </div>
  );
}
