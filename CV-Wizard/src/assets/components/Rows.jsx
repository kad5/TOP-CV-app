import useCV from "../utils/context";
import { setNestedValue } from "../utils/setCV";
import Para from "./Para";
export default function Rows({ className, keys, list, primary = null }) {
  const { setCvData } = useCV();

  function addNew() {
    const value = "new list item";
    const updatedList = [...list, value];
    setCvData((prev) => setNestedValue(prev, keys, updatedList));
  }
  function deleteRow(id) {
    const value = null;
    setCvData((prev) => setNestedValue(prev, id, value));
  }

  return (
    <>
      <div className={className}>
        {list.map((li, index) => {
          if (li === null) return;
          const id = [...keys, index];
          return (
            <li key={index}>
              <Para keys={id} init={li} primary={primary} />
              <button
                className="ctrls-for-delete"
                onClick={() => deleteRow(id)}
              >
                ❌
              </button>
            </li>
          );
        })}
        <button className="ctrls-for-delete" onClick={addNew}>
          Add new list item➕
        </button>
      </div>
    </>
  );
}
