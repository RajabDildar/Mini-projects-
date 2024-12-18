//DOM Elements
const inputBox = document.querySelector("input");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
let para = document.querySelector("p");
let equalBtn = document.querySelector(".equalBtn");

//initializing operands,operators and calculate operation
let operandOne;
let operandTwo;
let result;
let operation;

const calculate = {
  add: (a, b) => {
    result = a + b;
    inputBox.placeholder = result;
  },
  subtract: (a, b) => {
    result = a - b;
    inputBox.placeholder = result;
  },
  Mul: (a, b) => {
    result = a * b;
    inputBox.placeholder = result;
  },
  Divide: (a, b) => {
    result = a / b;
    inputBox.placeholder = result;
  },
};

//adding event listener to all numbers
numbers.forEach((val) => {
  val.addEventListener("click", (evt) => {
    if (evt.target.innerText === "." && inputBox.value.includes(".")) return;
    inputBox.value += evt.target.innerText;
    if (inputBox.placeholder != "0") {
      inputBox.placeholder = "0";
    }
  });
});

//setting reset conditions
const reset = () => {
  inputBox.value = "";
  para.innerText = "";
  operandOne = undefined;
  operandTwo = undefined;
};

operators.forEach((val) => {
  val.addEventListener("click", (evt) => {
    if (inputBox.value != 0) {
      operandOne = +inputBox.value;
    } else {
      operandOne = +inputBox.placeholder;
    }
    para.innerText = operandOne + evt.target.innerText;
    inputBox.value = "";
    if (evt.target.innerText == "+") {
      operation = "add";
    } else if (evt.target.innerText == "-") {
      operation = "subtract";
    } else if (evt.target.innerText == "*") {
      operation = "Mul";
    } else if (evt.target.innerText == "/") {
      operation = "Divide";
    }
  });
});

equalBtn.addEventListener("click", (evt) => {
  operandTwo = +inputBox.value;
  if (operation === "add") {
    calculate.add(operandOne, operandTwo);
    reset();
  } else if (operation === "subtract") {
    calculate.subtract(operandOne, operandTwo);
    reset();
  } else if (operation === "Mul") {
    calculate.Mul(operandOne, operandTwo);
    reset();
  } else if (operation === "Divide") {
    calculate.Divide(operandOne, operandTwo);
    reset();
  }
  if (inputBox.placeholder == "NaN") {
    inputBox.placeholder = "0";
  }
});

//making AC button functional
document.querySelector(".btnAC").addEventListener("click", (evt) => {
  operandOne = undefined;
  operandTwo = undefined;
  result = undefined;
  operation = undefined;
  inputBox.value = "";
  inputBox.placeholder = "0";
  para.innerText = "";
});

//making DEL button functional
document.querySelector(".btnDEL").addEventListener("click", (evt) => {
  inputBox.value = inputBox.value.slice(0, -1);
});

//maintainig focus on inputBox
document.querySelector("body").addEventListener("click", (evt) => {
  if (!inputBox.focus()) {
    inputBox.focus();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  inputBox.focus();
});
