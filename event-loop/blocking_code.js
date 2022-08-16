const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the server");
    return res.end();
  }

  if (req.url === "/about") {
    // blocking code
    console.log("start");
    for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    }

    return res.end("About page");
  }

  res.end(`
    <h1>Not Found</h1>
    <p>The page you are looking for was not found.</p>
    <a href="/">Go back to the home page</a>
  `);
});

server.listen(3000);
console.log("Server is running on port 3000");
