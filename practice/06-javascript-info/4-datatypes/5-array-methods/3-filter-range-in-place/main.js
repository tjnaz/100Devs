
// ! forEach is skipping an index after removing it.
function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1)
            i--
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
filterRangeInPlace(arr, 3, 7)

console.log(arr)