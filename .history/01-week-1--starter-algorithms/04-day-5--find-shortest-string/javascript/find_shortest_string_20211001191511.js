function findShortestString(arr) {
   const sorted = arr.sort((a,b) => a-b )
   console.log(arr);
   console.log(sorted);
  // return sorted[sorted.length - 1]
  return arr[arr.length - 1]
  // type your code here
}

// if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
// }

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
