function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log("0 in C = " + convertToF(0) + " In F"); // 32
console.log("-30 in C = " + convertToF(-30) + " In F"); // -22
console.log("-10 in C = " + convertToF(-10) + " In F"); // 14
console.log("20 in C = " + convertToF(20) + " In F"); // 68
console.log("30 in C = " + convertToF(30) + " In F"); //86
