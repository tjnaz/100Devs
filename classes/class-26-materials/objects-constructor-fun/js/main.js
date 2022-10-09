//Create a constructor with 4 properties and 3 methods

function MakeObject(prop1, prop2, prop3, prop4) {
  this.prop1 = prop1;
  this.prop2 = prop2;
  this.prop3 = prop3;
  this.prop4 = prop4;

  this.honk = function () {
    console.log("honk honk!!");
  };
  this.open = function () {
    console.log(`prop1: ${prop1}`);
  };
  this.close = function () {
    console.log(`prop3 and prop4: ${prop3}, ${prop4}`);
  };
}

let car1 = new MakeObject("car", "door", "hood", "mirrors");

console.log(car1.open());

function MakePizza(size, crust, slices, topping) {
  this.size = size;
  this.crust = crust;
  this.slices = slices;
  this.topping = topping;

  this.cutSlices = function () {
    console.log(`Cut ${this.size} size pizza into ${this.slices} slices`);
  };

  this.delivery = function () {
    console.log(`Deliver this ${this.topping} to the customer`);
  };

  this.charge = function () {
    switch (size) {
      case "small":
        console.log(`The cost for ${this.size} is $1.50`);
        break;
      default:
        console.log(`Any pizza other than small is $2.00`);
        break;
    }
  };
}

let pepporoniPizza = new MakePizza("large", "stuffed", 12, "beer pepporoni");

console.log(pepporoniPizza.charge());
