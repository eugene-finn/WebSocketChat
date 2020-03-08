var http = require("http"),
  fs = require("fs");

const hostname = 'localhost';
const port = 3000;

fs.readFile("./index.html", function(err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function(req, res) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    })
    .listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
});
