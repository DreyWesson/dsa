function fibonacci(num) {
  // https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
  // the base case and tmp for memoization
  var a = 1,
    b = 0,
    tmp;

  while (num >= 0) {
    tmp = a;
    a = a + b;
    // then save the previous value of 'a' back in 'b'
    b = tmp;
    num--;
  }
  return b;
}
console.log("Fibonacci", fibonacci(10));

function fibRecursion(num, tmp = {}) {
  // if num already exit in tmp return the value
  if (tmp[num]) return tmp[num];
  if (num <= 1) return 1;

  return (tmp[num] = fibRecursion(num - 1, tmp) + fibRecursion(num - 2, tmp));
}
console.log("FIB >>>", fibRecursion(10));
