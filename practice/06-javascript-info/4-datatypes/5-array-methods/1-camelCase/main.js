function camelize(str) {
    // let splitStr = str.split('-')
    // let capitalizeStr = splitStr.map((item,index)=> index>0? item[0].toUpperCase() + item.substring(1) : item)

    // return capitalizeStr.join('')
    return (str.split('-').map((item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item)).join('')
}

console.log(camelize("how-are-you-wanker"))