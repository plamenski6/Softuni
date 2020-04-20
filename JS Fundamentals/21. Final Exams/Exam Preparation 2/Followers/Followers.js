function solve(input) {

    let obj = {};

    for (let i of input) {

        if (i === "Log out") {
            break;
        }

        let command = i.split(": ");

        switch (command[0]) {
            case "New follower":
                if (!obj.hasOwnProperty(command[1])) {
                    obj[command[1]] = {
                        likes: 0,
                        comments: 0
                    };
                }
                break;
            case "Like":
                if (!obj.hasOwnProperty(command[1])) {
                    obj[command[1]] = {
                        likes: Number(command[2]),
                        comments: 0
                    }
                } else {
                    obj[command[1]].likes += Number(command[2]);
                }
                break;
            case "Comment":
                if (!obj.hasOwnProperty(command[1])) {
                    obj[command[1]] = {
                        likes: 0,
                        comments: 1
                    }
                } else {
                    obj[command[1]].comments += 1;
                }
                break;
            case "Blocked":
                if (obj.hasOwnProperty(command[1])) {
                    delete obj[command[1]];
                } else {
                    console.log(`${command[1]} doesn't exist.`);
                }
                break;
        }
    }

    let arr = Object.entries(obj);
    arr.sort((a, b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));

    console.log(`${arr.length} followers`);
    arr.forEach(el => {
        console.log(`${el[0]}: ${el[1].likes + el[1].comments}`);
    })
    console.log(arr);

}

solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]);
