let white = '=='
let black = '##'
let row = ''

const irowInput = Number(prompt("Enter number of rows:"))
const columnInput = Number(prompt("Enter number of columns:"))

for (let irow = 1; irow <= irowInput; irow++) {
    row = ''
    if (irow % 2 !== 0) {
        for (column = 1; column <= columnInput; column++) {
            if (column % 2 !== 0) {
                row += white
            } else {
                row += black
            }
        }
        console.log(row)
    } else {
        for (column = 1; column <= columnInput; column++) {
            if (column % 2 === 0) {
                row += white
            } else {
                row += black
            }
        }
        console.log(row)
    }
}