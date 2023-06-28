const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked AGAIN after reinstalling Express!");
  console.log("Logging a get request");
});

const identifyRouteParameter = (request, response) => {
  response.send(`Your route parameter is: ${request.params.routeParamName}`);
};

const identifyQueryParameter = (request, response) => {
  response.send(
    `The value of query parameter 'queryParamName' is: ${request.query.queryParamName}`
  );
};

// URL https://4wfhgh-3000.csb.app/routeparameters/1234
app.get("/routeparameters/:routeParamName", identifyRouteParameter);

// URL https://4wfhgh-3000.csb.app/queryparameters?queryParamName=346
app.get("/queryparameters", identifyQueryParameter);

app.listen(3000);
