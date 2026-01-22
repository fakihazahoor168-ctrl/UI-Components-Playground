// ===== GET ELEMENTS =====

// Sidebar items
const btnItem = document.getElementById("btnItem");
const cardItem = document.getElementById("cardItem");

// Components
const buttonComponent = document.getElementById("buttonComponent");
const cardComponent = document.getElementById("cardComponent");

// Button controls
const btnTextInput = document.getElementById("btnTextInput");
const btnColorInput = document.getElementById("btnColorInput");
const btnSizeSelect = document.getElementById("btnSizeSelect");

// Card controls
const cardTitleInput = document.getElementById("cardTitleInput");
const cardTextInput = document.getElementById("cardTextInput");
const cardBtnTextInput = document.getElementById("cardBtnTextInput");
const cardBtnColorInput = document.getElementById("cardBtnColorInput");

// Preview elements
const previewButton = document.querySelector("#buttonComponent button");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");
const cardButton = document.querySelector(".card a");


// ===== SWITCH COMPONENTS =====

btnItem.onclick = () => {
  buttonComponent.classList.remove("d-none");
  cardComponent.classList.add("d-none");
};

cardItem.onclick = () => {
  cardComponent.classList.remove("d-none");
  buttonComponent.classList.add("d-none");
};


// ===== BUTTON CONTROLS =====

btnTextInput.oninput = () => {
  previewButton.innerText = btnTextInput.value || "Button";
};

btnColorInput.oninput = () => {
  previewButton.style.backgroundColor = btnColorInput.value;
};

btnSizeSelect.onchange = () => {
  if (btnSizeSelect.value === "Small") {
    previewButton.style.padding = "6px 12px";
  } else if (btnSizeSelect.value === "Medium") {
    previewButton.style.padding = "12px 24px";
  } else {
    previewButton.style.padding = "18px 36px";
  }
};


// ===== CARD CONTROLS =====

cardTitleInput.oninput = () => {
  cardTitle.innerText = cardTitleInput.value || "Card Title";
};

cardTextInput.oninput = () => {
  cardText.innerText =
    cardTextInput.value || "This is a card";
};

cardBtnTextInput.oninput = () => {
  cardButton.innerText = cardBtnTextInput.value || "Action";
};

cardBtnColorInput.oninput = () => {
  cardButton.style.backgroundColor = cardBtnColorInput.value;
  cardButton.style.color = "white";
};
