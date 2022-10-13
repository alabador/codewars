// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


/*** My Solution ***/

//parameters: string or array sequence
//return : 

//take in parameter and check if array.
//if not (string), convert to array ---> string.split('');

//loop through array and check for values that are equal to current index value
// IF EQUAL, remove the duplicate that is being compared
// UNTIL non unique value is found
// Iterate index up, which should be the next unique value, since all copies are removed. 


var uniqueInOrder = function(iterable){
    let unique = iterable;
    if (!Array.isArray(unique)) {
        unique = unique.split('');
    };
    for (let i = 0; i<unique.length; i++){
        while(unique[i] === unique[i+1]){
            unique.splice(i+1, 1);
        }
    }
    return unique;
}