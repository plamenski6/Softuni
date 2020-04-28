function solve() {

    let bookInput = document.getElementsByTagName("input")[0];
    let yearInput = document.getElementsByTagName("input")[1];
    let priceInput = document.getElementsByTagName("input")[2];
    let addButton = document.getElementsByTagName("button")[0];
    let oldBooks = document.getElementsByClassName("bookShelf")[0];
    let newBooks = document.getElementsByClassName("bookShelf")[1];
    let h1 = document.getElementsByTagName("h1")[1];
    let total = 0;

    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (yearInput.value >= 2000) {
            let div = document.createElement("div");
            div.className = "book";
            newBooks.appendChild(div);

            let p = document.createElement("p");
            p.textContent = `${bookInput.value} [${yearInput.value}]`;
            div.appendChild(p);

            let buyButton = document.createElement("button");
            buyButton.textContent = `Buy it only for ${Number(priceInput.value).toFixed(2)} BGN`;
            div.appendChild(buyButton);

            let moveOldButton = document.createElement("button");
            moveOldButton.textContent = 'Move to old section';
            div.appendChild(moveOldButton);

            buyButton.addEventListener("click", (e) => {
                e.preventDefault();
                
                total += Number(priceInput.value);
                h1.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;

                div.remove();
            });

            moveOldButton.addEventListener("click", (e) => {
                e.preventDefault();

                let oldDiv = document.createElement("div");
                oldDiv.className = "book";
                oldBooks.appendChild(oldDiv);
    
                let oldP = document.createElement("p");
                oldP.textContent = `${bookInput.value} [${yearInput.value}]`;
                oldDiv.appendChild(oldP);
    
                let oldBuyButton = document.createElement("button");
                let priceBook = Number(priceInput.value);
                let discount = priceBook * 0.15;
                priceBook -= discount;
                oldBuyButton.textContent = `Buy it only for ${priceBook.toFixed(2)} BGN`;
                oldDiv.appendChild(oldBuyButton);
                
                oldBuyButton.addEventListener("click", (e) => {
                    e.preventDefault();

                    total += priceBook;
                    h1.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
                   
                    oldDiv.remove();
                })

                div.remove();
            });
        } else {
            let div = document.createElement("div");
            div.className = "book";
            oldBooks.appendChild(div);

            let p = document.createElement("p");
            p.textContent = `${bookInput.value} [${yearInput.value}]`;
            div.appendChild(p);

            let buyButton = document.createElement("button");
            let priceBook = Number(priceInput.value);
            let discount = priceBook * 0.15;
            priceBook -= discount;
            buyButton.textContent = `Buy it only for ${priceBook.toFixed(2)} BGN`;
            div.appendChild(buyButton);

            buyButton.addEventListener("click", (e) => {
                e.preventDefault();

                total += priceBook;
                h1.textContent = `Total Store Profit: ${total.toFixed(2)} BGN`;
                
                div.remove();
            });
        }
    });
    
}
