const printToScreen = (str) => {
  return console.log(str);
};
//high order function
const isString = (str, callback) => {
  if (typeof str === "string") {
    callback(str);
  } else {
    console.log("not a string");
  }
};
isString("hello", printToScreen);

const string = "JavaScript is the best";

const firstWordUpperCase = (str, callback) => {
  const [first, ...rest] = str.split(" ");
  const result = [first.toUpperCase(), ...rest].join(" ");
  if (typeof callback === "function") {
    return callback(result);
  } else {
    return;
  }
};
const stringWithDashes = (str) => {
  return str.split(" ").join("-");
};
const stringWithExplanationMark = (str) => {
  return str + "!";
};
console.log(firstWordUpperCase(string, stringWithDashes));
console.log(firstWordUpperCase(string, stringWithExplanationMark));
