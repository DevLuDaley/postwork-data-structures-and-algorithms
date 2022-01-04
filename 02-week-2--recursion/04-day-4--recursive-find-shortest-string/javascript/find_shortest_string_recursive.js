function findShortestStringRecursive(arr) {
  arr;
  // arr.length === 1 ? arr[0] : null;
  if (arr.length === 1) {
    return arr[0];
  }
  const result = findShortestStringRecursive(arr.slice(1));

  return arr[0].length <= result.length ? arr[0] : result;
}

// ! iterative answer below
// function findShortestString(arr) {
//   // type your code here
//   arr;
//   const sorted = arr.sort((a, b) => a.length - b.length);
//   return sorted[0];
// }

/*
iterative solution would be to use a for loop to iterate over arr comparing the .length of each element in the array and returning the smallest one. there must be a go to for comparing elements. reduce maybe? maybe recursion is best for comparison?

let lowest = 0
arr.forEach((str)=>
str.length === 1
return str

// else if str.length !== 1 && str.length < lowest
else if (str.length > lowest){
  lowest = str.length
}
{

}
)
*/
// }
// findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']);
// findShortestStringRecursive(['cat', 'hi', 'dog', 'an']);
findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']);

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log('=>', findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log('');

  console.log("Expecting: 'hi'");
  console.log('=>', findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log('');

  console.log("Expecting: 'lily'");
  console.log('=>', findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
