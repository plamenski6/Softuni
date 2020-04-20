function solve(input) {

    let name = input.shift();

    for (let i of input) {

        if (i === "Sign up") {
            break;
        }

        let command = i.split(" ");

        switch (command[0]) {
            case "Case":
                if (command[1] == "lower") {
                    name = name.toLowerCase();
                    console.log(name);
                } else if (command[1] == "upper") {
                    name = name.toUpperCase();
                    console.log(name);
                }
                break;
            case "Reverse":
                if (command[1] >= 0 && command[2] <= name.length) {
                    let subStr = name.substring(Number(command[1]), Number(command[2]) + 1);
                    let arr = subStr.split("");
                    console.log(arr.reverse().join(""));
                }
                break;
            case "Cut":
                if (name.includes(command[1])) {
                    let index = name.indexOf(command[1]);
                    name = name.substring(0, index) + name.substring(index + (command[1].length));
                    console.log(name);
                } else {
                    console.log(`The word ${name} doesn't contain ${command[1]}.`);
                }
                break;
            case "Replace":
                const regex = new RegExp(command[1], 'g');
                name = name.replace(regex, "*");
                console.log(name);
                break;
            case "Check":
                if (name.includes(command[1])) {
                    console.log("Valid");
                } else {
                    console.log(`Your username must contain ${command[1]}.`);
                }
                break;
        }
    }

}

solve(['Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up']);
//solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);
