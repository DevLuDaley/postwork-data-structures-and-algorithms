// function recursiveCount(num) {
function recursiveCount(num = 0) {
  // type your code here
  // const count = 10
  if (num < 10){
    return []
  }

  else {
    // recursiveCount(num)
    const myArry = recursiveCount(num - 1)
    myArry.unshift(num)
    return myArry
  }
}

// console.log(recursiveCount(2))
console.log(recursiveCount())

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
