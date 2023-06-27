const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked AGAIN!");
  console.log("Logging a get request");
});

app.listen(3000);
