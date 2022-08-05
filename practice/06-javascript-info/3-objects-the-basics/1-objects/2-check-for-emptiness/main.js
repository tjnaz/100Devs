function isEmpty(obj) {
    for(let key in obj) {
        return false
    }
    return true
}

let obj1 = {something: 'something'}

console.log(isEmpty(obj1))