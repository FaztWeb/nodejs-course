const { createReadStream } = require("fs");

const stream = createReadStream("./bigFile.txt", {
  highWaterMark: 90000,
  encoding: "utf8"
});

stream.on("data", (chunk) => {
  // console.log(chunk.length);
  console.log(chunk.toString());
  // console.log(chunk)
});

stream.on("end", () => {
  console.log("end");
});

stream.on("error", (err) => {
  console.log(err);
});
