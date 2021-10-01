function findFirstDuplicate(arr) {
// Javascript program to find first 
// repeating element in arr[] 
let elementSet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (elementSet.has(arr[i])) return arr[i];
        elementSet.add(arr[i]);
    }

    return -1;
    // return "No duplicates here!";

}
// findFirstDuplicate([2, 1, 3, 3, 2]) // 3
// findFirstDuplicate([2, 1, 5, 2, 3, 3, 2]) // 2
// findFirstDuplicate([2, 1, 5, 3, 2, 3, 3, 2]) // 2
// findFirstDuplicate([10, 5, 3, 4, 3, 5, 6]) // 5
// findFirstDuplicate([2, 1, 55, 4, 9, 55, 2, 3, 3, 2]) // 5

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
