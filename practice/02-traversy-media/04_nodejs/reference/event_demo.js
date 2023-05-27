// const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Initialise the object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => console.log("event fired"));

// Initialise the event
myEmitter.emit("event");
