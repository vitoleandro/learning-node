var http = require('http');
var fs   = require('fs');

var server = http.createServer(function(request, response) {
  // __dirname return the directory root from application
  fs.readFile(__dirname + '/index.html', function (err, html) {
    response.writeHeader(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
  });
});

server.listen(3000, function() {
  console.log('personal page start !');
});
