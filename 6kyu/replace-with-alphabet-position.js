// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



/*** My Solution ***/
function alphabetPosition(text) {
    const spread = text.split('');
    let numberConvert = [];
    for(let i = 0; i<spread.length; i++){
      const letterToNum = spread[i].charCodeAt(0);
      if(letterToNum > 96 && letterToNum < 123){
        numberConvert.push(letterToNum - 96);
      }
      else if (letterToNum > 64 && letterToNum < 91){
        numberConvert.push(letterToNum - 64);
      }
    }
    return numberConvert.join(' ');
}
