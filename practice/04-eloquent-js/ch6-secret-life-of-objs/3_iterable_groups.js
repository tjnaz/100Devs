// --- ************ --- //
// --- [2023-03-21] --- //
// --- ************ --- //

// Iterable groups
// https://eloquentjavascript.net/06_object.html#i_djD3XDJ27V

// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

// Your code here (and the code from the previous exercise)

class Group {
  // Your code here.
  constructor() {
    // arguments to check
    this.group = [];
  }

  has(value) {
    // checks for the value
    return this.group.includes(value);
  }

  add(value) {
    // checks to see if the passed value exists if not add it to the array
    !this.has(value) && this.group.push(value);
  }

  delete(value) {
    // performs a check to see the value exists before deleting
    this.has(value) && this.group.splice(this.group.indexOf(value), 1);
  }

  static from(obj) {
    let newGroup = new Group();
    for (let item of obj) {
      newGroup.add(item);
    }
    return newGroup;
  }
}

// This is GroupIterator class built from scratch
class GroupIterator {
  constructor(obj) {
    this.index = 0;
    this.group = obj.group;
  }

  next() {
    if (this.index == this.group.length) return { done: true };

    const value = this.group[this.index];
    this.index++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

// → a
// → b
// → c
