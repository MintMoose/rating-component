// const nav = document.querySelector();
const submitButton = document.querySelector(".submit-button");
const buttonList = document.querySelectorAll(".button-circle label");
const valueToGive = document.querySelector(".text-div > p > span");
let buttonCount = document.querySelector("#button-count");

buttonCount.innerHTML = buttonList.length;

submitButton.addEventListener("click", () => {
  const checkedInput = document.querySelector('input[name="options"]:checked');
  if (checkedInput) {
    hideContent(".container");
    showContent("#thanks");
    valueToGive.innerHTML = checkedInput.value;
  } else {
    document.querySelector(".error").removeAttribute("hidden");
  }
});

buttonList.forEach((element) => {
  element.addEventListener("click", () => {
    buttonList.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });

  console.log(element);
});

function hideContent(content) {
  document
    .querySelectorAll(content)
    .forEach((item) => (item.style.display = "none"));
}

function showContent(content) {
  document.querySelector(content).style.display = "";
}
