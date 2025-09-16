export function factorial(num) {
  let n = parseInt(num);
  if (isNaN(n) || n < 0) {
    result.value = 'Please enter a valid number!';
    // result.style.color ="red"
    return;

  }

  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
