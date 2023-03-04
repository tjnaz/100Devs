// *My Solution* //
function filterRange(arr, a, b) {
    let arr2 = []
    arr.filter(item => item >= a && item <= b ? arr2.push(item) : null)
    return arr2
}


let arr = [10, 15, 100, 150, 5000]

console.log(filterRange(arr, 13, 200))


// *PROVIDED ELEGANT SOLUTION TRIED AND UNDERSTOOD*/

function filterRange2(arr, a, b) {
    arr.filter(item => a <= item && b >= item)
}

let filteredArray = filterRange(arr, 13, 200)
console.log(filteredArray)