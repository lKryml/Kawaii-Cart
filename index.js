const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");
let shoppingList = [];
getListFromLocalStorage();
renderItems(shoppingList);
addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  shoppingList.push(inputValue);
  saveListToLocalStorage();
  renderItems(shoppingList);
  clearInputFieldEl();
});

function renderItems(array) {
  clearShoppingListEl();
  for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    appendItemToShoppingListEl(currentItem);
  }
}

function appendItemToShoppingListEl(item) {
  let newEl = document.createElement("li");
  newEl.textContent = item;
  newEl.addEventListener("click", function () {
    let index = shoppingList.indexOf(item);
    shoppingList.splice(index, 1);
    saveListToLocalStorage();
    renderItems(shoppingList);
  });
  shoppingListEl.append(newEl);
}

function saveListToLocalStorage() {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

function getListFromLocalStorage() {
  const storedData = localStorage.getItem("shoppingList");
  shoppingList = storedData ? JSON.parse(storedData) : [];
}

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}
