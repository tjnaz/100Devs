//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn() {
    console.log("ON!");
  }
  steam() {
    console.log("STEAM!!");
  }
  brew() {
    console.log("IT'S BREWING TIME!!");
  }
}

let gaggia = new EspressoMachine("red", "Gaggia", "Classic Pro", 400);
