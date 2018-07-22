const http = require('http'),
  url = require('url'),
  fs = require('fs');

const server = http.createServer((req, res) => {
  const objURL = url.parse(req.url);
  let folderPath = __dirname + '/static' + objURL.pathname;
  if(objURL.pathname === '/') {
    folderPath = __dirname + '/static/index.html';
  }
  fs.stat(folderPath, (err, stats) => {
    if(!err) {
      fs.readFile(folderPath, (err, content) => {
        if(err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error Interno');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(content);
          res.end();
        }
      });
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('<h1>Page Not Found</h1>');
      res.end();
    }
  });
});

server.listen(3000, () => console.log('server is listening on port 3000')); 
