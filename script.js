// Sidebar items
const btnItem = document.getElementById("btnItem");
const cardItem = document.getElementById("cardItem");

// Components
const buttonComponent = document.getElementById("buttonComponent");
const cardComponent = document.getElementById("cardComponent");

// Button click
btnItem.addEventListener("click", () => {
  buttonComponent.classList.remove("d-none");
  cardComponent.classList.add("d-none");

  btnItem.classList.add("active");
  cardItem.classList.remove("active");
});

// Card click
cardItem.addEventListener("click", () => {
  cardComponent.classList.remove("d-none");
  buttonComponent.classList.add("d-none");

  cardItem.classList.add("active");
  btnItem.classList.remove("active");
});
