function findShortestString(arr) {
   arr.sort((a,b) => a-b )
  return arr[arr.length-1]
  // type your code here
}

findShortestString(['aaa', 'a', 'bb', 'ccc'])
console.log(findShortestString(['aaa', 'a', 'bb', 'ccc']))

if (require.main === module) {
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
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
