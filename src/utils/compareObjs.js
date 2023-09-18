export const compareObjs = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (obj1 == null || obj2 == null) return false;

  if (String(obj1) == "NaN" || String(obj2) == "NaN") {
    return String(obj1) === String(obj2);
  } else if (obj1.toFixed || obj2.toFixed) {
    return obj1 === obj2;
  }

  // For date, string, symbol, function and promises -> promise and date is also function
  const specials = ["function", "symbol", "string"];
  if (specials.includes(typeof obj1) || specials.includes(typeof obj2)) {
    return String(obj1) === String(obj2);
  }

  const keys1 = String(Object.keys(obj1));
  const keys2 = String(Object.keys(obj2));
  if (keys1 !== keys2) return false;

  for (const key of Object.keys(obj1)) {
    if (!compareObjs(obj1[key], obj2[key])) return false;
  }

  return true;
};
