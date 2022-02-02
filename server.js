const http = require('http');
const fs = require('fs')

const requestListener = function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream("index.html").pipe(res)
}

const server = http.createServer(requestListener);
server.listen(8888);