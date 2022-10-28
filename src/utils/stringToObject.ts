// formato => name=home, Type=solid
export function stringToObject(string: string) {
  const newObject: object = {};
  const _string: string = string.toLowerCase().replace(/[\\"]/g, "");

  if (!string.includes(",") && !string.includes("="))
    throw `String invalid, a string must include "=" to define a property`;

  if (!string.includes(",")) {
    const [key, value] = _string.split("=");

    newObject[key] = value;

    return newObject;
  }

  if (string.includes(",")) {
    _string.split(",").map((s) => {
      const clearString = s.trim();
      const [key, value] = clearString.split("=");

      if (typeof newObject[key] !== "undefined")
        throw `String invalid, string contains more than one property: ${key}`;

      newObject[key] = value;
    });

    return newObject;
  }
}
