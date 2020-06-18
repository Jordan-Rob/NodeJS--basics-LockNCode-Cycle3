const express = require("express");
const ourPath = require("path");
const ourFs = require("fs");

const app = express();

/*
app.get("/", (request, response) => {
  response.send("<h2>Response made</h2>");
});

app.get("/about", (request, response) => {
  ourFs.readFile(ourPath.join(__dirname, "about.html"), (error, data) => {
    response.writeHead(200, { "content-type": "text/html" });
    response.send("about.html");
  });
});
*/

app.use(express.static(ourPath.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("server is running");
});
