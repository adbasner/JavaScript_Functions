function maxCharacter(str) {

  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  //for each is callback 
  str.toLowerCase().split('').forEach(function(char){
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    } else if (charMap[char] == maxNum) {
      maxChar += char;
    }
  }

  return maxChar;
  
}

const output = maxCharacter('i love javascRiptrrjj');
console.log(output);