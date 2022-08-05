let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function addSalaries(obj) {
    let sum = 0
    for (let key in obj) {
        sum += obj[key]
    }
    return sum
}

let salaries2 = {}

console.log(addSalaries(salaries))