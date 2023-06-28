const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked AGAIN after reinstalling Express!");
  console.log("Logging a get request");
});

app.get("/parameters/:routeParamName", (request, response) => {
  response.send(`Your route parameter is: ${request.params.routeParamName}`);
});

app.listen(3000);
