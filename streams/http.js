const http = require("http");
const fs = require("fs");

const server = http.createServer(async (req, res) => {
  const fileStream = fs.createReadStream("./bigFile.txt", { encoding: "utf8" });
  fileStream.on("open", (chunk) => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    console.log(err);
  });
});

server.listen(3000);
console.log("Server is running on port 3000");
