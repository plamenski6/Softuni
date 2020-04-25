function addItem() {

    let input = document.getElementById("newItemText");
    let ul = document.getElementsByTagName("ul")[0];
    let addNewLi = document.createElement("li");
    ul.appendChild(addNewLi);
    addNewLi.textContent = input.value;
    input.value = "";

}
