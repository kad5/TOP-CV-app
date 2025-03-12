import { useState, useEffect } from "react";
import useCV from "../utils/context";
import { setNestedValue } from "../utils/setCV";

export default function Para({ className, keys, init, primary = false }) {
  const [value, setValue] = useState(init);
  const [oldValue, setOldValue] = useState(init);
  const [isActive, setIsActive] = useState(false);
  const { cvData, setCvData } = useCV();

  useEffect(() => {
    setValue(init);
    setOldValue(init);
  }, [init]);

  function handleInput(e) {
    setValue(e.target.value);
  }

  function enableEdit() {
    setIsActive(true);
  }

  function cancelEdit() {
    setIsActive(false);
    setValue(oldValue);
  }

  function submitValue() {
    setIsActive(false);
    setOldValue(value);
    setCvData((prev) => setNestedValue(prev, keys, value));
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
      {isActive && <input value={value} onChange={handleInput} />}
      {!isActive && <p>{value}</p>}
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
