const express = require("express")
const app = express()

app.get("/", (request, response) => {
  response.send("It worked AGAIN!")
})

app.listen(3000)
