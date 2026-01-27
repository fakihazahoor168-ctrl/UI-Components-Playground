// ===== ELEMENTS =====
const preview = document.getElementById("previewArea");
const codeBox = document.getElementById("codeBox");
const sidebarItems = document.querySelectorAll(".sidebar li");

// Controls
const controls = {
  button: document.getElementById("buttonControls"),
  card: document.getElementById("cardControls"),
  navbar: document.getElementById("navbarControls"),
  modal: document.getElementById("modalControls"),
  input: document.getElementById("inputControls"),
  alert: document.getElementById("alertControls"),
  badge: document.getElementById("badgeControls"),
  progress: document.getElementById("progressControls"),
  loader: document.getElementById("loaderControls")
};

// Track current element
let currentElement = preview.querySelector(".draggable") || preview.firstElementChild;

// ===== HELPER =====
function hideAllControls(){ Object.values(controls).forEach(c=>c?.classList.add("d-none")); }
function updateCode(){ codeBox.value = preview.innerHTML.trim(); }
function enableDrag(){
  preview.querySelectorAll(".draggable").forEach(el=>{
    el.setAttribute("draggable",true);
    el.addEventListener("dragstart",e=>{ window.draggedElement=el; });
  });
}
preview.addEventListener("dragover", e=>e.preventDefault());
preview.addEventListener("drop", e=>{
  e.preventDefault();
  if(window.draggedElement) preview.appendChild(window.draggedElement);
  updateCode();
});

// ===== LOAD COMPONENT =====
function loadComponent(type){
  hideAllControls();
  switch(type){
    case "button": controls.button?.classList.remove("d-none"); preview.innerHTML = `<button class="btn btn-primary draggable">Button</button>`; break;
    case "card": controls.card?.classList.remove("d-none"); preview.innerHTML = `<div class="card draggable" style="width:18rem"><div class="card-body"><h5 class="card-title">Card Title</h5><p class="card-text">Card text</p><a href="#" class="btn btn-primary btn-sm">Action</a></div></div>`; break;
    case "input": controls.input?.classList.remove("d-none"); preview.innerHTML = `<input class="form-control draggable w-75" placeholder="Enter text">`; break;
    case "alert": controls.alert?.classList.remove("d-none"); preview.innerHTML = `<div class="alert alert-success draggable">This is a success alert</div>`; break;
    case "badge": controls.badge?.classList.remove("d-none"); preview.innerHTML = `<span class="badge bg-primary draggable">Badge</span>`; break;
    case "progress": controls.progress?.classList.remove("d-none"); preview.innerHTML = `<div class="progress draggable" style="width:200px"><div class="progress-bar bg-success" role="progressbar" style="width:50%"></div></div>`; break;
    case "loader": controls.loader?.classList.remove("d-none"); loadLoader(); break;
    case "navbar": controls.navbar?.classList.remove("d-none"); preview.innerHTML = `<nav class="navbar navbar-dark bg-dark draggable" style="height:60px;padding:10px"><div class="container-fluid"><a class="navbar-brand text-white" href="#">Brand</a></div></nav>`; renderNavbarMenuInputs(); updateNavbarMenu(); break;
    case "modal": controls.modal?.classList.remove("d-none"); preview.innerHTML = `<button class="btn btn-primary draggable" data-bs-toggle="modal" data-bs-target="#demoModal">Open Modal</button><div class="modal fade" id="demoModal"><div class="modal-dialog"><div class="modal-content draggable" style="border-radius:8px"><div class="modal-header bg-primary text-white"><h5 class="modal-title">Modal Title</h5></div><div class="modal-body">This is modal body</div><div class="modal-footer"><button class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div></div></div></div>`; break;
  }
  currentElement = preview.querySelector(".draggable") || preview.firstElementChild;
  enableDrag();
  updateCode();
}

// ===== SIDEBAR CLICK =====
sidebarItems.forEach(item=>item.addEventListener("click",()=>{
  sidebarItems.forEach(i=>i.classList.remove("active"));
  item.classList.add("active");
  loadComponent(item.dataset.comp);
}));

// ===== BUTTON CONTROLS =====
const btnTextInput=document.getElementById("btnTextInput");
const btnColorInput=document.getElementById("btnColorInput");
const btnRadius=document.getElementById("btnRadius");
const btnShadow=document.getElementById("btnShadow");
btnTextInput.oninput=()=>{ currentElement.innerText=btnTextInput.value||"Button"; updateCode(); };
btnColorInput.oninput=()=>{ currentElement.style.backgroundColor=btnColorInput.value; updateCode(); };
btnRadius.oninput=()=>{ currentElement.style.borderRadius=btnRadius.value+"px"; updateCode(); };
btnShadow.oninput=()=>{ currentElement.style.boxShadow=btnShadow.value; updateCode(); };

// ===== CARD CONTROLS =====
const cardTitleInput=document.getElementById("cardTitleInput");
const cardTextInput=document.getElementById("cardTextInput");
const cardBtnTextInput=document.getElementById("cardBtnTextInput");
const cardBtnColorInput=document.getElementById("cardBtnColorInput");
const cardRadiusInput=document.getElementById("cardRadius");
const cardShadowInput=document.getElementById("cardShadow");
cardTitleInput.oninput=()=>{ const t=currentElement.querySelector(".card-title"); if(t)t.innerText=cardTitleInput.value||"Card Title"; updateCode(); };
cardTextInput.oninput=()=>{ const t=currentElement.querySelector(".card-text"); if(t)t.innerText=cardTextInput.value||"Card Text"; updateCode(); };
cardBtnTextInput.oninput=()=>{ const t=currentElement.querySelector("a"); if(t)t.innerText=cardBtnTextInput.value||"Action"; updateCode(); };
cardBtnColorInput.oninput=()=>{ const t=currentElement.querySelector("a"); if(t){t.style.backgroundColor=cardBtnColorInput.value;t.style.color="white"} updateCode(); };
cardRadiusInput.oninput=()=>{ currentElement.style.borderRadius=cardRadiusInput.value+"px"; updateCode(); };
cardShadowInput.oninput=()=>{ currentElement.style.boxShadow=cardShadowInput.value; updateCode(); };

// ===== INPUT CONTROLS =====
const inputPlaceholder = document.getElementById("inputPlaceholder");
const inputColor = document.getElementById("inputColor");
const inputRadius = document.getElementById("inputRadius");

// Placeholder live update
inputPlaceholder.oninput = () => {
  if (currentElement && currentElement.tagName === "INPUT") {
    currentElement.placeholder = inputPlaceholder.value || "Enter text";
    updateCode();
  }
};

// Text color live update
inputColor.oninput = () => {
  if (currentElement && currentElement.tagName === "INPUT") {
    currentElement.style.color = inputColor.value;
    updateCode();
  }
};

// Border radius live update
inputRadius.oninput = () => {
  if (currentElement && currentElement.tagName === "INPUT") {
    currentElement.style.borderRadius = inputRadius.value + "px";
    updateCode();
  }
};

// ===== ALERT CONTROLS =====
const alertText=document.getElementById("alertText");
const alertType=document.getElementById("alertType");
alertText.oninput=()=>{ if(currentElement) currentElement.innerText=alertText.value||"Alert"; updateCode(); };
alertType.onchange=()=>{ if(currentElement){ currentElement.className=`alert alert-${alertType.value} draggable`; } updateCode(); };

// ===== BADGE CONTROLS =====
const badgeText=document.getElementById("badgeText");
const badgeColor=document.getElementById("badgeColor");
badgeText.oninput=()=>{ if(currentElement) currentElement.innerText=badgeText.value||"Badge"; updateCode(); };
badgeColor.oninput=()=>{ if(currentElement) currentElement.style.backgroundColor=badgeColor.value; updateCode(); };

// ===== PROGRESS CONTROLS =====
const progressValue=document.getElementById("progressValue");
const progressColor=document.getElementById("progressColor");
progressValue.oninput=()=>{ if(currentElement) currentElement.querySelector(".progress-bar").style.width=progressValue.value+"%"; updateCode(); };
progressColor.oninput=()=>{ if(currentElement) currentElement.querySelector(".progress-bar").style.backgroundColor=progressColor.value; updateCode(); };

// ===== LOADER CONTROLS =====
const loaderColor=document.getElementById("loaderColor");
const loaderSize=document.getElementById("loaderSize");
const loaderRole=document.getElementById("loaderRole");
function loadLoader(){
  preview.innerHTML=`<div class="spinner-${loaderRole.value} draggable" role="status" draggable="true"><span class="visually-hidden">Loading...</span></div>`;
  currentElement=preview.querySelector(".draggable");
  if(loaderSize.value) currentElement.style.width=currentElement.style.height=loaderSize.value+"px";
  if(loaderColor.value) currentElement.style.color=loaderColor.value;
  enableDrag(); updateCode();
}
loaderColor.oninput=()=>{ if(currentElement) currentElement.style.color=loaderColor.value; updateCode(); };
loaderSize.oninput=()=>{ if(currentElement){ currentElement.style.width=currentElement.style.height=loaderSize.value+"px"; updateCode(); } };
loaderRole.onchange=()=>loadLoader();

// ===== NAVBAR CONTROLS =====
const navbarBrandText=document.getElementById("navbarBrandText");
const navbarBrandColor=document.getElementById("navbarBrandColor");
const navbarBrandSize=document.getElementById("navbarBrandSize");
const navbarMenuList=document.getElementById("navbarMenuList");
const addMenuItemBtn=document.getElementById("addMenuItem");
const navbarMenuColor=document.getElementById("navbarMenuColor");
const navbarMenuFontSize=document.getElementById("navbarMenuFontSize");
const navbarBgColor=document.getElementById("navbarBgColor");
const navbarHeight=document.getElementById("navbarHeight");
const navbarPadding=document.getElementById("navbarPadding");
const navbarShadow=document.getElementById("navbarShadow");
const navbarFixedTop=document.getElementById("navbarFixedTop");
let menuItems=["Home","About","Contact"];
function renderNavbarMenuInputs(){
  navbarMenuList.innerHTML="";
  menuItems.forEach((item,index)=>{
    const div=document.createElement("div"); div.classList.add("d-flex","mb-1");
    div.innerHTML=`<input type="text" class="form-control form-control-sm me-1 menu-input" value="${item}" data-index="${index}"><button class="btn btn-sm btn-danger remove-menu">x</button>`;
    navbarMenuList.appendChild(div);
  });
  navbarMenuList.querySelectorAll(".menu-input").forEach(input=>{ input.oninput=e=>{ menuItems[e.target.dataset.index]=e.target.value; updateNavbarMenu(); } });
  navbarMenuList.querySelectorAll(".remove-menu").forEach((btn,i)=>{ btn.onclick=()=>{ menuItems.splice(i,1); renderNavbarMenuInputs(); updateNavbarMenu(); } });
}
function updateNavbarMenu(){
  const ulContainer=currentElement.querySelector("ul.navbar-nav");
  let ul=ulContainer;
  if(!ul){ ul=document.createElement("ul"); ul.classList.add("navbar-nav","ms-auto","d-flex","flex-row","gap-2"); currentElement.querySelector(".container-fluid").appendChild(ul); }
  ul.innerHTML="";
  menuItems.forEach(text=>{ const li=document.createElement("li"); li.classList.add("nav-item"); li.innerHTML=`<a href="#" class="nav-link text-white" style="color:${navbarMenuColor.value||'white'}; font-size:${navbarMenuFontSize.value||16}px">${text}</a>`; ul.appendChild(li); });
  updateCode();
}
navbarBrandText.oninput=()=>{ const b=currentElement.querySelector(".navbar-brand"); if(b)b.innerText=navbarBrandText.value||"Brand"; updateCode(); };
navbarBrandColor.oninput=()=>{ const b=currentElement.querySelector(".navbar-brand"); if(b)b.style.color=navbarBrandColor.value; updateCode(); };
navbarBrandSize.oninput=()=>{ const b=currentElement.querySelector(".navbar-brand"); if(b)b.style.fontSize=navbarBrandSize.value+"px"; updateCode(); };
addMenuItemBtn.onclick=()=>{ menuItems.push("New Item"); renderNavbarMenuInputs(); updateNavbarMenu(); };
navbarMenuColor.oninput=()=>updateNavbarMenu();
navbarMenuFontSize.oninput=()=>updateNavbarMenu();
navbarBgColor.oninput=()=>currentElement.style.backgroundColor=navbarBgColor.value;
navbarHeight.oninput=()=>currentElement.style.height=navbarHeight.value+"px";
navbarPadding.oninput=()=>currentElement.style.padding=navbarPadding.value+"px";
navbarShadow.oninput=()=>currentElement.style.boxShadow=navbarShadow.value;
navbarFixedTop.onchange=()=>{ currentElement.classList.toggle("fixed-top",navbarFixedTop.checked); updateCode(); };
renderNavbarMenuInputs();
updateNavbarMenu();

// ===== MODAL CONTROLS =====
const modalTitle=document.getElementById("modalTitle");
const modalBody=document.getElementById("modalBody");
const modalOpenBtnText=document.getElementById("modalOpenBtnText");
const modalCloseBtnText=document.getElementById("modalCloseBtnText");
const modalRadius=document.getElementById("modalRadius");
const modalHeaderColor=document.getElementById("modalHeaderColor");
const modalBodyColor=document.getElementById("modalBodyColor");
modalTitle.oninput=()=>{ const h=currentElement.querySelector(".modal-title"); if(h)h.innerText=modalTitle.value||"Modal Title"; updateCode(); };
modalBody.oninput=()=>{ const b=currentElement.querySelector(".modal-body"); if(b)b.innerText=modalBody.value||"This is modal body"; updateCode(); };
modalOpenBtnText.oninput=()=>{ const btn=preview.querySelector('[data-bs-toggle="modal"]'); if(btn) btn.innerText=modalOpenBtnText.value||"Open Modal"; updateCode(); };
modalCloseBtnText.oninput=()=>{ const btn=currentElement.querySelector("[data-bs-dismiss='modal']"); if(btn) btn.innerText=modalCloseBtnText.value||"Close"; updateCode(); };
modalRadius.oninput=()=>{ currentElement.style.borderRadius=modalRadius.value+"px"; updateCode(); };
modalHeaderColor.oninput=()=>{ const h=currentElement.querySelector(".modal-header"); if(h) h.style.backgroundColor=modalHeaderColor.value; updateCode(); };
modalBodyColor.oninput=()=>{ const b=currentElement.querySelector(".modal-body"); if(b) b.style.backgroundColor=modalBodyColor.value; updateCode(); };

// ===== COPY CODE =====
document.getElementById("copyCode").onclick=()=>{ navigator.clipboard.writeText(codeBox.value); alert("HTML copied to clipboard!"); };
