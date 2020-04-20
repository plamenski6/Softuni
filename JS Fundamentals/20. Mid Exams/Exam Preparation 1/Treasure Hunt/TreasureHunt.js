function solve(arr) {

    let chest = arr.shift()
        .split("|");

    let stolenItems = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let command = tokens[0];

        if (command === "Yohoho!") {
            break;
        }

        switch (command) {
            case "Loot":
                let newItems = tokens.slice(1);
                for (let item of newItems) {
                    if (!chest.includes(item)) {
                        chest.unshift(item);
                    }
                }
                break;
            case "Drop":
                let index = Number(tokens[1]);
                if (index >= 0 && index <= chest.length) {
                    let lastItem = chest[index];
                    chest.splice(index, 1);
                    chest.push(lastItem);
                }
                break;
            case "Steal":
                let count = Number(tokens[1]);
                if (count > chest.length) {
                    count = chest.length;
                    for (let i = 0; i < count; i++) {
                        let lastItem = chest.pop();
                        stolenItems.push(lastItem);
                    }
                } else {
                    for (let i = 0; i < count; i++) {
                        let lastItem = chest.pop();
                        stolenItems.push(lastItem);
                    }
                }
                break;
            default:
                break;
        }

    }

    console.log(stolenItems.reverse()
        .join(", "));

    let allCredits = 0;
    for (let j = 0; j < chest.length; j++) {
        let itemCredit = chest[j].length;
        allCredits += itemCredit;
    }

    let averageGain = allCredits / Number(chest.length);

    if (chest.length > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }

}

solve(['Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!']);
