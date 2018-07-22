const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log(url);
  const objectUrl = url.parse(req.url);
  console.log(objectUrl);
  console.log('Pathname:', objectUrl.pathname);
  console.log('Path:', objectUrl.path);
  console.log('Query:', objectUrl.query);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Request Received</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
