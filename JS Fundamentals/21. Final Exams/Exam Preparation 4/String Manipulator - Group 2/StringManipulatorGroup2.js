function solve(input) {

    let text = input.shift();

    for (let i of input) {
        let command = i.split(" ");

        if (command[0] === "Done") {
            break;
        }

        switch (command[0]) {
            case "Change":
                let regex = new RegExp(command[1], 'g');
                text = text.replace(regex, command[2]);
                console.log(text);
                break;
            case "Includes":
                if (text.includes(command[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                if (text.endsWith(command[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                text = text.toUpperCase();
                console.log(text);
                break;
            case "FindIndex":
                console.log(text.indexOf(command[1]));
                break;
            case "Cut":
                let cut = text.substr(command[1], command[2])
                console.log(cut);
                break;
        }
    }

}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);
