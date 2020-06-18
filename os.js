const mySys = require("os");

const myMemory = mySys.freemem();
console.log(myMemory);

const myMemorySum = mySys.totalmem();
console.log(myMemorySum);

const myPlatform = mySys.platform();
console.log(myPlatform);

const mySysInfo = mySys.cpus();
console.log(mySysInfo);

const myArc = mySys.arch();
console.log(myArc);
