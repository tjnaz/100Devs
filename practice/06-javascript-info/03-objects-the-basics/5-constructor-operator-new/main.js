function addUser(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new addUser("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

