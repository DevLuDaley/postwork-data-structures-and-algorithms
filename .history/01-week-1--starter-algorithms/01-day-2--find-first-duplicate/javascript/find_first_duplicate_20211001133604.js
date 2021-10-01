function findFirstDuplicate(arr) {
  console.log(arr);
  // console.log(arr.shift());
  // console.log(arr);
  // type your code here
  for(num in arr){
    let newNum = arr.shift()
    console.log(newNum);
    console.log(arr);
    console.log(newNum);
    if (arr.includes(newNum)){
      console.log(arr);
      console.log(newNum);
      // return newNum
    }
    else { 
      console.log(-1);
      return -1
    }
console.log(arr);
  }
}
findFirstDuplicate([2, 1, 3, 3, 2])

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
