import { factorial } from "./math.js";

function calcu(event) {
  event.preventDefault();

  const numberInput = document.getElementById("num1");
  const output = document.getElementById("resultNumber");

  const numStr = numberInput.value;
  // We try to pass the string directly to preserve precision for loose checks, 
  // but our factorial logic uses Number() for validation which is fine for now.
  // The important part is handling the BigInt return.

  const result = factorial(numStr);

  if (result === undefined) {
    output.textContent = " Please enter a valid non-negative integer!";
    output.style.color = "red";
  } else {
    // Determine how to display the input number. 
    // If it's a valid factorial input, it's an integer.
    // Use BigInt(numStr) for display to be precise in case of huge inputs.
    const nVal = BigInt(numStr);

    // For very large results, we might want to truncate or just show it. 
    // The requirement says "work perfectly" so we show it all.
    // But let's check if it's too huge to fit in the UI? 
    // The previous code showed `${n}! = ${result}`.
    // A huge result might break layout, but correctness is key here.

    output.textContent = `${nVal}! = ${result.toString()}`;
    output.style.color = "green";
  }
}

const form = document.getElementById("calForm");
form.addEventListener("submit", calcu);
