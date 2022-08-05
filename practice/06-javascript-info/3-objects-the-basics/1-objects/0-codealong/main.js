let user = {
    name: 'Adam',
    age: 30,
    isAdmin: true,
}

user['like birds'] = true

// let key = prompt('What do you want to know about the user? "name"/"age"')

// *The following can't be done with the usual dot notation
// console.log(user[key])

// ^console.log(user.key) would throw an error

function addUser(name, age) {
    return { name: name, age: age, }
}

// user = addUser('John', '23')

// console.log(user.name)

// ** IN OPERATOR ** //
// console.log("age" in user)

// ** FOR..IN LOOP ** //

for(let key in user) {
    console.log(`${key}: ${user[key]}`)
}