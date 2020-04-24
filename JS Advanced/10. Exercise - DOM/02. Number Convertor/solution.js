function solve() {

    let select = document.getElementById("selectMenuTo");
    let binary = document.createElement("option");
    binary.value = "binary";
    binary.textContent = "Binary";
    let hexadecimal = document.createElement("option");
    hexadecimal.value = "hexadecimal";
    hexadecimal.textContent = "Hexadecimal";
    select.appendChild(binary);
    select.appendChild(hexadecimal);

    let input = document.getElementById("input");
    let result = document.getElementById("result");
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener('click', function () {

        if (select.value === "binary") {
            result.value = (Number(input.value)).toString(2);
        } else if (select.value === "hexadecimal") {
            result.value = (Number(input.value)).toString(16).toUpperCase();
        }
    });

}
