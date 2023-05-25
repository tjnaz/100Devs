class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`the name's ${this.name}, ${this.age} old`);
  }
}

module.exports = Person;
