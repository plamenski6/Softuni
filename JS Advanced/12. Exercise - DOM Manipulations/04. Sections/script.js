function create(words) {

   let div = document.getElementById("content");

   for (let i of words) {
      let newDiv = document.createElement("div");
      div.appendChild(newDiv);
      let p = document.createElement("p");
      newDiv.appendChild(p);
      p.textContent = i;
      p.style.display = "none";

      newDiv.addEventListener('click', (e) => {

         p.style.display = "block";
      });
   }

}
