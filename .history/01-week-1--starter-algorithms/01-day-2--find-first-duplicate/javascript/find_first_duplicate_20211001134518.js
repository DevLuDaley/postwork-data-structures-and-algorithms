function findFirstDuplicate(arr) {
  console.log(arr);
  shallowCopyArr = arr
  // console.log(arr.shift());
  // console.log(arr);
  // type your code here
  for(num in shallowCopyArr){
    let shiftedNum = arr.shift()
    console.log(shiftedNum);
    console.log(arr.indexOf(5));
    console.log(shiftedNum);
    if (arr.includes(shiftedNum)){
      console.log(arr);
      console.log(shiftedNum);
      // return shiftedNum
    }
    // else { 
    //   console.log(-1);
    //   return -1
    // }
    console.log(arr);
  }

console.log(arr);
console.log(arr[0]);
console.log(arr.length);
// console.log("arr".length);
console.log("arr");

}
// findFirstDuplicate([2, 1, 3, 3, 2]) // 3
// findFirstDuplicate([2, 1, 5, 2, 3, 3, 2]) // 2
findFirstDuplicate([2, 1, 5, 4, 9, 5, 2, 3, 3, 2]) // 5

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

/*
1. Rewrite the problem in your own words
2. Validate that you understand the problem
3. Write your own test cases
4. Pseudocode
5. Code!
*/

// Please add your pseudocode to this file

// And a written explanation of your solution
