function fibonacciIter(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}
console.log(fibonacciIter(8));

function fibonacciRec(n) {
  function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 1) + fib(num - 2);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    // start at 0 to include the first two numbers
    result.push(fib(i));
  }
  return result;
}
console.log(fibonacciRec(8));
