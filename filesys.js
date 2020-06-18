const ourFs = require("fs");
const ourPath2 = require("path");

const createFolder = ourFs.mkdir(
  ourPath2.join(__dirname, "/html"),
  {},
  (error) => {
    if (error) {
      console.log("Error encountered creating Folder");
    } else {
      console.log("Folder Created successfully!");
    }
  }
);
console.log(createFolder);

const createFile = ourFs.writeFile(
  ourPath2.join(__dirname, "/html", "index.html"),
  "<h1>It worked</h1>",
  (error) => {
    if (error) {
      console.log("File not created");
    } else {
      console.log("file created");
    }
  }
);
console.log(createFile);
