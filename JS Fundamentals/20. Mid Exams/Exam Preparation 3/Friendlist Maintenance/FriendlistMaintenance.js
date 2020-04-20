function solve(input) {

    let names = input.shift().split(", ");
    let newNames = names.slice(0);
    let blacklisted = [];
    let lost = [];

    for (let i of input) {

        let [command, index, newName] = i.split(" ");

        if (command === "Report") {
            break;
        }

        switch (command) {
            case "Blacklist":
                let indexName1 = names.indexOf(index);
                if (names.includes(index)) {
                    console.log(`${index} was blacklisted.`);
                    blacklisted.push(index);
                    newNames.splice(indexName1, 1, "Blacklisted")
                } else {
                    console.log(`${index} was not found.`);
                }
                break;
            case "Error":
                let username = names[index];
                let indexName2 = names.indexOf(username);
                if (!blacklisted.includes(username) && !lost.includes(username)) {
                    console.log(`${username} was lost due to an error.`);
                    lost.push(username);
                    newNames.splice(indexName2, 1, "Lost");
                }
                break;
            case "Change":
                let indexName3 = names.indexOf(names[index]);
                if (index >= 0 && index <= names.length) {
                    console.log(`${names[index]} changed his username to ${newName}.`);
                    newNames.splice(indexName3, 1, newName);
                }
                break;
            default:
                break;
        }
    }

    console.log(`Blacklisted names: ${blacklisted.length}`);
    console.log(`Lost names: ${lost.length}`);
    console.log(newNames.join(" "));

}

solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]);
