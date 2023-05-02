const editMadLibs = document.querySelector(".madLibsEdit");
const previewMadLibs = document.querySelector(".madLibsPreview");

let container = document.createElement("div");
editMadLibs.appendChild(container);
container.classList.add("container");

let header = document.createElement("h1");
container.appendChild(header);
header.textContent = "Mad";
header.classList.add("header");

let span = document.createElement("span");
header.appendChild(span);
span.textContent = "Libs";
span.classList.add("span");
let editSectionCard = document.createElement("div");
container.appendChild(editSectionCard);
editSectionCard.classList.add("edit__section-card");

let editContainer = document.createElement("div");
editSectionCard.appendChild(editContainer);
editContainer.classList.add("edit__container");

let form = document.createElement("form");
editContainer.appendChild(form);
form.classList.add("form");

let editContainerLabel = document.createElement("label");
editContainerLabel.htmlFor = "noun1";
form.appendChild(editContainerLabel);
editContainerLabel.textContent = "Think of a noun :";

let editContainerInput = document.createElement("input");
editContainerInput.type = "text";
form.appendChild(editContainerInput);
editContainerInput.id = "noun1";
editContainerInput.classList.add("edit__container-input");

let editContainerLabel2 = document.createElement("label");
editContainerLabel2.htmlFor = "noun2";
form.appendChild(editContainerLabel2);
editContainerLabel2.textContent = "Think of another noun :";

let editContainerInput2 = document.createElement("input");
editContainerInput2.type = "text";
form.appendChild(editContainerInput2);
editContainerInput2.id = "noun2";
editContainerInput2.classList.add("edit__container-input");

let editContainerLabel3 = document.createElement("label");
editContainerLabel3.htmlFor = "verb1";
form.appendChild(editContainerLabel3);
editContainerLabel3.textContent = "Think of a verb :";

let editContainerInput3 = document.createElement("input");
editContainerInput3.type = "text";
form.appendChild(editContainerInput3);
editContainerInput3.id = "verb1";
editContainerInput3.classList.add("edit__container-input");

let editContainerLabel4 = document.createElement("label");
editContainerLabel4.htmlFor = "verb2";
form.appendChild(editContainerLabel4);
editContainerLabel4.textContent = "Think of another verb :";

let editContainerInput4 = document.createElement("input");
editContainerInput4.type = "text";
form.appendChild(editContainerInput4);
editContainerInput4.id = "verb2";
editContainerInput4.classList.add("edit__container-input");

let editContainerButton = document.createElement("button");
form.appendChild(editContainerButton);
editContainerButton.textContent = "Submit";
editContainerButton.classList.add("edit__container-button");
