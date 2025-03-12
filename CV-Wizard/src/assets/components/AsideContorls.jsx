import { useState } from "react";
import useCV from "../utils/context";
import { listItem, cvComponent } from "../utils/draft";

export default function Aside() {
  const [activeTab, setActiveTab] = useState("header");
  const { cvData, setCvData } = useCV();
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
    console.log(value);
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
          secondaryFontClr: "#f7f7f7",
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
          secondaryFontClr: "#f7f7f7",
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
          secondaryFontClr: "#f7f7f7",
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
  return (
    <aside>
      <div>
        <button className="tab-header" onClick={() => setActiveTab("header")}>
          CV layout
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
          CV components
        </button>
        <div className={activeTab === "comps" ? "tab open" : "tab"}>
          <div>
            <div>
              <label>
                Add a styled CV block:
                <select>
                  <option value="1">Experience</option>
                  <option value="2">Education</option>
                  <option value="3">Courses</option>
                  <option value="3">Achievements</option>
                  <option value="3">Custom list</option>
                  <option value="3">Custom paragraph</option>
                  <option value="3">Section separator</option>
                </select>
              </label>
              <div>Content</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
