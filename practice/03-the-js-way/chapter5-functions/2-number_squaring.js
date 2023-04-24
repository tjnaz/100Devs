function square1(x) {
    return x * x
}

const square2 = x => x * x
console.log('Function #1')
console.log(square1(0))
console.log(square1(2))
console.log(square1(5))

console.log('Function #2')
console.log(square2(0))
console.log(square2(2))
console.log(square2(5))

console.log('Loop')
for (let i = 1; i < 10; i++) {
    console.log(square2(i))
}