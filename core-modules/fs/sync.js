console.log("start file");
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./data/first.txt", "utf8");
const second = readFileSync("./data/second.txt", "utf8");

// console.log(first, second);
// console.log(`${first} from ${second}`);

const title = "My new file";

writeFileSync("./data/fourth.txt", `this is the fourth file ${title}`, {
  flag: "a",
});
console.log("finish reading");

console.log("end file");
