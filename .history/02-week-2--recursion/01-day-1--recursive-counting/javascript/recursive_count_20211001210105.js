function recursiveCount(num = 0) {
  // type your code here
  const count = 10
  if (num > 10){
    return count--
  }

  recursiveCount(count)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
