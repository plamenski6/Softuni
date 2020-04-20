function solve(input) {

    let obj = {};
    let count = 0;

    for (let i of input) {

        if (i === "Statistics") {
            break;
        }

        let [command, username, chat] = i.split("->");
        if (command === "Add") {
            if (!obj.hasOwnProperty(username)) {
                obj[username] = [];
                count++;
            } else {
                console.log(`${username} is already registered`);
            }
        } else if (command === "Send") {
            obj[username] = [...obj[username], chat];
        } else if (command === "Delete") {
            if (obj.hasOwnProperty(username)) {
                delete obj[username];
                count--;
            } else {
                console.log(`${username} not found!`);
            }
        }
    }

    let arr = Object.entries(obj);
    arr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    console.log(`Users count: ${count}`);
    for (let i of arr) {
        console.log(i[0]);
        for (let j of i[1]) {
            console.log(` - ${j}`)
        }
    }

}

solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]);
