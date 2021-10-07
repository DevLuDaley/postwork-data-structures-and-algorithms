function recursiveSearch(arr, target) {
  // type your code here
  arr.forEach((n) => (
    arr[n] == target
      ? console.log(arr[n], true)
      : false));
}
recursiveSearch([111, 45, 33], 111);
recursiveSearch([1, 22, 3], 22);
recursiveSearch([3, 2, 1], 4);
recursiveSearch([3, 2, 1], 3);
if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: true');
  console.log('=>', recursiveSearch([1, 2, 3], 2));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
