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

// Button inputs
const btnTextInput = document.getElementById("btnTextInput");
const btnColorInput = document.getElementById("btnColorInput");
const btnSizeSelect = document.getElementById("btnSizeSelect");
const btnRadius = document.getElementById("btnRadius");
const btnPadding = document.getElementById("btnPadding");
const btnMargin = document.getElementById("btnMargin");
const btnWidth = document.getElementById("btnWidth");
const btnShadow = document.getElementById("btnShadow");
const saveBtnPreset = document.getElementById("saveBtnPreset");
const loadBtnPreset = document.getElementById("loadBtnPreset");

// Card inputs
const cardTitleInput = document.getElementById("cardTitleInput");
const cardTextInput = document.getElementById("cardTextInput");
const cardBtnTextInput = document.getElementById("cardBtnTextInput");
const cardBtnColorInput = document.getElementById("cardBtnColorInput");
const cardRadius = document.getElementById("cardRadius");
const cardBorderColor = document.getElementById("cardBorderColor");
const cardMargin = document.getElementById("cardMargin");
const cardWidth = document.getElementById("cardWidth");
const cardShadow = document.getElementById("cardShadow");
const saveCardPreset = document.getElementById("saveCardPreset");
const loadCardPreset = document.getElementById("loadCardPreset");

// Input
const inputPlaceholder = document.getElementById("inputPlaceholder");
const inputSize = document.getElementById("inputSize");
const saveInputPreset = document.getElementById("saveInputPreset");
const loadInputPreset = document.getElementById("loadInputPreset");

// Alert
const alertText = document.getElementById("alertText");
const alertType = document.getElementById("alertType");
const saveAlertPreset = document.getElementById("saveAlertPreset");
const loadAlertPreset = document.getElementById("loadAlertPreset");

// Preview
const previewButton = document.querySelector("#buttonComponent button");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");
const cardButton = document.querySelector(".card a");
const previewInput = document.querySelector("#inputComponent input");
const previewAlert = document.querySelector("#alertComponent .alert");

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
  document.querySelectorAll(".list-group-item").forEach(item => item.classList.remove("active"));
}

// ===== COMPONENT SWITCHING =====
btnItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar(); buttonComponent.classList.remove("d-none"); buttonControls.classList.remove("d-none"); btnItem.classList.add("active"); };
cardItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar(); cardComponent.classList.remove("d-none"); cardControls.classList.remove("d-none"); cardItem.classList.add("active"); };
inputItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar(); inputComponent.classList.remove("d-none"); inputControls.classList.remove("d-none"); inputItem.classList.add("active"); };
alertItem.onclick = () => { hideAllComponents(); hideAllControls(); clearActiveSidebar(); alertComponent.classList.remove("d-none"); alertControls.classList.remove("d-none"); alertItem.classList.add("active"); };

// ===== BUTTON CONTROLS =====
btnTextInput.oninput = () => previewButton.innerText = btnTextInput.value || "Button";
btnColorInput.oninput = () => previewButton.style.backgroundColor = btnColorInput.value;
btnSizeSelect.onchange = () => { const size = btnSizeSelect.value; previewButton.style.padding = size==="Small"?"6px 12px":size==="Medium"?"12px 24px":"18px 36px"; };
btnRadius.oninput = () => previewButton.style.borderRadius = btnRadius.value + "px";
btnPadding.oninput = () => previewButton.style.padding = btnPadding.value + "px";
btnMargin.oninput = () => previewButton.style.margin = btnMargin.value + "px";
btnWidth.oninput = () => previewButton.style.width = btnWidth.value;
btnShadow.onchange = () => { previewButton.classList.remove("shadow-sm","shadow","shadow-lg"); if(btnShadow.value!=="none") previewButton.classList.add(btnShadow.value); };

// ===== CARD CONTROLS =====
cardTitleInput.oninput = () => cardTitle.innerText = cardTitleInput.value || "Card Title";
cardTextInput.oninput = () => cardText.innerText = cardTextInput.value || "This is a card";
cardBtnTextInput.oninput = () => cardButton.innerText = cardBtnTextInput.value || "Action";
cardBtnColorInput.oninput = () => { cardButton.style.backgroundColor = cardBtnColorInput.value; cardButton.style.color="white"; };
cardRadius.oninput = () => document.querySelector(".card").style.borderRadius = cardRadius.value + "px";
cardBorderColor.oninput = () => document.querySelector(".card").style.borderColor = cardBorderColor.value;
cardMargin.oninput = () => document.querySelector(".card").style.margin = cardMargin.value + "px";
cardWidth.oninput = () => document.querySelector(".card").style.width = cardWidth.value;
cardShadow.onchange = () => { document.querySelector(".card").classList.remove("shadow-sm","shadow","shadow-lg"); if(cardShadow.value!=="none") document.querySelector(".card").classList.add(cardShadow.value); };

// ===== INPUT CONTROLS =====
inputPlaceholder.oninput = () => previewInput.placeholder = inputPlaceholder.value || "Enter text";
inputSize.onchange = () => { previewInput.className="form-control w-75"; if(inputSize.value==="Small") previewInput.classList.add("form-control-sm"); else if(inputSize.value==="Large") previewInput.classList.add("form-control-lg"); };

// ===== ALERT CONTROLS =====
alertText.oninput = () => previewAlert.innerText = alertText.value || "This is an alert";
alertType.onchange = () => previewAlert.className = `alert alert-${alertType.value}`;

// ===== SAVE + LOAD PRESETS =====
// Button
saveBtnPreset.onclick = () => { 
  localStorage.setItem("buttonPreset", JSON.stringify({
    text: previewButton.innerText, bgColor: previewButton.style.backgroundColor,
    padding: previewButton.style.padding, radius: previewButton.style.borderRadius,
    margin: previewButton.style.margin, width: previewButton.style.width,
    shadow: btnShadow.value
  }));
  alert("Button preset saved!");
};
loadBtnPreset.onclick = () => {
  const saved=JSON.parse(localStorage.getItem("buttonPreset")); if(!saved) return alert("No preset found!");
  previewButton.innerText=saved.text; previewButton.style.backgroundColor=saved.bgColor;
  previewButton.style.padding=saved.padding; previewButton.style.borderRadius=saved.radius;
  previewButton.style.margin=saved.margin; previewButton.style.width=saved.width;
  previewButton.classList.remove("shadow-sm","shadow","shadow-lg"); if(saved.shadow!=="none") previewButton.classList.add(saved.shadow);
  btnTextInput.value=saved.text; btnColorInput.value=saved.bgColor; btnPadding.value=parseInt(saved.padding)||0;
  btnRadius.value=parseInt(saved.radius)||0; btnMargin.value=parseInt(saved.margin)||0; btnWidth.value=saved.width; btnShadow.value=saved.shadow;
};

// Card
saveCardPreset.onclick = () => {
  const cardEl=document.querySelector(".card");
  localStorage.setItem("cardPreset", JSON.stringify({
    title: cardTitle.innerText, text: cardText.innerText, btnText: cardButton.innerText,
    btnColor: cardButton.style.backgroundColor, radius: cardEl.style.borderRadius,
    borderColor: cardEl.style.borderColor, margin: cardEl.style.margin, width: cardEl.style.width,
    shadow: cardShadow.value
  }));
  alert("Card preset saved!");
};
loadCardPreset.onclick = () => {
  const saved=JSON.parse(localStorage.getItem("cardPreset")); if(!saved) return alert("No preset found!");
  const cardEl=document.querySelector(".card");
  cardTitle.innerText=saved.title; cardText.innerText=saved.text; cardButton.innerText=saved.btnText;
  cardButton.style.backgroundColor=saved.btnColor; cardButton.style.color="white";
  cardEl.style.borderRadius=saved.radius; cardEl.style.borderColor=saved.borderColor;
  cardEl.style.margin=saved.margin; cardEl.style.width=saved.width;
  cardEl.classList.remove("shadow-sm","shadow","shadow-lg"); if(saved.shadow!=="none") cardEl.classList.add(saved.shadow);
  cardTitleInput.value=saved.title; cardTextInput.value=saved.text; cardBtnTextInput.value=saved.btnText;
  cardBtnColorInput.value=saved.btnColor; cardRadius.value=parseInt(saved.radius)||0; cardBorderColor.value=saved.borderColor;
  cardMargin.value=parseInt(saved.margin)||0; cardWidth.value=saved.width; cardShadow.value=saved.shadow;
};

// Input
saveInputPreset.onclick = () => {
  localStorage.setItem("inputPreset", JSON.stringify({
    placeholder: previewInput.placeholder,
    size: inputSize.value
  }));
  alert("Input preset saved!");
};
loadInputPreset.onclick = () => {
  const saved=JSON.parse(localStorage.getItem("inputPreset")); if(!saved) return alert("No preset found!");
  previewInput.placeholder=saved.placeholder; inputSize.value=saved.size;
  previewInput.className="form-control w-75";
  if(saved.size==="Small") previewInput.classList.add("form-control-sm");
  else if(saved.size==="Large") previewInput.classList.add("form-control-lg");
  inputPlaceholder.value=saved.placeholder;
};

// Alert
saveAlertPreset.onclick = () => {
  localStorage.setItem("alertPreset", JSON.stringify({
    text: previewAlert.innerText,
    type: alertType.value
  }));
  alert("Alert preset saved!");
};
loadAlertPreset.onclick = () => {
  const saved=JSON.parse(localStorage.getItem("alertPreset")); if(!saved) return alert("No preset found!");
  previewAlert.innerText=saved.text; previewAlert.className=`alert alert-${saved.type}`;
  alertText.value=saved.text; alertType.value=saved.type;
};
