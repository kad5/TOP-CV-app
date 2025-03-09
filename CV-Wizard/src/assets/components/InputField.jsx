import { useState, useRef, useEffect } from "react";
import useCV from "../utils/context";
import { setNestedValue } from "../utils/setCV";

export default function EditableSpan({
  className,
  keys,
  init,
  primary = false,
}) {
  const [value, setValue] = useState(init);
  const [oldValue, setOldValue] = useState(init);
  const [isActive, setIsActive] = useState(false);
  const { cvData, setCvData } = useCV();
  const spanRef = useRef(null);
  const isInitialRender = useRef(true);

  // Only update the span content when toggling edit mode
  useEffect(() => {
    if (!isInitialRender.current && spanRef.current) {
      if (isActive) {
        spanRef.current.innerText = value;
      }
    }
    isInitialRender.current = false;
  }, [isActive]);

  function handleInput(e) {
    setValue(e.target.innerText);
  }

  function enableEdit() {
    setIsActive(true);
    // Focus happens after state update
    setTimeout(() => {
      if (spanRef.current) {
        spanRef.current.focus();
      }
    }, 0);
  }

  function cancelEdit() {
    setIsActive(false);
    setValue(oldValue);
  }

  function submitValue() {
    if (spanRef.current) {
      const newValue = spanRef.current.innerText;
      setValue(newValue);
      setOldValue(newValue);
      setCvData((prev) => setNestedValue(prev, keys, newValue));
    }
    setIsActive(false);
  }

  // Handle key presses
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      submitValue();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  }

  return (
    <div
      style={{
        color: primary
          ? cvData.styles.primaryFontClr
          : cvData.styles.secondaryFontClr,
        fontFamily: primary
          ? cvData.styles.primaryFontStyle
          : cvData.styles.secondaryFontStyle,
      }}
      className={`inp-wrapper ${className}`}
    >
      <span
        ref={spanRef}
        contentEditable={isActive}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
        className={isActive ? "editing" : ""}
        dangerouslySetInnerHTML={!isActive ? { __html: value } : undefined}
      >
        {isActive ? null : null}
      </span>
      <div className="ctrls">
        {!isActive && <button onClick={enableEdit}>✍️</button>}
        {isActive && (
          <>
            <button onClick={submitValue}>✅</button>
            <button onClick={cancelEdit}>✖️</button>
          </>
        )}
      </div>
    </div>
  );
}
