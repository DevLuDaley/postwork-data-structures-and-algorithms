function findFirstDuplicate(arr) {
  console.log(arr);
  shallowCopyArr = arr
  // console.log(arr.indexOf(5));

  for(num in shallowCopyArr){
    let shiftedNum = shallowCopyArr.shift()
    console.log(arr);
    console.log(shiftedNum);
    if (shallowCopyArr.includes(shallowCopyArr[shiftedNum])){
      console.log(shallowCopyArr[shiftedNum]);

    }
  }

console.log(arr);
console.log(arr[0]);
console.log(arr.length);
// console.log("arr".length);
console.log("arr");

}
// findFirstDuplicate([2, 1, 3, 3, 2]) // 3
// findFirstDuplicate([2, 1, 5, 2, 3, 3, 2]) // 2
findFirstDuplicate([2, 1, 55, 4, 9, 55, 2, 3, 3, 2]) // 5

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
