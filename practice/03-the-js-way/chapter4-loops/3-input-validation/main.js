let inputNumner = Number(prompt("Enter a number:"))

while (inputNumner > 100 || inputNumner < 50) {
    inputNumner = Number(prompt("Enter a number:"))
}

alert("Successfully escaped!")
