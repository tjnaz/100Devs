function countBs(text) {
    let numOfBs = 0
    for (let i = 0; i <= text.length; i++) {
        if (text[i] === 'B') {
            numOfBs += 1
        }
    }
    return numOfBs
}

function countChar(text, charToBeCounted) {
    let numOfChars = 0
    for (let i = 0; i <= text.length; i++) {
        if (text[i] === charToBeCounted) {
            numOfChars += 1
        }
    }
    return numOfChars
}

console.log(countBs("Blah Blah Blah"))
console.log(countChar("aleena", "a"))
console.log(countChar("anas", "a"))
console.log(countChar("maryam", "a"))