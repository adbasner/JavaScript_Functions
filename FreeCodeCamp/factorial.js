function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log("5! = " + factorialize(5)); //120
// console.log("10! = " + factorialize(3628800)); // 120
// console.log("20! = " + factorialize(20)); // 2432902008176640000120
console.log("0! = " + factorialize(0)); //1
