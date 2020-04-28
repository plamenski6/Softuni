function solve() {

   let name = document.getElementsByTagName("input")[1];
   let quantity = document.getElementsByTagName("input")[2];
   let price = document.getElementsByTagName("input")[3];

   let availableProducts = document.getElementsByTagName("ul")[0];

   let addButton = document.getElementsByTagName("button")[1];

   addButton.addEventListener("click", (e) => {
      e.preventDefault();

      let li = document.createElement("li");

      let span = document.createElement("span");
      span.textContent = name.value;

      let strong = document.createElement("strong");
      strong.textContent = `Available: ${Number(quantity.value)}`;

      let div = document.createElement("div");
      let divStrong = document.createElement("strong");
      divStrong.textContent = Number(price.value).toFixed(2);
      let divButton = document.createElement("button");
      divButton.textContent = "Add to Client's List";

      availableProducts.appendChild(li);
      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(div);
      div.appendChild(divStrong);
      div.appendChild(divButton);

      name.value = "";
      quantity.value = "";
      price.value = "";
   });

   let inputFilter = document.getElementById("filter");
   let filterButton = document.getElementsByTagName("button")[0];

   filterButton.addEventListener("click", (e) => {

      Array.from(availableProducts.children).forEach((el) => {

         let productName = el.getElementsByTagName("span")[0];
         if (productName.textContent.toLowerCase().includes(inputFilter.value.toLowerCase())){
            el.style.display = "block";
         } else {
            el.style.display = "none";
         }
      });
   });

   let myProducts = document.getElementsByTagName('ul')[1];
   let totalPrice = document.getElementsByTagName("h1")[1];
   let total = 0;

   availableProducts.addEventListener("click", (e) => {
      
      if(e.target.textContent === "Add to Client's List"){
         let productName = e.target.parentNode.parentNode.getElementsByTagName("span")[0].textContent;
         let li = document.createElement("li");
         li.textContent = productName;

         let productPrice = e.target.parentNode.getElementsByTagName("strong")[0].textContent; 
         let strong = document.createElement("strong");
         strong.textContent = productPrice;

         myProducts.appendChild(li);
         li.appendChild(strong);

         total += Number(productPrice);
         totalPrice.textContent = `Total Price: ${total.toFixed(2)}`;

         let availableCount = e.target.parentNode.parentNode.getElementsByTagName("strong")[0];
         let count = Number(availableCount.textContent.split(" ")[1]);
         availableCount.textContent = `Available: ${count - 1}`;
         if(count - 1 === 0){
            e.target.parentNode.parentNode.remove();
         }
      }
   });

   let buyButton = document.getElementsByTagName("button")[2];

   buyButton.addEventListener("click", (e) => {
      myProducts.textContent = "";
      totalPrice.textContent = `Total Price: 0.00`;
   })
   
}
