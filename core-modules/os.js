const os = require("os");

console.log(os.userInfo());
console.log("system up time: ", os.uptime());
console.log("OS:", os.platform());
console.log("OS version:", os.release());
console.log("total Memory:", os.totalmem());
console.log("free Memory:", os.freemem());

console.table({
  os: os.platform(),
  version: os.release(),
  totalMemory: os.totalmem(),
});
