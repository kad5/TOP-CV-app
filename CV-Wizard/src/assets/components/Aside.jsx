import { useState } from "react";

export default function Aside({ cvData, setCvData }) {
  const [activeTab, setActiveTab] = useState("general");
  console.log("aside", cvData);
  return (
    <aside>
      <div>
        <button className="tab-header" onClick={() => setActiveTab("general")}>
          general Styles
        </button>
        <div className={activeTab === "general" ? "tab open" : "tab"}>
          <div>
            <div>
              <label>
                font size:
                <select>
                  <option value="sml">small</option>
                  <option value="med">medium</option>
                  <option value="lrg">large</option>
                </select>
              </label>
              <label>
                primary font style:
                <select>
                  <option value="classic">classic</option>
                  <option value="neutral">neutral</option>
                  <option value="modern">modern</option>
                  <option value="elegant">elegant</option>
                </select>
              </label>
              <label>
                secondary font style:
                <select>
                  <option value="classic">classic</option>
                  <option value="neutral">neutral</option>
                  <option value="modern">modern</option>
                  <option value="elegant">elegant</option>
                </select>
              </label>
              <label>
                primary font color:
                <select>
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
                <select>
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
                <select>
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
                <select>
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
        <button className="tab-header" onClick={() => setActiveTab("header")}>
          header details
        </button>
        <div className={activeTab === "header" ? "tab open" : "tab"}>
          <div>
            <div></div>
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
                Choose a styled CV component:
                <select>
                  <option value="1">Experience</option>
                  <option value="2">Education</option>
                  <option value="3">Courses</option>
                  <option value="3">Achievements</option>
                  <option value="3">simple list with a title</option>
                  <option value="3">paragraph with a title</option>
                  <option value="3">separator</option>
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
