function factorialize(num) {
  // if (num === 0) {
  //   return 1;
  // } else {
  //   return num * factorialize(num - 1);
  // }

  if (num === 0) {
    return 1;
  } else {
    let product = num;
    for (let i = num - 1; i > 1; i--) {
      product *= i;
    }
    return product;
  }
}


console.log("5! = " + factorialize(5)); //120
console.log("10! = " + factorialize(10)); // 3628800
console.log("20! = " + factorialize(20)); // 2432902008176640000
console.log("0! = " + factorialize(0)); //1
console.log("0! = " + factorialize(232323)); //1
