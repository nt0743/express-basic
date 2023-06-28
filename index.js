const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked AGAIN after reinstalling Express!");
  console.log("Logging a get request");
});

app.get("/routeparameters/:routeParamName", (request, response) => {
  response.send(`Your route parameter is: ${request.params.routeParamName}`);
});

// /queryparameters?queryParamName=value
app.get("/queryparameters", (request, response) => {
  response.send(
    `The value of query parameter 'queryParamName' is: ${request.query.queryParamName}`
  );
});

app.listen(3000);
