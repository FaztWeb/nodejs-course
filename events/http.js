const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(3000);
console.log("Server is running on port 3000");
