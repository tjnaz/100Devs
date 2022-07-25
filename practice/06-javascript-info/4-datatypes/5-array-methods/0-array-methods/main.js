let arr = ['I', 'study', 'complex', 'language', 0, 1, 2, 3, 'study', NaN]
console.log(arr)


//! ** ADD/REMOVE ITEMS FROM THE ARRAY ** !//

// *SPLICE()
// arr.splice(arr.length, 0, 'when', 'the', 'sun', 'rises')

// *SLICE()
// arr.slice(-3,-1)
// console.log(arr.slice(-3, arr.length))

// ^This makes a copy of the array and doesn't affect the original array
// let slicedArr = arr.slice()
// slicedArr.pop()
// console.log(slicedArr)

// ^This makes a copy of the array BUT, whatever happens to the copy also applies to the original array
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


//! ** ITERATE ** !//

// *FOREACH()
// let lotr = ["Bilbo", "Gandalf", "Nazgul"]
arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in [${array}]`)
})


//! ** SEARCH ARRAY ** !//

// *INDEXOF() && INCLUDES()
console.log(arr.indexOf('sutdy')) // returns -1
console.log(arr.indexOf('study')) // returns 1
console.log(arr.indexOf(0)) // returns 4
console.log(arr.indexOf(NaN)) // returns -1 which is wrong

console.log(arr.includes(0)) // returns true
console.log(arr.includes('0')) // returns false
console.log(arr.includes(NaN)) // returns true, which is correct


// *LASTINDEXOF()
console.log(arr.lastIndexOf('study')) // returns 8
console.log(arr.lastIndexOf(NaN)) // returns 8


// *FIND(), FINDINDEX(/FINDLASTINDEX()
let users = [
    { id: 1, name: "John", addres: "NYC" },
    { id: 2, name: "Tom", addres: "MI" },
    { id: 3, name: "Rick", addres: "BO" },
]

let user = users.find(item => item.id == 1)
console.log(user.addres)

console.log(users.findIndex(item => item.id == 3))

// *FILTER()
console.log(users.filter(item => item.id <= 3))



//! ** TRANSFORM ARRAY ** !//

// *MAP()
console.log(arr.map(item => typeof (item) === 'number' ? item * 2 : item))

// *SORT()
let arr5 = [1, 5, 6, 2, 5]
console.log(arr5.sort((a, b) => a - b))
// console.log(a + "<>" + b)

console.log(arr5)