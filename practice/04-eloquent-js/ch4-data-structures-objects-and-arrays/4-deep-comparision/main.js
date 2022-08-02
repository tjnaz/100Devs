let input1 = {
    id: 1,
    name: 'none'
}

let input2 = {
    id: 2,
    name: 'someone'
}


function deepEqual(input1, input2) {
    if (typeof (input1) === 'object' && typeof (input2) === 'object') {
        if (Object.keys(input1).length !== Object.keys(input2).length) {
            return false
        }
    }
}

console.log(Object.keys(input1))

if (Object.keys(input1).length === Object.keys(input2).length) {
    console.log('it works')
    console.log(Object.keys(input1)[0])
    console.log(Object.keys(input2)[0])
}