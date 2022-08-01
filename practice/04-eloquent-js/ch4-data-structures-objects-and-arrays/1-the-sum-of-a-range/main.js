let numbers = []

function range(startNum, endNum, step) {
    for (let i = startNum; i <= endNum; i += step) {
        numbers.push(i)
    }
    return numbers
}

function sum(number) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum
}


// console.log(sum(range(1, 15)))
console.log(range(1, 15, 3))