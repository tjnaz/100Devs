//  * First try solution
// let triangle = ''

// for (let i = 1; i <= 7; i++) {
//     // console.log(triangle += '#')
//     document.querySelector('body').innerHTML += `<p>${triangle += '#'}`
// }

// * Solution after going through the solution from the book

for(let i = '#'; i.length <= 7; i+='#') {
    console.log(i)
}