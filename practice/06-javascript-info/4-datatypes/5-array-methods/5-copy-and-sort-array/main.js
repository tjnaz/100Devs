function copySorted(arr) {
    return arr.slice().sort()
}

let arr = ['I', 'learn', 'fix', 'excel', 'win', 'study', 'complex', 'language', 'study']

let sorted = copySorted(arr)

console.log(sorted)
console.log(arr)