function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

let num1 = "";
let num2 = "";
let op = "";

function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    case "%":
      return modulus(a, b);
      break;
    default:
      return;
      break;
  }
}

let result = 0;

const controls = document.getElementById("controls");

let previousDisplay = "";

controls.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const value = e.target.dataset.value;

    if (value === "clear") {
      num1 = "";
      num2 = "";
      op = "";
      updateDisplay(0);
    }

    if (value === "del") {
      if (!op) {
        num1 = num1.slice(0, -1);
        updateDisplay(num1 || "0");
      } else {
        num2 = num2.slice(0, -1);
        updateDisplay(num2 || "0");
      }
    }

    if (!isNaN(value)) {
      if (!op) {
        num1 += value;
        updateDisplay(num1);
      } else {
        num2 += value;
        updateDisplay(num2);
      }
    }

    if (["+", "-", "/", "%", "x"].includes(value)) {
      if (!op) {
        op = value;
      } else {
        const result = operate(Number(num1), Number(num2), op);

        updateDisplay(result);

        num1 = result.toString();
        num2 = "";
        op = value;
      }
    }

    if (value === ".") {
      if (!op) {
        if (!num1.includes(".")) {
          num1 += value;
          updateDisplay(num1);
        }
      } else {
        if (!num2.includes(".")) {
          num2 += value;
          updateDisplay(num2);
        }
      }
    }

    if (value === "=") {
      const result = operate(Number(num1), Number(num2), op);

      previousDisplay = `${num1} ${op} ${num2}`;

      updatePrevious(previousDisplay);
      updateDisplay(result);

      num1 = result.toString();
      num2 = "";
      op = "";
    }
  }
});

function updateDisplay(value) {
  document.getElementById("result").innerHTML = value;
}

function updatePrevious(value) {
  document.getElementById("history").innerHTML = value;
}
