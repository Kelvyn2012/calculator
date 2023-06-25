const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");

let numOne = "";
let num2 = "";
let operator = "";
let screenNumbers = [];

btn.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    const btnClicked = e.target.value;
    if (btnClicked) {
      screen.textContent = screen.textContent + e.target.value;
      operate();
    }
  });
  
});

function calculate(num1, operator, num2) {
  result = "";
  if (operator === "add") {
    addition();
  } else if (operator === "subtract") {
    subtration();
  } else if (operator === "divide") {
    multiplication();
  } else if (operator === "multiply") {
    division();
  }
  return result;
}
function addition(num1, num2) {
  return num1 + num2;
}
function subtration(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 + num2;
}

function division(num1, num2) {
  return num1 + num2;
}
console.log(operate(5 + 8));

btn.forEach((btns) => {
  btns.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
  });
});
