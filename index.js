const server = require("./server.js");

const PORT = process.env.PORT || 2019;

server.listen(PORT, () => {
  console.log("running on port 2019");
});
