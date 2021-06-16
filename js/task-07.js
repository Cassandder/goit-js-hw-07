const formSize = document.querySelector("#font-size-control");
const formSpan = document.querySelector("#text");

formSize.addEventListener("input", changeFont);

function changeFont() {
  formSpan.style.fontSize = `${formSize.value}px`;
}

