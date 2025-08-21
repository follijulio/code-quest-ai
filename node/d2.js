const http = require("http");

const port = 3000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/json" });

    const fulano = req.url;
    if (req.url === "/usuario") {
      console.log(fulano);
      res.write(`Olá, ${fulano}!`);
      res.end();
    } else {
      res.write(`Olá, ${fulano}!`);
      res.end();
    }
  })
  .listen(port);
