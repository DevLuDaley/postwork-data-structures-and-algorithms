function findFirstDuplicate(arr) {
// Javascript program to find first 
// repeating element in arr[] 
      
// This function prints the first 
// repeating element in arr[]
// function  printFirstRepeating(arr)
// {
      
    // Initialize index of first
    // repeating element
    let min = -1;
  
    // Creates an empty hashset
    let set = new Set();
  
    // Traverse the input array from right to left
    for(let i = arr.length - 1; i >= 0; i--)
    {
          
        // If element is already in 
        // hash set, update min
        if (set.has(arr[i]))
            min = i;
              
        // Else add element to hash set
        else  
            set.add(arr[i]);
    }
  
    // Print the result
    if (min != -1)
      // document.write(
        console.log("The first repeating element is " + 
                     arr[min]);
    else
      // document.write(
        console.log("There are no repeating elements"));

}
// findFirstDuplicate([2, 1, 3, 3, 2]) // 3
// findFirstDuplicate([2, 1, 5, 2, 3, 3, 2]) // 2
// findFirstDuplicate([2, 1, 5, 3, 2, 3, 3, 2]) // 2
findFirstDuplicate([10, 5, 3, 4, 3, 5, 6]) // 5
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
