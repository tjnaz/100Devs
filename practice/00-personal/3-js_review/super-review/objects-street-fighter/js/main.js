//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// function MakeStreetFighter(name, age, tribe, height) {
//   this.name = name;
//   this.age = age;
//   this.tribe = tribe;
//   this.height = height;
//   this.yell = function () {
//     alert("HEEYA!!");
//   };
//   this.punch = function () {
//     alert("POW!!");
//   };
//   this.kick = function () {
//     alert("YEEHA!!");
//   };
// }

class MakeStreetFighter {
  constructor(name, age, tribe, height) {
    this.name = name;
    this.age = age;
    this.tribe = tribe;
    this.height = height;
  }
  yell() {
    alert("HEEYA!!");
  }
  punch() {
    alert("POW!!");
  }
  kick() {
    alert("YEEHA!!");
  }
}

let leon = new MakeStreetFighter("Leon", 30, "#100Devs", "6ft");
