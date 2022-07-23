const values = [3, 11, 7, 2, 9, 10]
let sum = 0

//* Using for loop
// for (i = 0; i < values.length; i++) {
//     sum += values[i]
// }

//* Using forEach method
// values.forEach(num => sum += num)

//* Using *for* *of* method
for (const num of values) {
    sum += num
}

console.log(sum)