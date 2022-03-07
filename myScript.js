// auto type script
let typed = new Typed(".auto-input",{
  strings: ["Web Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})


// auto progress script
let number = document.getElementById("number1");
let counter = 0;
setInterval(() => {
  if(counter == 85){
    clearInterval();
  } else {
      counter += 1;
      number.innerHTML = counter + "%";
  }
}, 50);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
  if(counter2 == 70){
    clearInterval();
  } else {
      counter2 += 1;
      number2.innerHTML = counter2 + "%";
  }
}, 60);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
  if(counter3 == 65){
    clearInterval();
  } else {
      counter3 += 1;
      number3.innerHTML = counter3 + "%";
  }
}, 65);

let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
  if(counter4 == 90){
    clearInterval();
  } else {
      counter4 += 1;
      number4.innerHTML = counter4 + "%";
  }
}, 45);

let number5 = document.getElementById("number5");
let counter5 = 0;
setInterval(() => {
  if(counter5 == 75){
    clearInterval();
  } else {
      counter5 += 1;
      number5.innerHTML = counter5 + "%";
  }
}, 55);

let number6 = document.getElementById("number6");
let counter6 = 0;
setInterval(() => {
  if(counter6 == 85){
    clearInterval();
  } else {
      counter6 += 1;
      number6.innerHTML = counter6 + "%";
  }
}, 50);