const express = require("express");
const server = express();
const expressWs = require("express-ws")(server);
const port = 4000;
const massa = [];

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.get("/client.js", (req, res) => {
  res.sendFile(__dirname + "/client.js");
});

server.ws("/", function(ws, req) {
  ws.on("message", function(msg) {
    massa.push(msg);
    console.log(massa);
    ws.send("message", msg);
  });

  console.log("socket", req.testing);
});

//

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
