// function recursiveCount(num) {
function recursiveCount(num = 0) {
  // type your code here
  // const count = 10
  if (num > 8){
    console.log(num);
    return num
  }

  else {
    // myArry.unshift(num)
    console.log(num)
    recursiveCount(num + 1);
    // return recursiveCount(num++)
  }
}

// console.log(recursiveCount(2))
// console.log(recursiveCount())

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
