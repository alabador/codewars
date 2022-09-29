// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


/*** My Solution ***/

function highAndLow(numbers){
    let newArray = [];
    const stringToArray = numbers.split(" ")
    const numArray = stringToArray.map(string => parseInt(string));
    newArray.push(Math.max(...stringToArray));
    newArray.push(Math.min(...stringToArray));
    return newArray.join(' ');
}

/*** Solution Reflection ***/

//after seeing other solutions, I see that the split and map are the 
//important parts to this solution. 

// However, I overcomplicated my solution by allocating more memory towards
// creating an array and joining it, instead of returning a string concatenation.


/*** Refactored Solution ***/
function highAndLowv2(numbers){
    const stringToArray = numbers.split(" ").map(Number);
    let max = Math.max(...stringToArray);
    let min = Math.min(...stringToArray);
    return max + ' ' + min;
}