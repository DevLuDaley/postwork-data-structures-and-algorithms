function reverseString(str) {
  // type your code here
  console.log(str)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
! brainstorming
what am I returning? // a reversed version of the string

can I call reverse on it? // no
reverse is an array function
can I convert the string into an array, then reverse the array, then convert(join) back to a string? // yes
which functions/methods whould I need to convert/reverse/convert back to an array? // split/reverse/join 

*/
// And a written explanation of your solution
