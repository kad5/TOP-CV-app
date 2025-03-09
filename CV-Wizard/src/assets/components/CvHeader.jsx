import useCV from "../utils/context";
import Input from "./InputField";

export default function CvHeader({ type = "" }) {
  const { cvData } = useCV();
  return (
    <div
      style={{ backgroundColor: cvData.styles.primaryClr }}
      className={`cv-header ${type}`}
    >
      <div className="name-title">
        <Input
          className={"h-name"}
          keys={["header", "name"]}
          init={cvData.header.name}
          primary={true}
        />
        <Input
          className={"h-titleLetters"}
          keys={["header", "titleLetters"]}
          init={cvData.header.titleLetters}
          primary={true}
        />
      </div>
      <Input
        className={"h-jobTitle"}
        keys={["header", "jobTitle"]}
        init={cvData.header.jobTitle}
        primary={true}
      />
      <Input
        className={"h-email1"}
        keys={["header", "email1"]}
        init={cvData.header.email1}
      />
      <Input
        className={"h-email2"}
        keys={["header", "email2"]}
        init={cvData.header.email2}
      />
      <Input
        className={"h-phone1"}
        keys={["header", "phone1"]}
        init={cvData.header.phone1}
      />
      <Input
        className={"h-phone2"}
        keys={["header", "phone2"]}
        init={cvData.header.phone2}
      />
      <Input
        className={"h-address"}
        keys={["header", "address"]}
        init={cvData.header.address}
      />
      <Input
        className={"h-workAddress"}
        keys={["header", "workAddress"]}
        init={cvData.header.workAddress}
      />
      <Input
        className={"h-customList1Title"}
        keys={["header", "customList1Title"]}
        init={cvData.header.customList1Title}
      />
      <Input
        className={"h-customList1Content"}
        keys={["header", "customList1Content"]}
        init={cvData.header.customList1Content}
      />
      <Input
        className={"h-customList2Title"}
        keys={["header", "customList2Title"]}
        init={cvData.header.customList2Title}
      />
      <Input
        className={"h-customList2Content"}
        keys={["header", "customList2Content"]}
        init={cvData.header.customList2Content}
      />
      <Input
        className={"h-customPara1Title"}
        keys={["header", "customPara1Title"]}
        init={cvData.header.customPara1Title}
      />
      <Input
        className={"h-customPara1Content"}
        keys={["header", "customPara1Content"]}
        init={cvData.header.customPara1Content}
      />
      <Input
        className={"h-customPara2Title"}
        keys={["header", "customPara2Title"]}
        init={cvData.header.customPara2Title}
      />
      <Input
        className={"h-customPara2Content"}
        keys={["header", "customPara2Content"]}
        init={cvData.header.customPara2Content}
      />
    </div>
  );
}
