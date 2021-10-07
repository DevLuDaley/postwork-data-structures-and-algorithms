function recursiveSearch(arr, target) {
  // arr.slice(1);
  if (arr.length == 0) {
    return false;
  }
  recursiveSearch(arr.slice(1), target);
}
recursiveSearch([1, 22, 3], 22);
// recursiveSearch([3, 2, 1], 4);
// recursiveSearch([3, 2, 1], 3);

function iterativeSearch(arr, target) {
  // type your code here
  // arr.forEach((n) => { // n == target? true:false
  for (const value of arr) { // n == target? true:false
    // n;
    if (value == target) {
      value;
      return true;
    }
    value;
    return false;
  }
}
// iterativeSearch([111, 45, 33, 111, 55, 298, 7, 88], 55);
iterativeSearch([1, 22, 3], 22);
// iterativeSearch([3, 2, 1], 4);
// iterativeSearch([3, 2, 1], 3);
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
