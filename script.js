let input = document.querySelector("input");
let message = "Hello";
let btn = document.querySelector("button");
let messageBlock = document.querySelector(".message");
messageBlock.innerHTML = message;

function hasValue() {
  if (input.value) {
    message = input.value;
  } else {
    let sho = document.querySelector(".hasnotvalue").classList;
    sho.add("active");
    setTimeout(() => sho.remove("active"), 3000);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  hasValue();
  messageBlock.innerHTML = message;
  input.value = "";
});
