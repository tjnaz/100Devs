//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let sum = 1
function multiplyArrayElements(arr) {
    // * Simple for look
    // for (let i = 0; i < arr.length; i++) {
    //     sum *= arr[i]
    // }

    // * forEach method
    arr.forEach(element => sum *= element)

    // * for OF loop
    // for (let element of arr) {
    //     sum *= element
    // }

    return sum
}

console.log(multiplyArrayElements([5, 10, 3]))