// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

function sortArray(array) {
    const odd = array.filter(x => x%2 !== 0 || x%2 !== NaN) //get odd numbers
    let oddIndex = [];
    //find index of each odd number in array
    for (let i=0; i<odd.length; i++){
      oddIndex.push(array.indexOf(odd[i], i)); 
    }
    odd.sort((a,b) => a-b);
    //push sorted values to saved indexes
    for (let i=0; i<oddIndex.length; i++){
      array.splice(oddIndex[i], 1, odd[i]);
    }
    return array;
  }