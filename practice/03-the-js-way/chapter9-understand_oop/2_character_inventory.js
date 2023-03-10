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

    this.gold = 10;
    this.key = 1;
  }

  // Attack a target <- "attack()" method takes "target" as the argument
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`,
      );
      target.health -= damage;

      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        const bonusXP = 10;

        this.gold += target.gold;
        this.key += target.key;
        target.health = 0;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key(s)`,
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold, and ${this.key} key(s)`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
