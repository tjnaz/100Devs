// https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth
// function camelize(str) {
//     // let splitStr = str.split('-')
//     // let capitalizeStr = splitStr.map((item,index)=> index>0? item[0].toUpperCase() + item.substring(1) : item)

//     // return capitalizeStr.join('')
//     return (str.split('-').map((item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item)).join('')
// }

// --- ************ --- //
// --- [2023-03-05] --- //
// --- ************ --- //

// Translate border-left-width to borderLeftWidth
// importance: 5

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

// ARROW FUNCTION SYNTAX
let camelize = (str) =>
  str.split("-").map((item, index) =>
    index > 0 ? item[0].toUpperCase() + item.slice(1) : item
  ).join("");

// REGULAR FUNCTION SYNTAX
// function camelize(str) {
//   return str.split("-").map((item, index) =>
//     index > 0 ? item[0].toUpperCase() + item.slice(1) : item
//   ).join("");
// }

console.log(camelize("hello-how-are-you"));
