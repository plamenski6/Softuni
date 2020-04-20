function solve(input) {

    let text = input.slice(0, 1).join(" ");

    for (let i of input.slice(1)) {
        let [command, string, count] = i.split(" ");

        if (command === "End") {
            break;
        }

        switch (command) {
            case "Translate":
                const regex = new RegExp(string, 'g');
                text = text.replace(regex, count)
                console.log(text);
                break;
            case "Includes":
                if (text.includes(string)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Start":
                if (text.startsWith(string)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Lowercase":
                text = text.toLowerCase();
                console.log(text);
                break;
            case "FindIndex":
                console.log(text.lastIndexOf(string));
                break;
            case "Remove":
                let newText = text.substr(Number(count));
                console.log(newText);
                break;
        }
    }

}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);
