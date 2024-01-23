// console.log("Hello. HW_11");

const caseForm = document.getElementById("form");
const caseList = document.getElementById("caseList");
const btnDelLast = document.getElementById("btnDelLast");
const btnClearList = document.getElementById("btnClearList");

// console.log(caseForm, caseList, btnClearList, btnDelLast);

function clearInputs(event) {
  event.target.caseTitle.value = "";
  event.target.descript.value = "";
}

function changeStatus(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
}

function clearList() {
  while (caseList.hasChildNodes()) {
    caseList.firstChild.remove();
  }
}

btnClearList.addEventListener("click", clearList);

function delLast() {
  if (caseList.hasChildNodes()) {
    caseList.lastChild.remove();
  }
}

btnDelLast.addEventListener("click", delLast);

caseForm.addEventListener("submit", (event) => {
  event.preventDefault(); //отключаем обновление страницы

  const caseTitle = {
    caseTitle: event.target.caseTitle.value,
    descript: event.target.descript.value,
  };

  const textItem = document.createElement("p");
  textItem.innerText = `Title: ${event.target.caseTitle.value} |=| Description: ${event.target.descript.value};`;

  textItem.style.cursor = "pointer";
//   textItem.style.color = "purple"; выше приоритет чем у css т.е. перебивает его

  textItem.onclick = changeStatus; // ! почему????? не передаем ничего и функция работает
  textItem.classList.add("caseStyle");

  caseList.append(textItem);
  clearInputs(event);
});
