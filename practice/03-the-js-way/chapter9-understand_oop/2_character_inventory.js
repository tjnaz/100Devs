console.log("hello");
// --- ************ --- //
// --- [2023-03-10] --- //
// --- ************ --- //

// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md#character-inventory
// Character inventory

// Improve the example RPG to add character inventory management according to the following rules:

//A character's inventory contains a number of gold and a number of keys.

//Each character begins with 10 gold and 1 key.

//The character description must show the inventory state.

//When a character slays another character, the victim's inventory goes to its vanquisher.

// Here's the expected execution result.

// Execution result
// https://github.com/thejsway/thejsway/blob/master/manuscript/images/chapter09-04.png

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always 0 for new characters
  }

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacious = new Character("Glacious", 130, 30);

console.log(aurora.describe());
console.log(glacious.describe());
