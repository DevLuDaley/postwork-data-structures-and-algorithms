function reverseString(str) {
  // type your code here
  // console.log(str.split("").reverse().join())
  // console.log(str.split("").reverse().join(""))
  return str.split("").reverse().join("")
}
// reverseString("ybabtac")
// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 'ih'");
//   console.log("=>", reverseString("hi"));

//   console.log("");

//   console.log("Expecting: 'ybabtac'");
//   console.log("=>", reverseString("catbaby"));
// }

module.exports = reverseString;

// Please add your pseudocode to this file
/*
! brainstorming
[] what is the input? // a string
      [] does it need to be cleaned? 
        [] does case matter?
      [] if case matters then I can use "toLower" method to make all letters lowercase
          [] - no mention of case in directions - converting case might cause the algorithm to fail tests.
[] what is the output? // a reversed version of the string


can I call reverse on it? // no
reverse is an array function
can I convert the string into an array, then reverse the array, then convert(join) back to a string? // yes
which functions/methods whould I need to convert/reverse/convert back to an array? // split/reverse/join 

*/
// And a written explanation of your solution
