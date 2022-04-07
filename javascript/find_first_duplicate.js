function findFirstDuplicate(arr) {
  // type your code here
  
  // let counter = 0
  // for(let i = 0; i < arr.length; i++) {
  //   if (arr[i]===arr[i+1]) {
  //     counter = i+1
  //   }
  // }
  // if (arr[0] === arr[1] && arr.length === 2){
  //   return 2
  // }
  // return counter === 0 ? -1 : counter

  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===arr[i-1]) {
      break
    } else {
      counter++
    }
  }
  if (arr[0] === arr[1] && arr.length === 2) {
    return 2
  }
  return counter === arr.length ? -1 : counter
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
