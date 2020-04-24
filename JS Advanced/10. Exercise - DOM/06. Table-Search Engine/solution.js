function solve() {

   let input = document.getElementById("searchField");
   let button = document.getElementById("searchBtn");
   let rows = Array.from(document.querySelectorAll("tbody tr"));

   button.addEventListener("click", (e) => {

      for (let row of rows) {
         let cells = Array.from(row.querySelectorAll("td"));

         for (let cell of cells) {
            let cellValue = cell.innerHTML.toLowerCase();

            if (cellValue.includes(input.value.toLowerCase())) {
               row.className = "select";
            }

         }

      }
      input.value = "";
   });

}
