// ===== SIDEBAR ITEMS =====
const btnItem = document.getElementById("btnItem");
const cardItem = document.getElementById("cardItem");
const inputItem = document.getElementById("inputItem");
const alertItem = document.getElementById("alertItem");

// ===== COMPONENTS =====
const buttonComponent = document.getElementById("buttonComponent");
const cardComponent = document.getElementById("cardComponent");
const inputComponent = document.getElementById("inputComponent");
const alertComponent = document.getElementById("alertComponent");

// ===== CONTROLS =====
const buttonControls = document.getElementById("buttonControls");
const cardControls = document.getElementById("cardControls");
const inputControls = document.getElementById("inputControls");
const alertControls = document.getElementById("alertControls");

// ===== PREVIEW ELEMENTS =====
const previewButton = document.querySelector("#buttonComponent button");
const previewCard = document.querySelector("#cardComponent .card");
const previewInput = document.querySelector("#inputComponent input");
const previewAlert = document.querySelector("#alertComponent .alert");

// ===== COMMON CONTROLS =====
const marginControl = document.getElementById("marginControl");
const widthControl = document.getElementById("widthControl");
const shadowControl = document.getElementById("shadowControl");

let activeComponent = previewButton;

// ===== HELPERS =====
function hideAllComponents() {
  buttonComponent.classList.add("d-none");
  cardComponent.classList.add("d-none");
  inputComponent.classList.add("d-none");
  alertComponent.classList.add("d-none");
}

function hideAllControls() {
  buttonControls.classList.add("d-none");
  cardControls.classList.add("d-none");
  inputControls.classList.add("d-none");
  alertControls.classList.add("d-none");
}

function clearActiveSidebar() {
  document.querySelectorAll(".list-group-item")
    .forEach(item => item.classList.remove("active"));
}

// ===== APPLY COMMON STYLES =====
function applyCommonStyles() {
  activeComponent.style.margin =
    marginControl.value ? marginControl.value + "px" : "";

  activeComponent.style.width =
    widthControl.value ? widthControl.value + "px" : "auto";

  const shadows = {
    none: "none",
    sm: "0 2px 5px rgba(0,0,0,.15)",
    md: "0 4px 10px rgba(0,0,0,.25)",
    lg: "0 10px 25px rgba(0,0,0,.35)"
  };

  activeComponent.style.boxShadow = shadows[shadowControl.value];
}

marginControl.oninput = applyCommonStyles;
widthControl.oninput = applyCommonStyles;
shadowControl.onchange = applyCommonStyles;

// ===== MAIN SWITCH FUNCTION =====
function switchComponent(type) {
  hideAllComponents();
  hideAllControls();
  clearActiveSidebar();

  if (type === "button") {
    buttonComponent.classList.remove("d-none");
    buttonControls.classList.remove("d-none");
    btnItem.classList.add("active");
    activeComponent = previewButton;
  }

  if (type === "card") {
    cardComponent.classList.remove("d-none");
    cardControls.classList.remove("d-none");
    cardItem.classList.add("active");
    activeComponent = previewCard;
  }

  if (type === "input") {
    inputComponent.classList.remove("d-none");
    inputControls.classList.remove("d-none");
    inputItem.classList.add("active");
    activeComponent = previewInput;
  }

  if (type === "alert") {
    alertComponent.classList.remove("d-none");
    alertControls.classList.remove("d-none");
    alertItem.classList.add("active");
    activeComponent = previewAlert;
  }

  applyCommonStyles();
}

// ===== SIDEBAR EVENTS =====
btnItem.onclick = () => switchComponent("button");
cardItem.onclick = () => switchComponent("card");
inputItem.onclick = () => switchComponent("input");
alertItem.onclick = () => switchComponent("alert");

// ===== BUTTON CONTROLS =====
btnTextInput.oninput = () =>
  previewButton.innerText = btnTextInput.value || "Button";

btnColorInput.oninput = () =>
  previewButton.style.backgroundColor = btnColorInput.value;

btnRadius.oninput = () =>
  previewButton.style.borderRadius = btnRadius.value + "px";

// ===== CARD CONTROLS =====
cardTitleInput.oninput = () =>
  document.querySelector(".card-title").innerText =
    cardTitleInput.value || "Card Title";

cardTextInput.oninput = () =>
  document.querySelector(".card-text").innerText =
    cardTextInput.value || "This is a card";

// ===== INPUT CONTROLS =====
inputPlaceholder.oninput = () =>
  previewInput.placeholder = inputPlaceholder.value || "Enter text";

// ===== ALERT CONTROLS =====
alertText.oninput = () =>
  previewAlert.innerText = alertText.value || "This is an alert";

alertType.onchange = () =>
  previewAlert.className = `alert alert-${alertType.value}`;
