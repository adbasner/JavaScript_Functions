var btn = document.querySelector("#poop");

function display () {
  var input = document.querySelector("#test");
  var display = input.value;
  alert(display);
}

btn.addEventListener("click", display);

btn.addEventListener("mouseover", function(){
  console.log("moused over");
});

textBox = document.querySelector("input");
textBox.addEventListener("mouseover", function(){
  textBox.style.background = "#DDD";
});

textBox.addEventListener("mouseout", function(){
  textBox.style.background = "white";
});

btn2 = document.querySelector("#poop2");

btn2.addEventListener("click", function() {
  var ipsum = document.querySelector("#ipsum");
  ipsum.classList.toggle("ipsumed");
});