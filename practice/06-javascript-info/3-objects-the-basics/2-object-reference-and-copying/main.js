// **COPYING OBJECT ** //

let user = {name: 'john'}

let admin = user

console.log(admin.name)
console.log(user.name)

admin.name = 'Adam'
console.log(admin.name)
console.log(user.name)