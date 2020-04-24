function solve() {

   let buttonAddBread = document.getElementsByClassName("add-product")[0];
   let buttonAddMilk = document.getElementsByClassName("add-product")[1];
   let buttonAddTom = document.getElementsByClassName("add-product")[2];
   let textArea = document.getElementsByTagName("textarea")[0];
   let buttonCheckout = document.getElementsByClassName("checkout")[0];
   let products = []
   let total = 0;

   buttonAddBread.addEventListener("click", myFunction);
   function myFunction() {
      let item = document.getElementsByClassName("product-title")[0].innerHTML;
      let money = Number(document.getElementsByClassName("product-line-price")[0].innerHTML);
      textArea.innerHTML += `Added ${item} for ${money.toFixed(2)} to the cart.\n`;
      if (!products.includes(item)) {
         products.push(item);
      }
      total += money;

   };

   buttonAddMilk.addEventListener("click", myFunction1);
   function myFunction1() {
      let item = document.getElementsByClassName("product-title")[1].innerHTML;
      let money = Number(document.getElementsByClassName("product-line-price")[1].innerHTML);
      textArea.innerHTML += `Added ${item} for ${money.toFixed(2)} to the cart.\n`;
      if (!products.includes(item)) {
         products.push(item);
      }
      total += money;
   };

   buttonAddTom.addEventListener("click", myFunction2);
   function myFunction2() {
      let item = document.getElementsByClassName("product-title")[2].innerHTML;
      let money = Number(document.getElementsByClassName("product-line-price")[2].innerHTML);
      textArea.innerHTML += `Added ${item} for ${money.toFixed(2)} to the cart.\n`;
      if (!products.includes(item)) {
         products.push(item);
      }
      total += money;
   };

   buttonCheckout.addEventListener("click", myFunction3)
   function myFunction3() {
      textArea.innerHTML += `You bought ${products.join(", ")} for ${total.toFixed(2)}.`;
      buttonAddBread.removeEventListener("click", myFunction);
      buttonAddMilk.removeEventListener("click", myFunction1);
      buttonAddTom.removeEventListener("click", myFunction2);
      buttonCheckout.removeEventListener("click", myFunction3);
   };

}
