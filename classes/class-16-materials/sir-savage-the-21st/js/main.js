//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOneTimes(){
    for(let i=1; i<=21; i++) {
        document.querySelector('#savageSays').innerText += ' 21'
    }
}

twentyOneTimes()
//Bonus can you make it print '21' 21 times to the dom?
