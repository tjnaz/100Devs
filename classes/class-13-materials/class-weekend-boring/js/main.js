//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

    const day1 = document.querySelector('#day').value
    const day = day1.toLowerCase()

    if (day === "tuesday" || day === "thursday") {
        // console.log("YOU HAVE CLASS")
        return document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
    } else if (day === "saturday" || day === "sunday") {
        return document.querySelector('#placeToSee').innerText = "'tis The Weekend"
        //   console.log("Its The Weekend")
    } else {
        return document.querySelector('#placeToSee').innerText = "BORING"
        // console.log("BORING")
    }

}
