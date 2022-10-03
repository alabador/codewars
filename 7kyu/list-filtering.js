// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


/*** My Solution ***/
function filter_list(l) {
    return l.filter(trueNumber);
    
    function trueNumber(i){
      return i === Number(i);
    }
  };

/*** Reflection ***/
// I attempted to use Array.filter combined with isNaN, but isNaN, as well as Number.isNaN
// uses automatic type coercion to check for equality, converting the strings to numbers.
// I also used type of to check equality. 

//After submitting and checking solutions, I had the correct idea, I think I just missed 
//a bracket/parenthesis causing my tests to fail.

// E.g. '7' would be converted to 7 before being checked by isNaN.