function selectionSort(arr) {
  // type your code here
  // console.log(arr);
  // console.log(arr.sort((a,b) => a-b));
  return arr.sort((a,b) => a-b);
}
// selectionSort([3, -1, 5, 2])

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));
  console.log("");

  console.log("Expecting: [-2, -1, 2, 4]");
  console.log("=>", selectionSort([-1, -2, 4, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
