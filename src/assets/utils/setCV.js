export function setNestedValue(obj, keys, value) {
  const lastKey = keys[keys.length - 1];
  let nestedObj = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!nestedObj[key]) return obj; // Invalid path, return original
    nestedObj = nestedObj[key]; // Go deeper
  }

  // Handle arrays correctly
  if (Array.isArray(nestedObj) && !isNaN(lastKey)) {
    nestedObj[Number(lastKey)] = value;
  } else {
    nestedObj[lastKey] = value;
  }

  return { ...obj }; // Ensure React detects changes
}
