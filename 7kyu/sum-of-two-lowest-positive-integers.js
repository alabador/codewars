// DESCRIPTION:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


/*** My Solution ***/
function sumTwoSmallestNumbers(numbers) {  
    if (numbers.length > 3){
      let minArray = [];
      for (let i = 0; i < 2; i++){
        const min = Math.min(...numbers);
        minArray.push(numbers.splice(numbers.indexOf(min), 1));
      }
      const newArray = minArray[0].concat(minArray[1]);
      return newArray.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    }
    else throw 'Array is less than 4 values';
  }

//Reflection: For some reason, i had the assumption that array.sort did not work with numbers? 

// After some research, I found that I needed to pass in a comparison function when comparing values, as it goes through the array. 
// After that, I would then take the first two values from the array using array.shift then add them together.

/*** Refactored Solution ***/
function sumTwoSmallestNumbers(numbers) {
    if (numbers.length > 3){
        const sortedAsc = numbers.sort((a,b) => a-b);
        return sortedAsc[0] + sortedAsc[1];
    }
    else throw 'Array is less than 4 values';
}