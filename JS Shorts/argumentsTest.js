function argTest (){
  console.log("There are: " + arguments.length + " arguments!");
}

console.log("1");
argTest ("a");
console.log("2");
argTest ("b", "c");
console.log("3");
argTest ('a', 'b', 'c');
console.log("4");
argTest ('a', 'b', 'c', 'd');
console.log("5");
argTest ('a', 'b', 'c', 'd', 'e');