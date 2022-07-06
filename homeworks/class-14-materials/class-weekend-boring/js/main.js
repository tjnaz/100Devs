//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

    const inputDay = document.querySelector('#day').value
    const day = inputDay.toLowerCase()

    if (day === "tuesday" || day === "thursday") {
        // console.log("YOU HAVE CLASS")
        document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
    } else if (day === "saturday" || day === "sunday") {
        // console.log("Its The Weekend")
        document.querySelector('#placeToSee').innerText = "It's The Weekend"
    } else {
        // console.log("BORING")
        document.querySelector('#placeToSee').innerText = "BORING"
    }
}
