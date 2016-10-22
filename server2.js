var http = require("http");
var fs = require('fs');

var text = fs.readFileSync('index.html', 'utf8');
console.log("Start >:)");
console.log(text);

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(text);
  response.end();
}).listen(8888);
