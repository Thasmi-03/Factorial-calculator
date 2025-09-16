import { factorial } from "./math.js";

function calcu(event) {
  event.preventDefault();

  const number1 = document.getElementById("num1");
  const output = document.getElementById("resultNumber");

  const num = number1.value;

  if (num === "" || isNaN(num) || num < 0) {
    output.textContent = " Please enter a valid number!";
    output.style.color = "red";
  } else {
    const n = Number(num);
    const result = factorial(n);
    output.textContent = `${n}! = ${result}`;
    output.style.color = "green";
  }
}

const form = document.getElementById("calForm");
form.addEventListener("submit", calcu);
