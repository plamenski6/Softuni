function solve(arr){

    let allCards = arr.shift().split(":");
    

    let newDeck = [];
    for(let i = 0; i<arr.length; i++){
        let [command, cardName, index] = arr[i].split(" ");
        
        if(command === "Ready"){
            break;
        }

        switch(command){
            case "Add":
                if(!newDeck.includes(cardName) && allCards.includes(cardName)){
                    newDeck.push(cardName);
                } else {
                    console.log("Card not found.");
                }
                break;
            case "Insert":
                index = Number(index);
                if(allCards.includes(cardName) && index >= 0 && index <= newDeck.length){
                newDeck.splice(index,0,cardName);
                } else {
                    console.log("Error!");
                }
                break;
            case "Remove":
                if(newDeck.includes(cardName)){
                    let indexCard = newDeck.indexOf(cardName);
                    newDeck.splice(indexCard,1)
                } else {
                    console.log("Card not found.");
                }
                break;
            case "Swap":
                let indexCard1 = newDeck.indexOf(cardName);
                let indexCard2 = newDeck.indexOf(index);
                if(indexCard1>=0 && indexCard1<=newDeck.length && indexCard2>=0 && indexCard2<=newDeck.length){
                    newDeck.splice(indexCard2,1,newDeck.splice(indexCard1,1,newDeck[indexCard2])[0]);
                }
                break;
            case "Shuffle":
                newDeck.reverse();
                break;
        }
    }

    console.log(newDeck.join(" "));

}

solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
  ]);
