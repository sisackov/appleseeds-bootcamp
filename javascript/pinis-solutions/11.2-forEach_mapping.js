//------------------------------------------ First assignmet ----------------------------------------------------

function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    newArr.push(value * 2);
  });
  return newArr;
}

//------------------------------------------ Second assignmet ----------------------------------------------------

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    if (value % 2 === 0) {
      newArr.push(value);
    }
  });
  return newArr;
}

//------------------------------------------ Third assignmet ----------------------------------------------------

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (value) {
    if (typeof value === "string") {
      newArr.push(value[0] + value[value.length - 1]);
    }
  });
  return newArr;
}

//------------------------------------------ Fourth assignmet ----------------------------------------------------

function vowelCount(str) {
  let splitArr = str.toLowerCase().split("");
  let obj = {};
  let vowels = "aeiou";

  splitArr.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}

//------------------------------------------ Fifth assignmet ----------------------------------------------------

function capitalize(string) {
  console.log(string);
  return string
    .split("")
    .map((letter) => {
      return letter.toUpperCase();
    })
    .join("");
}

//------------------------------------------ Sixth assignmet ----------------------------------------------------

function shiftLetters(string) {
  return string
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter) => {
          return String.fromCharCode(letter.charCodeAt() + 1);
        })
        .join("");
    })
    .join(" ");
}

//------------------------------------------ Seventh assignmet ----------------------------------------------------

function swapCase(string) {
  return string
    .split(" ")
    .map((word, index) => {
      return index % 2 === 0 ? capitalize(word) : word;
    })
    .join(" ");
}
