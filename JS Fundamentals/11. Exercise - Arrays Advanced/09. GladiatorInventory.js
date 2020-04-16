function gladiatorInventory(arr) {

    let equipment = arr.shift()
        .split(" ");

    for (let i = 0; i < arr.length; i++) {
        let [command, item] = arr[i].split(" ");

        switch (command) {
            case "Buy":
                if (!equipment.includes(item)) {
                    equipment.push(item);
                }
                break;
            case "Trash":
                if (equipment.includes(item)) {
                    let index1 = equipment.indexOf(item);
                    equipment.splice(index1, 1);
                }
                break;
            case "Repair":
                if (equipment.includes(item)) {
                    let index2 = equipment.indexOf(item);
                    equipment.splice(index2, 1);
                    equipment.push(item);
                }
                break;
            case "Upgrade":
                let [realItem, upgrade] = item.split("-")
                if (equipment.includes(realItem)) {
                    let index3 = equipment.indexOf(realItem);
                    equipment.splice(index3 + 1, 0, realItem + ":" + upgrade);
                }
                break;
        }
    }

    console.log(equipment.join(" "));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
