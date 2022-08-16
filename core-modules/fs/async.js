console.log("start file");
const { readFile, writeFile } = require("fs");

readFile("./data/first.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  // console.log(data.toString());

  readFile("./data/second.txt", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(data.toString());

    writeFile(
      "./data/fourth.txt",
      `this is the fourth file ${data}`,
      {
        flag: "a",
      },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("finish writing");
      }
    );
  });
});

console.log("end file");
