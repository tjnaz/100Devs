// TODO I want to find out how to display the original number along with whether it's odd or even
function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else if (num < 0) {
    return `Only whole numbers are acceptable`;
  }
  return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
