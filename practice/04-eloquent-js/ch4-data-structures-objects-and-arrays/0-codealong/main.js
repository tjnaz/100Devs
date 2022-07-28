let arr = [1, 2, 3, 4, 5]

console.log(arr["length"])
console.log(arr.length)

let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'runnng'],
    descriptions: {
        name: 'Fuller',
        yes: false,
        no: true
    }
}

console.log(day1.squirrel)
console.log(day1.events[1])
console.log(day1.wolf)

day1.wolf = false
console.log(day1.wolf)

console.log(day1.descriptions)
console.log('name' in day1.descriptions)
console.log(Object.keys(day1))


// TODO Some sort of recursive stuff is going on here. Need to investigate later
// console.log(Object.assign(day1.descriptions, day1))

console.log(typeof day1.events)

let journal = [
    {
        events: ['work', 'touched tree', 'pizza', 'running', 'television'],
        squirrel: false
    },
    {
        events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
        squirrel: false
    },
    {
        events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
        squirrel: true
    }
]

console.log(journal)

const score = { visitors: 0, home: 0 }

//// Yep it throws an error
// score = {visitors: 1, home: 1}

// ^This is okay!
score.visitors += 1
score.home += 4

console.log(score.visitors, score.home)