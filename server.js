const express = require("express");
const server = express();
const usersRouter = require("./usres/usersRouter.js");
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h2> Hello </h2>");
});

server.use("/users", usersRouter);

module.exports = server;
