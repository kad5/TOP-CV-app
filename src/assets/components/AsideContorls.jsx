import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCV from "../utils/CvContext";
import { cvComponent } from "../utils/draft";
import html2pdf from "html2pdf.js";
import { useApiRequest } from "../utils/apiConfig";

export default function Aside({ setHasDraft }) {
  const [activeTab, setActiveTab] = useState("header");
  const [download, setDownload] = useState(false);
  const { cvData, setCvData } = useCV();
  const navigate = useNavigate();
  const apiRequest = useApiRequest();
  function handleChange(e, attribute) {
    setCvData({
      ...cvData,
      styles: {
        ...cvData.styles,
        [attribute]: e.target.value,
      },
    });
  }
  function chooseLayout(value) {
    if (value === "standard-h") {
      setCvData({
        ...cvData,
        styles: {
          ...cvData.styles,
          primaryClr: "#f7f7f7",
          accentClr: "#ffffff",
          primaryFontClr: "#000000",
          secondaryFontClr: "#1f1f1f",
        },
        header: {
          ...cvData.header,
          layout: "horizontal",
          template: "standard-h",
        },
      });
    }
    if (value === "fancy-h") {
      setCvData({
        ...cvData,
        styles: {
          ...cvData.styles,
          primaryClr: "#1f1f1f",
          accentClr: "#f7f7f7",
          primaryFontClr: "#f7f7f7",
          secondaryFontClr: "#1f1f1f",
        },
        header: {
          ...cvData.header,
          layout: "horizontal",
          template: "fancy-h",
        },
      });
    }
    if (value === "standard-v") {
      setCvData({
        ...cvData,
        styles: {
          ...cvData.styles,
          primaryClr: "#2190f8",
          accentClr: "#f7f7f7",
          primaryFontClr: "#f7f7f7",
          secondaryFontClr: "#1f1f1f",
        },
        header: {
          ...cvData.header,
          layout: "vertical",
          template: "standard-v",
        },
      });
    }
    if (value === "fancy-v") {
      setCvData({
        ...cvData,
        styles: {
          ...cvData.styles,
          primaryClr: "#441300",
          accentClr: "#f7f7f7",
          primaryFontClr: "#f7f7f7",
          secondaryFontClr: "#1f1f1f",
        },
        header: {
          ...cvData.header,
          layout: "vertical",
          template: "fancy-v",
        },
      });
    }
  }
  function translateValue() {
    if (cvData.header.template === "standard-h") return "standard-h";
    if (cvData.header.template === "fancy-h") return "fancy-h";
    if (cvData.header.template === "standard-v") return "standard-v";
    if (cvData.header.template === "fancy-v") return "fancy-v";
  }
  function addNewBlock(type, mode, title) {
    const newBlock = cvComponent(type, mode, title);
    setCvData({
      ...cvData,
      body: [...cvData.body, newBlock],
    });
  }
  function addSep() {
    setCvData({
      ...cvData,
      body: [...cvData.body, "separator-block"],
    });
  }
  function preview() {
    setDownload(true);
    const btns = document.querySelectorAll(".ctrls-for-delete");
    btns.forEach((btn) => (btn.style.display = "none"));
  }

  async function getFile() {
    setDownload(false);
    const element = document.getElementById("cvPage");
    // from the html2pdfjs docs and handy AI helped configure this
    const opt = {
      margin: [0, 0, 0, 0],
      filename: "my-cv.pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: {
        scale: 3,
        useCORS: true,
        logging: false,
        height: element.clientHeight,
        windowHeight: element.clientHeight,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        putOnlyUsedFonts: true,
        compress: true,
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    await html2pdf().from(element).set(opt).save(); // need to await this before adding the buttons, i think so that fixed a bug where the buttons would show before the function finishes. so i think its is async
    const btns = document.querySelectorAll(".ctrls-for-delete");
    btns.forEach((btn) => (btn.style.display = "initial"));
  }

  function save() {
    try {
      const response = apiRequest("/drafts", "POST", {
        title: "ss",
        content: cvData,
      });
      if (response.status === 200) console.log(response.newDraft);
    } catch (error) {
      console.log(error);
    }
  }
  function dlt() {
    navigate("/");
    setHasDraft(false);
    localStorage.removeItem("cvDraft");
  }
  function cencelPreview() {
    setDownload(false);
    const btns = document.querySelectorAll(".ctrls-for-delete");
    btns.forEach((btn) => (btn.style.display = "initial"));
  }
  return (
    <aside>
      <div>
        <button className="tab-header" onClick={() => setActiveTab("header")}>
          Page layout
        </button>
        <div className={activeTab === "header" ? "tab open" : "tab"}>
          <div>
            <div>
              <label>
                Select page layout
                <select
                  value={translateValue()}
                  onChange={(e) => chooseLayout(e.target.value)}
                >
                  <option value="standard-h">Standard</option>
                  <option value="fancy-h">Stramlined</option>
                  <option value="standard-v">Detailed</option>
                  <option value="fancy-v">Modern</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="tab-header" onClick={() => setActiveTab("general")}>
          general Styles
        </button>
        <div className={activeTab === "general" ? "tab open" : "tab"}>
          <div>
            <div>
              <label>
                font size:
                <select
                  onChange={(e) => handleChange(e, "fontSize")}
                  value={cvData.styles.fontSize}
                >
                  <option value="12">small</option>
                  <option value="16">medium</option>
                  <option value="20">large</option>
                </select>
              </label>
              <label>
                primary font style:
                <select
                  onChange={(e) => handleChange(e, "primaryFontStyle")}
                  value={cvData.styles.primaryFontStyle}
                >
                  <option value="Times New Roman">classic</option>
                  <option value="Arial">neutral</option>
                  <option value="system-ui">modern</option>
                  <option value="DM Sans">elegant</option>
                </select>
              </label>
              <label>
                secondary font style:
                <select
                  onChange={(e) => handleChange(e, "secondaryFontStyle")}
                  value={cvData.styles.secondaryFontStyle}
                >
                  <option value="Times New Roman">classic</option>
                  <option value="Arial">neutral</option>
                  <option value="system-ui">modern</option>
                  <option value="DM Sans">elegant</option>
                </select>
              </label>
              <label>
                primary font color:
                <select
                  onChange={(e) => handleChange(e, "primaryFontClr")}
                  value={cvData.styles.primaryFontClr}
                >
                  <option value="#000000">vantablack</option>
                  <option value="#ffffff">pure snow</option>
                  <option value="#1f1f1f">charcoal </option>
                  <option value="#f7f7f7">buttermilk</option>
                  <option value="#002344">indigo blue</option>
                  <option value="#2190f8">suit blue</option>
                  <option value="#441300">auburn red</option>
                  <option value="#f82121">executive red</option>
                  <option value="#004406">forest green</option>
                  <option value="#65f821">lush neon</option>
                </select>
                <div
                  style={{ backgroundColor: cvData.styles.primaryFontClr }}
                  className="clr-preview"
                ></div>
              </label>
              <label>
                secondary font color:
                <select
                  onChange={(e) => handleChange(e, "secondaryFontClr")}
                  value={cvData.styles.secondaryFontClr}
                >
                  <option value="#000000">vantablack</option>
                  <option value="#ffffff">pure snow</option>
                  <option value="#1f1f1f">charcoal </option>
                  <option value="#f7f7f7">buttermilk</option>
                  <option value="#002344">indigo blue</option>
                  <option value="#2190f8">suit blue</option>
                  <option value="#441300">auburn red</option>
                  <option value="#f82121">executive red</option>
                  <option value="#004406">forest green</option>
                  <option value="#65f821">lush neon</option>
                </select>
                <div
                  style={{ backgroundColor: cvData.styles.secondaryFontClr }}
                  className="clr-preview"
                ></div>
              </label>
              <label>
                primary page color:
                <select
                  onChange={(e) => handleChange(e, "primaryClr")}
                  value={cvData.styles.primaryClr}
                >
                  <option value="#000000">vantablack</option>
                  <option value="#ffffff">pure snow</option>
                  <option value="#1f1f1f">charcoal </option>
                  <option value="#f7f7f7">buttermilk</option>
                  <option value="#002344">indigo blue</option>
                  <option value="#2190f8">suit blue</option>
                  <option value="#441300">auburn red</option>
                  <option value="#f82121">executive red</option>
                  <option value="#004406">forest green</option>
                  <option value="#65f821">lush neon</option>
                </select>
                <div
                  style={{ backgroundColor: cvData.styles.primaryClr }}
                  className="clr-preview"
                ></div>
              </label>
              <label>
                accent page color:
                <select
                  onChange={(e) => handleChange(e, "accentClr")}
                  value={cvData.styles.accentClr}
                >
                  <option value="#000000">vantablack</option>
                  <option value="#ffffff">pure snow</option>
                  <option value="#1f1f1f">charcoal </option>
                  <option value="#f7f7f7">buttermilk</option>
                  <option value="#002344">indigo blue</option>
                  <option value="#2190f8">suit blue</option>
                  <option value="#441300">auburn red</option>
                  <option value="#f82121">executive red</option>
                  <option value="#004406">forest green</option>
                  <option value="#65f821">lush neon</option>
                </select>
                <div
                  style={{ backgroundColor: cvData.styles.accentClr }}
                  className="clr-preview"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="tab-header" onClick={() => setActiveTab("comps")}>
          CV blocks
        </button>
        <div className={activeTab === "comps" ? "tab open" : "tab"}>
          <div>
            <div className="blocks-ctrls">
              <p>Quick add CV blocks : </p>
              <button
                onClick={() => addNewBlock("para", "compact", "About me")}
              >
                Personal Statement
              </button>
              <button
                onClick={() => addNewBlock("list", "detailed", "Experience")}
              >
                Experience section
              </button>
              <button
                onClick={() => addNewBlock("list", "standard", "Education")}
              >
                Education section
              </button>
              <button onClick={() => addNewBlock("list", "compact", "Courses")}>
                Courses section
              </button>
              <button
                onClick={() => addNewBlock("para", "compact", "Achievements")}
              >
                Achievements section
              </button>
              <button onClick={() => addNewBlock("list", "compact", "Skills")}>
                Skills section
              </button>
              <p>Add a custom CV block : </p>
              <button
                onClick={() =>
                  addNewBlock("para", "standard", "Custom paragraph block")
                }
              >
                Custom paragraph block
              </button>
              <button
                onClick={() =>
                  addNewBlock("list", "detailed", "Custom list block")
                }
              >
                Custom list container block
              </button>
              <button onClick={addSep}>Block separator</button>
            </div>
          </div>
        </div>
      </div>
      <div className="final-ctrls">
        {!download && (
          <button onClick={preview}>Preview final CV document</button>
        )}
        {download && <button onClick={getFile}>download</button>}
        {download && <button onClick={cencelPreview}>cancel preview</button>}
        <button onClick={save}>Save to your account for later</button>
        <button onClick={dlt}>I don't like it, delete it</button>
      </div>
    </aside>
  );
}
