// function recursiveCount(num) {
function recursiveCount(num = 0) {
  // type your code here
  // const count = 10
  if (num == 10){
    return num
  }

  else {
    // myArry.unshift(num)
    console.log(recursiveCount(num++))
    return recursiveCount(num++)
  }
}

// console.log(recursiveCount(2))
// console.log(recursiveCount())
recursiveCount();

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
