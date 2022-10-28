import fs from 'fs';
import path from 'path';



fs.readFile(path.resolve("package.json"), "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const customer = JSON.parse(jsonString);
    customer.scripts = {};
    const json = JSON.stringify(customer);
    fs.writeFile(path.resolve("umbrella-icons/"+'package.json'), json, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});