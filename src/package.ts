import fs from "fs";
import path from "path";

const packageEntry = path.resolve("package.json");
const packageEnd = path.resolve(
  "package/umbrella-icons-library/" + "package.json"
);

fs.readFile(packageEntry, "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const packageJSON = JSON.parse(jsonString);
    packageJSON.scripts = {};
    const json = JSON.stringify(packageJSON);

    fs.writeFile(packageEnd, json, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
