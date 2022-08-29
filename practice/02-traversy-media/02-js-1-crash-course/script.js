// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.hobbies[1])

// const {firstName, lastName} = person

// console.log(person)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Going out',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Drink another cup of coffee',
        isCompleted: false
    }
]

// console.log(todos[1].text, ': ', todos[1].isCompleted)
const todoJSON = JSON.stringify(todos)

console.log(todoJSON)