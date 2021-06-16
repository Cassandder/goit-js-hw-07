
const incBtn = document.querySelector("[data-action='increment']");
const decBtn = document.querySelector("[data-action='decrement']");


let value = document.getElementById('value');
let counterValue = 0;
value.textContent = counterValue;


// console.log();

// console.log();
function increment() {
  counterValue += 1;
  value.textContent = counterValue;
 };
// console.log(value);
function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
 };

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);