function reverseInt(int) {

  //basic
  const revString = int.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(int);
}

//can use any optimized revstring functions


const output = reverseInt(-12345);
console.log(output);
