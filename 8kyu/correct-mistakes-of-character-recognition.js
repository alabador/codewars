// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
  let newArray = string.split("");
  for (let i = 0; i < string.length; i++){
    if (newArray[i] === '5'){
      newArray[i] = 'S'
    }
    else if (newArray[i] === '0'){
      newArray[i] = 'O'
    }
    else if (newArray[i] === '1'){
      newArray[i] = 'I'
    }
  }
  return newArray.join('');
}