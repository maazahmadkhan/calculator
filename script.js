const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let expression = localStorage.getItem("lastCalc") || "";

display.value = expression;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    expression += button.getAttribute("data-value");
    display.value = expression;
  });
});

clearBtn.addEventListener("click", () => {
  expression = "";
  display.value = "";
  localStorage.removeItem("lastCalc");
});

equalsBtn.addEventListener("click", () => {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
    localStorage.setItem("lastCalc", expression);
  } catch {
    display.value = "Error";
    expression = "";
  }
});
