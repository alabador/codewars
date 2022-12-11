// 

function count (string) {  
    let count = {};
    if (string.length < 1) return {};
    let split = string.split('');
    let uniqueLetters = [...new Set(string.split(''))]
    for (const key of uniqueLetters) {
      count[key] = 0;
      for (let i = 0; i < split.length; i++){
        if (split[i] === key){
          count[key] += 1;
        }
      }
    }
    return count;
  }