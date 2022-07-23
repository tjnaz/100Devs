let arr = ['I', 'study', 'complex', 'language']

// *SPLICE()
// arr.splice(arr.length, 0, 'when', 'the', 'sun', 'rises')

// *SLICE()
// arr.slice(-3,-1)
// console.log(arr.slice(-3, arr.length))

// !This makes a copy of the array and doesn't affect the original array
// let slicedArr = arr.slice()
// slicedArr.pop()
// console.log(slicedArr)

// !This makes a copy of the array BUT, whatever happens to the copy also applies to the original array
// let nonslicedArr = arr
// nonslicedArr.pop()
// console.log(nonslicedArr)

// *CONCAT()

let arrayLike = {
    0: "something",
    1: "is it becase that was a number?",
    [Symbol.isConcatSpreadable]: true,
    length: 3
}

console.log(arr.concat(arrayLike))

console.log(arr)

let lotr = ["Bilbo", "Gandalf", "Nazgul"]
lotr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in [${array}]`)
})