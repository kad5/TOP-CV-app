import { useState, Fragment } from "react";
import useCV from "../utils/context";
import Rows from "./Rows";
import Para from "./Para";
import { setNestedValue } from "../utils/setCV";
import { listItem } from "../utils/draft";

export default function Block({ parent, obj }) {
  const { cvData, setCvData } = useCV();
  const themeArray = ["compact", "standard", "detailed"];
  function switchTheme() {
    const currentStyle = themeArray.indexOf(obj.mode);
    const newStyle = themeArray[(currentStyle + 1) % 3];
    const keys = ["body", parent, "mode"];
    setCvData((prev) => setNestedValue(prev, keys, newStyle));
  }
  function deleteBlock() {
    const keys = ["body", parent];
    setCvData((prev) => setNestedValue(prev, keys, null));
  }
  function deleteList(index) {
    const keys = ["body", parent, "content", index];
    setCvData((prev) => setNestedValue(prev, keys, null));
  }
  function addNewCont(parentIndex) {
    const newCont = listItem();

    setCvData((prevData) => {
      const updatedBody = [...prevData.body];
      const parentObject = { ...updatedBody[parentIndex] };
      parentObject.content = [...parentObject.content, newCont];
      updatedBody[parentIndex] = parentObject;
      return {
        ...prevData,
        body: updatedBody,
      };
    });
  }
  return (
    <div className={`b-block ${obj.mode}`}>
      <button onClick={switchTheme} className="b-block-theme">
        style: {obj.mode}
      </button>
      <button onClick={deleteBlock} className="b-block-delete">
        ❌
      </button>
      <Para
        className={"block-title"}
        keys={["body", parent, "title"]}
        init={obj.title}
      ></Para>
      <div>
        {obj.type === "para" ? (
          <Para
            className={"block-para"}
            keys={["body", parent, "content", 0]}
            init={obj.content[0]}
          ></Para>
        ) : (
          <>
            {obj.content.map((b, index) => {
              if (b === null) return;
              return (
                <Fragment key={index}>
                  <div className="block-top">
                    <button
                      onClick={() => deleteList(index)}
                      className="b-list-delete"
                    >
                      ❌
                    </button>
                    <Para
                      keys={["body", parent, "content", index, "title"]}
                      init={b.title}
                    ></Para>{" "}
                    -
                    <Para
                      keys={["body", parent, "content", index, "subtitle"]}
                      init={b.subtitle}
                    ></Para>
                  </div>
                  <Para
                    className={"block-summary"}
                    keys={["body", parent, "content", index, "summary"]}
                    init={b.summary}
                  ></Para>
                  <div className="block-list">
                    <Rows
                      className="body-block-list"
                      keys={["body", parent, "content", index, "body"]}
                      list={b.body}
                    ></Rows>
                  </div>
                </Fragment>
              );
            })}
            <button onClick={() => addNewCont(parent)}>
              Add new list container➕
            </button>
          </>
        )}
      </div>
    </div>
  );
}
