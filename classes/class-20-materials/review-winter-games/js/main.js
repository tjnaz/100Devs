//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function removeEvenNumbers(arr) {
    let copiedArray = []

    // * for loop
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         copiedArray.push(arr[i])
    //     }
    // }

    // * forEach
    // arr.forEach(element => { if (element % 2 === 0) copiedArray.push(element) })

    // * for OF loop
    for (let item of arr) {
        if (item % 2 === 0) copiedArray.push(item)
    }

    // *Hmmm it seems ok but I wonder whether I could improve on it.
    // arr.map(item => { if (item % 2 === 0) (copiedArray.push(item)) })

    return copiedArray
}

console.log(removeEvenNumbers([5, 6, 5, 1, 3, 100, 81]))