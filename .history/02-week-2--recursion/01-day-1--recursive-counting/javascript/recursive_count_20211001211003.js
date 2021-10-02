function recursiveCount(num) {
// function recursiveCount(num = 0) {
  // type your code here
  // const count = 10
  if (num = 1){
    return 1
  }

  else if (n < 1) {
    recursiveCount(num)
    myArry = recursiveCount(num -1)
    return myArry
  }
}

recursiveCount(12)

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
