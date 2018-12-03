function reverseString(str) {

  //using prototype functions

  // splits string into array, reverses it, the joins it
  // const strArr = str.split('');
  // strArr.reverse();
  // return strArr.join('');

  // Just combine all of above
  // return str.split('').reverse().join('');

  /////////////////////////////////

  //descending for loop

  // let revString = '';
  // for (let i = str.length-1; i >= 0; i--) {
  //   revString = revString + str[i];
  //   // works backwards through the original string, adding last letter
  //   // to new string one at a time
  // }
  // return revString;

  /////////////////////////////////

  //ascending for loop
  // let revString = '';
  // for (let i = 0; i < str.length; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  /////////////////////////////////

  // for of loop - more modern and ES6

  // let revString = '';
  //iterates str every char, like ascending for loop above but more modern
  // for (let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  /////////////////////////////////////////

  // foreach higher order function, callback function
  // let revString = '';
  // str.split('').forEach(function(char){
  //   revString = char + revString;
  // });
  // return revString;

  /////////////////////////

  // fancy version of above with arrow function
  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  //////////////////////////

  // reduce function -- arr.reduce(callbackfunctin, accumulator index(elimnates let revString = '')
  // functions like the for each above, without explicitly calling accumulator

  // return str.split('').reduce(function(revString, char){
  //   return char + revString;
  // }, '');

  //////////////////////////////////
  
  // reduce function with arrow function
  return str.split('').reduce((revString, char) =>  char + revString, '');
}


const output = reverseString('hello');
console.log(output);