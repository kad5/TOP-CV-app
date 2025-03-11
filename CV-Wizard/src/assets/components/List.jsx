import { useState, useEffect } from "react";
import useCV from "../utils/context";
import { setNestedValue } from "../utils/setCV";
import Input from "./InputField";

// New separate EditableList component
export default function EditableList({
  className,
  keys,
  initList,
  titleKeys,
  titleInit,
}) {
  const { cvData, setCvData } = useCV();
  const [localList, setLocalList] = useState(initList);

  // Sync local state with prop changes
  useEffect(() => {
    setLocalList(initList);
  }, [initList]);

  const addItem = () => {
    const newList = [...initList, "New Item"];
    setLocalList(newList);
    setCvData((prev) => setNestedValue(prev, keys, newList));
  };

  const deleteItem = (index) => {
    const newList = initList.filter((_, i) => i !== index);
    setLocalList(newList);
    setCvData((prev) => setNestedValue(prev, keys, newList));
  };

  return (
    <div className={`editable-list ${className}`}>
      {/* Title using original Input */}
      <Input
        className="list-title"
        keys={titleKeys}
        init={titleInit}
        primary={true}
      />

      {/* List items */}
      <ul>
        {localList.map((item, index) => (
          <li key={index} className="list-item-wrapper">
            <Input className="list-item" keys={[...keys, index]} init={item} />
            <button className="delete-btn" onClick={() => deleteItem(index)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {/* Add button */}
      <button className="add-btn" onClick={addItem}>
        ➕ Add Item
      </button>
    </div>
  );
}
