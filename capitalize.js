function capitalize(str) {

  /*
  const strArr = str.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + 
    strArr[i].substring(1);
  }
  return strArr.join(' ');
  */

  ////////////////////////////////////////////////////

  //use map function - returns an array, applies callback function on
  //every pont of array

  /*
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
  */

  //or all in one line

  /*
  return str.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
      }).join(' ');
  */

  //////////////////////////////////////////////////

  //above in ES6

  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
   

  ////////////////////////////////////////////////

  // with regex -  will not catch mid word uppers unless toLowerCase is called

  /*
  return str.toLowerCase().replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  })
  */
}

const output = capitalize('i love javascRipt');
console.log(output);