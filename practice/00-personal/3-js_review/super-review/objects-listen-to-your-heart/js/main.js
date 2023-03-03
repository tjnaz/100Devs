//Create a stopwatch object that has four properties and three methods
const stopwatch = {};

stopwatch.brand = "Casio";
stopwatch.color = "Black";
stopwatch.age = 5;
stopwatch.owner = "Me";
stopwatch.start = function () {
  console.log("STARTING!!!");
};
stopwatch.stop = function () {
  console.log("STOP!!!!");
};
stopwatch.tellTime = function () {
  console.log("It's time");
};
