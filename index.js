const inputSlider = document.querySelector("[data-legnthSlider]");
const lengthDisplay = document.querySelector("[data-legnthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generator-button");
const allChechBox = document.querySelector("input[type=checkbox");
const symbols = "~!@#$%^&*()_+/*[]{}-+<>?/";

let password = "";
let passwordLength = 8;
let checkCount = 1;
handleSlider();
//set strength circle color to grey

//set passwordlength

function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerHTML = inputSlider.value;
}

function setindicator(color) {
  indicator.style.backgroundColor = color;
}

function getRandomint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomnumber() {
  return getRandomint(0, 9);
}
function generateLowercase() {
  return String.fromCharCode(getRandomint(97, 123));
}
function generateUppercase() {
  return String.fromCharCode(getRandomint(65, 91));
}
function generateSymbole() {
  const randNum = getRandomint(0, symbols.length);
  return symbols.charAt(randNum);
}
