function solution() {
   
    let addInput = document.getElementsByTagName("input")[0];
    let addButton = document.getElementsByTagName("button")[0];
    let listGifts = document.getElementsByTagName("ul")[0];
    let sentGifts = document.getElementsByTagName("ul")[1];
    let discardGifts = document.getElementsByTagName("ul")[2];

    addButton.addEventListener("click", (e) => {

        let liGift = document.createElement("li");
        liGift.textContent = addInput.value;
        liGift.className = "gift";
        listGifts.appendChild(liGift);
        
        let sendButton = document.createElement("button");
        sendButton.textContent = "Send";
        sendButton.id = "sendButton";
        liGift.appendChild(sendButton);

        let discardButton = document.createElement("button");
        discardButton.textContent = "Discard";
        discardButton.id = "discardButton";
        liGift.appendChild(discardButton);

        sendButton.addEventListener("click", (e) => {

            let liSent = document.createElement("li");
            let index = liGift.textContent.indexOf("Send");
            liSent.textContent = liGift.textContent.slice(0,index);
            liSent.className = "gift";
            sentGifts.appendChild(liSent);

            liGift.remove();
        });

        discardButton.addEventListener("click", (e) => {

            let liDiscard = document.createElement("li");
            let index = liGift.textContent.indexOf("Send");
            liDiscard.textContent = liGift.textContent.slice(0,index);
            liDiscard.className = "gift";
            discardGifts.appendChild(liDiscard);
            
            liGift.remove();
        });

        sortUL(listGifts);
        addInput.value = "";
    });

    function sortUL (ul){
        Array.from(ul.children)
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => ul.appendChild(li));
    }
    
}
