const ourHttp = require("http");
const ourPath = require("path");
const ourFs = require("fs");

/*
const ourServer = ourHttp.createServer((request, response) => {
  response.write("Welcome to payant solutions");
  console.log(request);
  response.end();
});

ourServer.listen(3000, () => {
  console.log("Server running on port 3000");
});

*/

const ourServer = ourHttp.createServer((request, response) => {
  if (request.url === "/") {
    ourFs.readFile(ourPath.join(__dirname, "index.html"), (error, data) => {
      response.writeHead(200, { "content-type": "text/html" });
      response.write(data);
      response.end();
    });
  }
  if (request.url === "/about") {
    ourFs.readFile(ourPath.join(__dirname, "about.html"), (error, data) => {
      response.writeHead(200, { "content-type": "text/html" });
      response.write(data);
      response.end();
    });
  }
});

ourServer.listen(3000, () => {
  console.log("Payant Server is up and running");
});
