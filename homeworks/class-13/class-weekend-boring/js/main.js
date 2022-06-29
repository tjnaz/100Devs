document.querySelector('#check').onclick = check

function check() {

    const day = document.querySelector('#day').value
    let upperDay = day.toUpperCase()

    //Conditionals go here
    if(upperDay === 'TUESDAY' || upperDay === 'THURSDAY') {
        return document.querySelector('#placeToSee').innerHTML = "class day!!!"
    } else if (upperDay === 'SATURDAY' || upperDay === 'SUNDAY'){
        return document.querySelector('#placeToSee').innerHTML = "Weekend!!! Yahoo!!!"
    }

    return document.querySelector('#placeToSee').innerHTML = "Borrriinnnggg!!!"

}
