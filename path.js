const myPath = require("path");

const directory = myPath.dirname(__filename);
console.log(directory);

const extName = myPath.extname(__filename);
console.log(extName);

const thisfile = myPath.basename(__filename);
console.log(thisfile);

const newPat = myPath.join(__dirname, "css", "index.css");
console.log(newPat);
