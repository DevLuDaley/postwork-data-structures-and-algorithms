// function recursiveCount(num) {
function recursiveCount(num = 0) {
  // type your code here

}

const talkToMyself = (n) => {
  if (n <= 0.5) {
    console.log(n);
    console.log('done');
    return n;
  } talkToMyself(n / 4);
  console.log('the sheep goes baaaaahhhhh');
};

talkToMyself(3);
if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
//
//
//
//
//
//
//

// if (num > 8){
//   console.log(num);
//   return num
// }
// else {
//   console.log(num)
//   recursiveCount(num + 1);
// }
