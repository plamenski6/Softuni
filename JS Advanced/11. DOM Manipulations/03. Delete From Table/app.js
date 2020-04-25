function deleteByEmail() {

    let input = document.getElementsByTagName("input")[0];
    let rows = Array.from(document.getElementsByTagName("tr"));
    let tbody = document.getElementsByTagName("tbody")[0];
    let result = document.getElementById("result");

    for (let row of rows) {
        let cells = Array.from(row.querySelectorAll("td"));

        for (let cell of cells) {
            if (input.value === cell.textContent) {
                tbody.removeChild(row);
                result.textContent = "Deleted."
            } else {
                result.textContent = "Not found."
            }
        }
    }

    input.value = "";

}
