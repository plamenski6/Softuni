function train(arr) {

    let wagons = arr[0].split(" ")
        .map(Number);

    let maxCapacity = Number(arr[1]);
    let commands = arr.slice(2);

    for (let cmd of commands) {

        let tokens = cmd.split(" ");

        if (tokens.length === 2) {
            wagons.push(Number(tokens[1]));
        } else {
            let passengersToFit = Number(tokens[0]);
            for (let index in wagons) {
                let availableCapacity = maxCapacity - wagons[index];
                if (availableCapacity >= passengersToFit) {
                    wagons[index] += passengersToFit
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
