function addItem() {

    let input = document.getElementById("newText");
    let ul = document.getElementById("items");
    let addNewLi = document.createElement("li");
    ul.appendChild(addNewLi);
    addNewLi.textContent = input.value;
    input.value = "";

    let link = document.createElement("a")
    addNewLi.appendChild(link);
    link.textContent = `[Delete]`;
    link.href = "#";

    link.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

}
