export function factorial(num) {
  if (num < 0 || !Number.isInteger(Number(num))) return undefined;
  if (num === 0 || num === 1) return 1n;

  let result = 1n;
  for (let i = 2n; i <= BigInt(num); i++) {
    result = result * i;
  }
  return result;
}