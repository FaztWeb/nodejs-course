const EventEmitter = require("events");

const customEmitter = new EventEmitter();


customEmitter.emit("response", "Hello World");
customEmitter.emit("response", "Hello World 2");
customEmitter.emit("response", "Hello World 3", 30);
customEmitter.emit("response", "Hello World 4", [1, 2, 3]);
customEmitter.on("response", (data, secondParameter) => {
  console.log(data, secondParameter);
});