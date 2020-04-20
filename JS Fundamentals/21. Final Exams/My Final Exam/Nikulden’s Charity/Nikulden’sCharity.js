function solve(input) {

    let text = input.shift();

    for (let i of input) {

        if (i === "Finish") {
            break;
        }

        let cmd = i.split(" ");

        switch (cmd[0]) {
            case "Replace":
                let regex = new RegExp(cmd[1], 'g');
                text = text.replace(regex, cmd[2]);
                console.log(text);
                break;
            case "Cut":
                let startIndex = Number(cmd[1]);
                let endIndex = Number(cmd[2]);
                if (startIndex >= 0 && endIndex <= text.length) {
                    text = text.substring(0, startIndex) + text.substring(endIndex + 1, text.length);
                    console.log(text);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;
            case "Make":
                if (cmd[1] === "Upper") {
                    text = text.toUpperCase();
                    console.log(text);
                } else if (cmd[1] === "Lower") {
                    text = text.toLowerCase();
                    console.log(text);
                }
                break;
            case "Check":
                if (text.includes(cmd[1])) {
                    console.log(`Message contains ${cmd[1]}`);
                } else {
                    console.log(`Message doesn't contain ${cmd[1]}`);
                }
                break;
            case "Sum":
                let index1 = cmd[1];
                let index2 = cmd[2];
                if (index1 >= 0 && index2 <= text.length) {
                    let porciq = text.substring(index1, Number(index2) + 1);
                    let total = 0;
                    for (let p of porciq) {
                        p = p.charCodeAt();
                        total += p;
                    }
                    console.log(total);
                } else {
                    console.log(`Invalid indexes!`)
                }
                break;
        }
    }

}

solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
]);
