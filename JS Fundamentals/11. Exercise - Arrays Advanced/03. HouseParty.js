function houseParty(arr) {
    let list = [];

    for (let i = 0; i < arr.length; i++) {
        let guests = arr[i].split(" ");

        if (guests.length === 3) {
            if (!list.includes(guests[0])) {
                list.push(guests[0]);
            } else {
                console.log(`${guests[0]} is already in the list!`);
            }
        } else {
            if (list.includes(guests[0])) {
                list.pop();
            } else {
                console.log(`${guests[0]} is not in the list!`)
            }
        }

    }

    console.log(list.join("\n"));

}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);
