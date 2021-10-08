function fibonacci(n) {
  // type your code here
}
function fibonacciFirst(n) {
  if (n < 2) {
    return n;
  }

  const values = [0, 1];
  // for (const i of values) {
  for (let i = 0; i < n - 1; ++i) {
    values[values.length];
    values[values.length - 1];
    values[values.length - 2];
    values;
    values.push(values[values.length - 1] + values[values.length - 2]);
  }

  return values[values.length - 1];
}
// fibonacciFirst(0);
// fibonacciFirst(1);
// fibonacciFirst(2);
// fibonacciFirst(3);
// fibonacciFirst(4);
// fibonacciFirst(5);
fibonacciFirst(6);
// fibonacciFirst(10);
// fibonacciFirst(12);

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 0');
  console.log('=>', fibonacci(0));

  console.log('');

  console.log('Expecting: 1');
  console.log('=>', fibonacci(2));

  console.log('');

  console.log('Expecting: 55');
  console.log('=>', fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
