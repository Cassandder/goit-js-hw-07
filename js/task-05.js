const inputIn = document.querySelector("#name-input");
const inputOut = document.querySelector("#name-output");

inputIn.addEventListener("input", (text) => {
  inputOut.textContent = text.target.value;
  if (inputOut.textContent === "") {
    inputOut.textContent = "незнакомец";
  }
});