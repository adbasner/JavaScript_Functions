
function isPalindrome(str) {
  /*
  //simplest reverse function, then compare.  above allows for more advanced, using lowercase and regex to removes non char functions
  const compare = str.replace(/[\W_]/g, '').toLowerCase();
  const revString = compare.split('').reverse().join('');  
  return revString === compare;
  */

  //////////////////////////////////////

  //combine the above into one!
  //return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 

  ////////////////////////////////////
  
  /*
  const compare = str.replace(/[\W_]/g, '').toLowerCase();
  //start the same, compare from ends, iterate half the string in for loop
  for (let i = 0, len = compare.length - 1; i < (len/2); i++) {
    if (compare[i] !== compare[len-i]) {
      return false;
    }
  }
  return true; 
  */

  ////////////////////////////////////

  //fastest because you never need to replace anything, uses pointers to move along to non-whitespace chars withough fully replacing everything
  let front = 0;
  let back = str.length - 1;

  while (back > front) {

    //checks front for chars
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }

    //checks back for chars
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    //finally does comparison
    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false;
    }
    front ++;
    back --;
  }
  return true;

}



const output = isPalindrome("0_0 (: /-\ :) 0-0");
console.log(output);
