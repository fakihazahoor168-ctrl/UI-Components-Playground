// ===== GET ELEMENTS =====

// Sidebar items
const btnItem = document.getElementById("btnItem");
const cardItem = document.getElementById("cardItem");
const inputItem = document.getElementById("inputItem");
const alertItem = document.getElementById("alertItem");

// Components
const buttonComponent = document.getElementById("buttonComponent");
const cardComponent = document.getElementById("cardComponent");
const inputComponent = document.getElementById("inputComponent");
const alertComponent = document.getElementById("alertComponent");

// Button controls
const btnTextInput = document.getElementById("btnTextInput");
const btnColorInput = document.getElementById("btnColorInput");
const btnSizeSelect = document.getElementById("btnSizeSelect");

// Card controls
const cardTitleInput = document.getElementById("cardTitleInput");
const cardTextInput = document.getElementById("cardTextInput");
const cardBtnTextInput = document.getElementById("cardBtnTextInput");
const cardBtnColorInput = document.getElementById("cardBtnColorInput");

// Input controls
const inputPlaceholder = document.getElementById("inputPlaceholder");
const inputSize = document.getElementById("inputSize");

// Alert controls
const alertText = document.getElementById("alertText");
const alertType = document.getElementById("alertType");

// Preview elements
const previewButton = document.querySelector("#buttonComponent button");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");
const cardButton = document.querySelector(".card a");
const previewInput = document.querySelector("#inputComponent input");
const previewAlert = document.querySelector("#alertComponent .alert");


// ===== HELPER FUNCTIONS =====

function hideAll() {
  buttonComponent.classList.add("d-none");
  cardComponent.classList.add("d-none");
  inputComponent.classList.add("d-none");
  alertComponent.classList.add("d-none");
}

function clearActive() {
  document
    .querySelectorAll(".list-group-item")
    .forEach(item => item.classList.remove("active"));
}


// ===== COMPONENT SWITCHING =====

btnItem.onclick = () => {
  hideAll();
  clearActive();
  buttonComponent.classList.remove("d-none");
  btnItem.classList.add("active");
};

cardItem.onclick = () => {
  hideAll();
  clearActive();
  cardComponent.classList.remove("d-none");
  cardItem.classList.add("active");
};

inputItem.onclick = () => {
  hideAll();
  clearActive();
  inputComponent.classList.remove("d-none");
  inputItem.classList.add("active");
};

alertItem.onclick = () => {
  hideAll();
  clearActive();
  alertComponent.classList.remove("d-none");
  alertItem.classList.add("active");
};


// ===== BUTTON CONTROLS =====

btnTextInput.oninput = () => {
  previewButton.innerText = btnTextInput.value || "Button";
};

btnColorInput.oninput = () => {
  previewButton.style.backgroundColor = btnColorInput.value;
};

btnSizeSelect.onchange = () => {
  const size = btnSizeSelect.value;
  previewButton.style.padding =
    size === "Small" ? "6px 12px" :
    size === "Medium" ? "12px 24px" :
    "18px 36px";
};


// ===== CARD CONTROLS =====

cardTitleInput.oninput = () => {
  cardTitle.innerText = cardTitleInput.value || "Card Title";
};

cardTextInput.oninput = () => {
  cardText.innerText = cardTextInput.value || "This is a card";
};

cardBtnTextInput.oninput = () => {
  cardButton.innerText = cardBtnTextInput.value || "Action";
};

cardBtnColorInput.oninput = () => {
  cardButton.style.backgroundColor = cardBtnColorInput.value;
  cardButton.style.color = "white";
};


// ===== INPUT CONTROLS =====

inputPlaceholder.oninput = () => {
  previewInput.placeholder = inputPlaceholder.value || "Enter text";
};

inputSize.onchange = () => {
  previewInput.className = "form-control w-75";

  if (inputSize.value === "Small") {
    previewInput.classList.add("form-control-sm");
  } else if (inputSize.value === "Large") {
    previewInput.classList.add("form-control-lg");
  }
};


// ===== ALERT CONTROLS =====

alertText.oninput = () => {
  previewAlert.innerText = alertText.value || "This is an alert";
};

alertType.onchange = () => {
  previewAlert.className = `alert alert-${alertType.value}`;
};
