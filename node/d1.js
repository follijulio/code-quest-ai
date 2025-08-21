  const http = require("http");

  const PORT = 1423;

  http
    .createServer(function (req, res) {
      res.writeHead(200, { "content-type": "text/plain" });

      res.write("Hello World");
      res.end();
    })
    .listen(PORT, function () {
      console.log(`the port ${PORT}`);
    });
