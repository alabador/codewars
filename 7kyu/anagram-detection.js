// write the function isAnagram
var isAnagram = function(test, original) {
    const countsTest = {};
    const countsOrig = {};
    for (const element of test.split('').map(x => x.toLowerCase())){
      countsTest[element] = countsTest[element] ? countsTest[element] + 1 : 1;
    }
    for (const element of original.split('').map(x => x.toLowerCase())){
      countsOrig[element] = countsOrig[element] ? countsOrig[element] + 1 : 1;
    }
    return Object.entries(countsTest).sort().toString() === Object.entries(countsOrig).sort().toString()
  };

  //I used an object for this, though I definitely could have just 
  //split the strings, then sort + lowercase, then test for equality. ~something like this