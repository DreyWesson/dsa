console.log("Factorial >>>", factorial(5));

function factorial(num) {
  return isNaN(num)
    ? "This is not a number"
    : num === 1
    ? num
    : num * factorial(num - 1);
}