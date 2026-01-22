// Sidebar Items
const btnItem = document.getElementById("btnItem");
const cardItem = document.getElementById("cardItem");

// Components
const buttonComponent = document.getElementById("buttonComponent");
const cardComponent = document.getElementById("cardComponent");

// Button click (switch)
btnItem.addEventListener("click", () => {
  buttonComponent.classList.remove("d-none");
  cardComponent.classList.add("d-none");

  btnItem.classList.add("active");
  cardItem.classList.remove("active");
});

// Card click (switch)
cardItem.addEventListener("click", () => {
  cardComponent.classList.remove("d-none");
  buttonComponent.classList.add("d-none");

  cardItem.classList.add("active");
  btnItem.classList.remove("active");
});

// ---- BUTTON CUSTOMIZATION ----

// Controls
const btnTextInput = document.querySelector(".controls input[type='text']");
const btnColorInput = document.querySelector(".controls input[type='color']");
const btnSizeSelect = document.querySelector(".controls select");

// Preview button
const previewButton = document.querySelector("#buttonComponent .btn");

// Change Text
btnTextInput.addEventListener("input", () => {
  previewButton.textContent = btnTextInput.value || "Button";
});

// Change Color
btnColorInput.addEventListener("input", () => {
  previewButton.style.backgroundColor = btnColorInput.value;
});

// Change Size
btnSizeSelect.addEventListener("change", () => {
  const size = btnSizeSelect.value;
  previewButton.style.padding = size === "Small" ? "6px 12px" :
                               size === "Medium" ? "12px 24px" :
                               "18px 36px";
  previewButton.style.fontSize = size === "Small" ? "14px" :
                                 size === "Medium" ? "16px" :
                                 "18px";
});
