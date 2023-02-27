//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class GuardDog extends Dog {
  constructor(name, breed, hunt) {
    super(name, breed);
    this.hunt = hunt;
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows`);
  }
}

let simba = new Dog("Simba", "Sheperd");
let wolf = new GuardDog("Loney", "Wolf", "Lions");
let polly = new Cat("Polly", "Street");
