//Create a pizza object that has four properties and three methods
let pizza = {};

pizza.size = "large";
pizza.topping = "beef macaroni";
pizza.slices = 12;
pizza.crust = "stuffed crust";

pizza.delivery = function () {
  console.log("calculating....");
};
pizza.burnMouth = function () {
  console.log("aarrgggggg!!!!!");
};
pizza.frisbee = function () {
  console.log("yeeeeeertttttt!!!");
};

console.log(pizza.size);
pizza.delivery();
