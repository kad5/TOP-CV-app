import { useState } from "react";

export default function Aside() {
  const [activeTab, setActiveTab] = useState("general");

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
                primary font type:
                <select>
                  <option value="classic">classic</option>
                  <option value="neutral">neutral</option>
                  <option value="modern">modern</option>
                  <option value="elegant">elegant</option>
                </select>
              </label>
              <label>
                secondary font type:
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
                  <option value="classic">vantablack</option>
                  <option value="elegant">pure snow</option>
                  <option value="neutral">charcoal </option>
                  <option value="elegant">buttermilk</option>
                  <option value="modern">indigo blue</option>
                  <option value="elegant">suit blue</option>
                  <option value="elegant">auburn red</option>
                  <option value="elegant">executive red</option>
                  <option value="elegant">forest green</option>
                  <option value="elegant">lush neon</option>
                </select>
                <div className="clr-preview"></div>
              </label>
              <label>
                secondary font type:
                <select>
                  <option value="classic">vantablack</option>
                  <option value="elegant">pure snow</option>
                  <option value="neutral">charcoal</option>
                  <option value="elegant">buttermilk</option>
                  <option value="modern">indigo blue</option>
                  <option value="elegant">suit blue</option>
                  <option value="elegant">auburn red</option>
                  <option value="elegant">executive red</option>
                  <option value="elegant">forest green</option>
                  <option value="elegant">lush neon</option>
                </select>
                <div className="clr-preview"></div>
              </label>
              <label>
                primary page color:
                <select>
                  <option value="classic">vantablack</option>
                  <option value="elegant">pure snow</option>
                  <option value="neutral">charcoal</option>
                  <option value="elegant">buttermilk</option>
                  <option value="modern">indigo blue</option>
                  <option value="elegant">suit blue</option>
                  <option value="elegant">auburn red</option>
                  <option value="elegant">executive red</option>
                  <option value="elegant">forest green</option>
                  <option value="elegant">lush neon</option>
                </select>
                <div className="clr-preview"></div>
              </label>
              <label>
                accent page color:
                <select>
                  <option value="classic">vantablack</option>
                  <option value="elegant">pure snow</option>
                  <option value="neutral">charcoal</option>
                  <option value="elegant">buttermilk</option>
                  <option value="modern">indigo blue</option>
                  <option value="elegant">suit blue</option>
                  <option value="elegant">auburn red</option>
                  <option value="elegant">executive red</option>
                  <option value="elegant">forest green</option>
                  <option value="elegant">lush neon</option>
                </select>
                <div className="clr-preview"></div>
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
