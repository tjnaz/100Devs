let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}


for (let key in menu) {
    if (typeof (menu[key]) === 'number') {
        // console.log(`works`)
        menu[key] = menu[key] * 2
        console.log(menu[key])
    }
}

console.log(menu)