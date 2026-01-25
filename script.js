function fibonacciIter(n) {
  for (let i = 0; i < n; i++) {
    console.log(i + 1);
  }
}
function fibonacciRec(n) {
  /*
    Base case:
    - If n is less than 2, return n to stop recursion
    - and prevent infinite calls.
  */
  console.log(n);
}
fibonacciIter(8);
fibonacciRec("Hello World");
