let word = prompt("Type a word:")
let wordList = []
while(word !== "stop") {
    wordList.push(word)
    word = prompt("Type a word")
}

console.log(wordList)