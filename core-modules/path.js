const path = require("path");

console.log(path.sep);

const filePath = path.join("/public", "dist", "/styles/", "main.css");
console.log(filePath);

// just the name of the file
console.log(path.basename(filePath));

console.log(path.extname(filePath));

console.log(path.dirname(filePath));

console.log(path.parse(filePath));

console.log(path.format(path.parse(filePath)));

console.log(path.join("../../dist", "styles", "main.css"));

console.log(path.resolve("../../dist"));
