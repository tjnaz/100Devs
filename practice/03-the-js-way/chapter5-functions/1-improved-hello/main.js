function sayHello(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`
}

const firstName = prompt('Enter your first name:')
const lastName = prompt('Enter your last name:')

alert(sayHello(firstName, lastName))