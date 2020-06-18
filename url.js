//url can be called without import(require)
const myURL = new URL(
  "http://migrant-solutions.com:3000/index.html?id=10&status=active"
);

const mypathname = myURL.pathname;
console.log(mypathname);

const rootDomain = myURL.host;
console.log(rootDomain);

const serialURL = myURL.toString();
console.log(serialURL);

const myHostName = myURL.hostname;
console.log(myHostName);

const ourParams = myURL.searchParams;
console.log(ourParams);
