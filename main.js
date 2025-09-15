import {factorial} from './math.js'

function calcu(event) {
  event.preventDefault();

  const number1 = document.getElementById("num1").value;
  const result = factorial(number1);
  console.log(result);
}

const calForm = document.getElementById("calForm");
calForm.addEventListener("submit", calcu);
