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
const symbols = "~!@#$%^&*(%`':;)_+/*[]{}-+<>?/";

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
function calcStrength() {
  let hasUpper = flase;
  let hasLower = flase;
  let hasNum = flase;
  let hasSym = flase;
  if (uppercaseCheck.checked) hasUpper = true;
  if (lowercaseCheck.checked) hasLower = true;
  if (numberCheck.checked) hasNum = true;
  if (symbolsCheck.checked) hasSym = true;

  if (hasLower && hasUpper && (hasNum || hasSym) && password.length >= 8) {
    setindicator("#0f0");
    console.log("hiii");
  } else if (
    hasLower ||
    (hasUpper && (hasNum || hasSym) && password.length >= 6)
  ) {
    setInterval("#ff0");
  } else {
    setindicator("#f00");
  }
}
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }
  copyMsg.classList.add("active");
  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}
