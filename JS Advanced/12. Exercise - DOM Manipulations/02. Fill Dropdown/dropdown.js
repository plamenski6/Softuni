function addItem() {

    let text = document.getElementById("newItemText");
    let textValue = document.getElementById("newItemValue");
    let menu = document.getElementById("menu");

    let option = document.createElement("option");
    menu.appendChild(option);
    option.textContent = text.value;
    option.value = textValue.value;

    text.value = "";
    textValue.value = "";

}
