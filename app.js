const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const currentNumberDisplay = document.querySelector(".currentNumberDisplay");
const previousNumberDisplay = document.querySelector(".previousNumberDisplay");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let previousNumber = "";
let currentNumber = "";
let operator = "";

equal.addEventListener("click", () => {
  if (previousNumber != "" && currentNumber != "") {
    calculate();
  }
});
clear.addEventListener("click", reset);

number.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    handleNumbers(e.target.textContent);
  });
});

function handleNumbers(numbers) {
  if (currentNumber.length < 12) {
    currentNumber += numbers;
    currentNumberDisplay.textContent = currentNumber;
  }
}
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  operator = op;
  previousNumber = currentNumber;
  previousNumberDisplay.textContent = previousNumber + "" + operator;
  currentNumber = "";
  currentNumberDisplay.textContent = "";
}
function calculate() {
  previousNumber = Number(previousNumber);
  currentNumber = Number(currentNumber);
  if (operator === "+") {
    previousNumber = previousNumber + currentNumber;
  } else if (operator === "-") {
    previousNumber = previousNumber - currentNumber;
  } else if (operator === "*") {
    previousNumber = previousNumber * currentNumber;
  } else if (operator === "/") {
    if (currentNumber <= 0) {
      previousNumber = "Error";
      screenDisplay();
    } else {
      previousNumber = previousNumber / currentNumber;
    }
  }

  previousNumber = previousNumber.toString();
  previousNumberDisplay.textContent = "";
  currentNumberDisplay.textContent = previousNumber;
}
function reset() {
  previousNumberDisplay.textContent = "";
  currentNumberDisplay.textContent = "";
  previousNumber = "";
  currentNumber = "";
}
function screenDisplay() {
  if (previousNumber.length <= 11) {
    currentNumberDisplay.textContent = previousNumber;
  } else {
    currentNumberDisplay.textContent = previousNumber.slice(0, 11) + "...";
  }
  currentNumber = "";
  currentNumberDisplay.textContent = "";
  operator = "";
}
function checkOperator(text) {
  text = operator;
  previousNumberDisplay = previousNumber + "" + operator;
  currentNumberDisplay = 0;
  currentNumber = "";
}
