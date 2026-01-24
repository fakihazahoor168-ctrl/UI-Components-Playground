// ===== GET ELEMENTS =====
const btnItem = document.getElementById("btnItem");
const cardItem = document.getElementById("cardItem");
const inputItem = document.getElementById("inputItem");
const alertItem = document.getElementById("alertItem");

const buttonComponent = document.getElementById("buttonComponent");
const cardComponent = document.getElementById("cardComponent");
const inputComponent = document.getElementById("inputComponent");
const alertComponent = document.getElementById("alertComponent");

const buttonControls = document.getElementById("buttonControls");
const cardControls = document.getElementById("cardControls");
const inputControls = document.getElementById("inputControls");
const alertControls = document.getElementById("alertControls");

const generatedCodeTextarea = document.getElementById("generatedCode");

// Button inputs
const btnTextInput = document.getElementById("btnTextInput");
const btnColorInput = document.getElementById("btnColorInput");
const btnSizeSelect = document.getElementById("btnSizeSelect");
const btnRadius = document.getElementById("btnRadius");
const btnPadding = document.getElementById("btnPadding");
const btnMargin = document.getElementById("btnMargin");
const btnShadow = document.getElementById("btnShadow");
const btnBorderWidth = document.getElementById("btnBorderWidth");
const btnBorderColor = document.getElementById("btnBorderColor");

// Card inputs
const cardTitleInput = document.getElementById("cardTitleInput");
const cardTextInput = document.getElementById("cardTextInput");
const cardBtnTextInput = document.getElementById("cardBtnTextInput");
const cardBtnColorInput = document.getElementById("cardBtnColorInput");
const cardRadius = document.getElementById("cardRadius");
const cardBorderWidth = document.getElementById("cardBorderWidth");
const cardBorderColor = document.getElementById("cardBorderColor");
const cardMargin = document.getElementById("cardMargin");
const cardShadow = document.getElementById("cardShadow");

// Input
const inputPlaceholder = document.getElementById("inputPlaceholder");
const inputSize = document.getElementById("inputSize");

// Alert
const alertText = document.getElementById("alertText");
const alertType = document.getElementById("alertType");

// ===== PREVIEW ELEMENTS =====
let previewButton = document.querySelector("#buttonComponent button");
let cardTitle = document.querySelector(".card-title");
let cardText = document.querySelector(".card-text");
let cardButton = document.querySelector(".card a");
let previewInput = document.querySelector("#inputComponent input");
let previewAlert = document.querySelector("#alertComponent .alert");

// ===== HELPER FUNCTIONS =====
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
  document.querySelectorAll(".list-group-item").forEach(i => i.classList.remove("active"));
}

// Re-bind preview elements dynamically
function refreshPreviewElements() {
  previewButton = document.querySelector("#buttonComponent button");
  cardTitle = document.querySelector(".card-title");
  cardText = document.querySelector(".card-text");
  cardButton = document.querySelector(".card a");
  previewInput = document.querySelector("#inputComponent input");
  previewAlert = document.querySelector("#alertComponent .alert");
}

// ===== COMPONENT SWITCHING =====
btnItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar();
  buttonComponent.classList.remove("d-none");
  buttonControls.classList.remove("d-none");
  btnItem.classList.add("active");
  refreshPreviewElements();
};

cardItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar();
  cardComponent.classList.remove("d-none");
  cardControls.classList.remove("d-none");
  cardItem.classList.add("active");
  refreshPreviewElements();
};

inputItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar();
  inputComponent.classList.remove("d-none");
  inputControls.classList.remove("d-none");
  inputItem.classList.add("active");
  refreshPreviewElements();
};

alertItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar();
  alertComponent.classList.remove("d-none");
  alertControls.classList.remove("d-none");
  alertItem.classList.add("active");
  refreshPreviewElements();
};

// ===== BUTTON CONTROLS =====
btnTextInput.oninput = () => previewButton.innerText = btnTextInput.value || "Button";
btnColorInput.oninput = () => previewButton.style.backgroundColor = btnColorInput.value;
btnSizeSelect.onchange = () => {
  const size = btnSizeSelect.value;
  previewButton.style.padding = size==="Small"?"6px 12px":size==="Medium"?"12px 24px":"18px 36px";
};
btnRadius.oninput = () => previewButton.style.borderRadius = btnRadius.value + "px";
btnPadding.oninput = () => previewButton.style.padding = btnPadding.value + "px";
btnMargin.oninput = () => previewButton.style.margin = btnMargin.value + "px";
btnShadow.oninput = () => previewButton.style.boxShadow = btnShadow.value;
btnBorderWidth.oninput = () => previewButton.style.borderWidth = btnBorderWidth.value + "px";
btnBorderColor.oninput = () => previewButton.style.borderColor = btnBorderColor.value;

// ===== CARD CONTROLS =====
cardTitleInput.oninput = () => cardTitle.innerText = cardTitleInput.value || "Card Title";
cardTextInput.oninput = () => cardText.innerText = cardTextInput.value || "This is a card";
cardBtnTextInput.oninput = () => cardButton.innerText = cardBtnTextInput.value || "Action";
cardBtnColorInput.oninput = () => { cardButton.style.backgroundColor = cardBtnColorInput.value; cardButton.style.color = "white"; };
cardRadius.oninput = () => document.querySelector(".card").style.borderRadius = cardRadius.value + "px";
cardBorderWidth.oninput = () => document.querySelector(".card").style.borderWidth = cardBorderWidth.value + "px";
cardBorderColor.oninput = () => document.querySelector(".card").style.borderColor = cardBorderColor.value;
cardMargin.oninput = () => document.querySelector(".card").style.margin = cardMargin.value + "px";
cardShadow.oninput = () => document.querySelector(".card").style.boxShadow = cardShadow.value;

// ===== INPUT CONTROLS =====
inputPlaceholder.oninput = () => previewInput.placeholder = inputPlaceholder.value || "Enter text";
inputSize.onchange = () => {
  previewInput.className = "form-control w-75";
  if(inputSize.value === "Small") previewInput.classList.add("form-control-sm");
  else if(inputSize.value === "Large") previewInput.classList.add("form-control-lg");
};

// ===== ALERT CONTROLS =====
alertText.oninput = () => previewAlert.innerText = alertText.value || "This is an alert";
alertType.onchange = () => previewAlert.className = `alert alert-${alertType.value}`;

// ===== SAVE PRESET =====
document.getElementById("savePreset").onclick = () => {
  const preset = {
    button: {
      text: btnTextInput.value,
      color: btnColorInput.value,
      size: btnSizeSelect.value,
      radius: btnRadius.value,
      padding: btnPadding.value,
      margin: btnMargin.value,
      shadow: btnShadow.value,
      borderWidth: btnBorderWidth.value,
      borderColor: btnBorderColor.value
    },
    card: {
      title: cardTitleInput.value,
      text: cardTextInput.value,
      btnText: cardBtnTextInput.value,
      btnColor: cardBtnColorInput.value,
      radius: cardRadius.value,
      borderWidth: cardBorderWidth.value,
      borderColor: cardBorderColor.value,
      margin: cardMargin.value,
      shadow: cardShadow.value
    },
    input: {
      placeholder: inputPlaceholder.value,
      size: inputSize.value
    },
    alert: {
      text: alertText.value,
      type: alertType.value
    }
  };
  localStorage.setItem("uiPreset", JSON.stringify(preset));
  alert("Preset saved!");
};

// ===== LOAD PRESET =====
document.getElementById("loadPreset").onclick = () => {
  const preset = JSON.parse(localStorage.getItem("uiPreset"));
  if(!preset) { alert("No preset found!"); return; }

  // BUTTON
  btnTextInput.value = preset.button.text;
  btnColorInput.value = preset.button.color;
  btnSizeSelect.value = preset.button.size;
  btnRadius.value = preset.button.radius;
  btnPadding.value = preset.button.padding;
  btnMargin.value = preset.button.margin;
  btnShadow.value = preset.button.shadow;
  btnBorderWidth.value = preset.button.borderWidth;
  btnBorderColor.value = preset.button.borderColor;
  btnTextInput.oninput(); btnColorInput.oninput(); btnSizeSelect.onchange();
  btnRadius.oninput(); btnPadding.oninput(); btnMargin.oninput(); btnShadow.oninput();
  btnBorderWidth.oninput(); btnBorderColor.oninput();

  // CARD
  cardTitleInput.value = preset.card.title;
  cardTextInput.value = preset.card.text;
  cardBtnTextInput.value = preset.card.btnText;
  cardBtnColorInput.value = preset.card.btnColor;
  cardRadius.value = preset.card.radius;
  cardBorderWidth.value = preset.card.borderWidth;
  cardBorderColor.value = preset.card.borderColor;
  cardMargin.value = preset.card.margin;
  cardShadow.value = preset.card.shadow;
  cardTitleInput.oninput(); cardTextInput.oninput(); cardBtnTextInput.oninput();
  cardBtnColorInput.oninput(); cardRadius.oninput(); cardBorderWidth.oninput();
  cardBorderColor.oninput(); cardMargin.oninput(); cardShadow.oninput();

  // INPUT
  inputPlaceholder.value = preset.input.placeholder;
  inputSize.value = preset.input.size;
  inputPlaceholder.oninput(); inputSize.onchange();

  // ALERT
  alertText.value = preset.alert.text;
  alertType.value = preset.alert.type;
  alertText.oninput(); alertType.onchange();

  alert("Preset loaded!");
};

// ===== COPY GENERATED CODE =====
document.getElementById("copyCode").onclick = () => {
  let code = "";
  if(!buttonComponent.classList.contains("d-none")) code = previewButton.outerHTML;
  else if(!cardComponent.classList.contains("d-none")) code = document.querySelector(".card").outerHTML;
  else if(!inputComponent.classList.contains("d-none")) code = previewInput.outerHTML;
  else if(!alertComponent.classList.contains("d-none")) code = previewAlert.outerHTML;

  generatedCodeTextarea.value = code;

  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard!");
  });
};
