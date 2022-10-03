const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * Math.abs(max - min) + Math.min(min, max));


const checkStringLength = (checkedString, maxLength) =>
  checkedString.length <= maxLength;


console.log(getRandomNumber(10, 20));
console.log(checkStringLength('word', 5));
