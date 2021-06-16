const input = document.querySelector("#validation-input");

input.addEventListener("input", (text) => {
  if (text.target.value.length < text.target.getAttribute("data-length")) {
    input.setAttribute("class", "invalid");
  } else {
    input.setAttribute("class", "valid");
  }
});