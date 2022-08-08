// **COPYING OBJECT ** //

let user = { name: 'john' }

let admin = user

console.log(admin.name)
console.log(user.name)

admin.name = 'Adam'
console.log(admin.name)
console.log(user.name)

let user2 = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user2) {
    clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user2.name); // still John in the original object


let user3 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }