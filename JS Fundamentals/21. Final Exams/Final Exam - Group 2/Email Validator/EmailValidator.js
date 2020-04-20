function solve(input) {

    let asci = [];
    let email = input.shift();
    for (let i of input) {

        if (i === "Complete") {
            break;
        }

        let cmd = i.split(" ");

        if (i === "Make Upper") {
            email = email.toUpperCase();
            console.log(email.toUpperCase());
        } else if (i === "Make Lower") {
            email = email.toLowerCase();
            console.log(email.toLowerCase());
        } else if (cmd[0] === "GetDomain") {
            let index = email.indexOf(".");
            let dom = email.substr(index + 1);
            console.log(dom);
        } else if (cmd[0] === "GetUsername") {
            if (email.includes("@")) {
                let index = email.indexOf("@");
                let username = email.substr(0, index);
                console.log(username);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        } else if (cmd[0] === "Replace") {
            let rgx = new RegExp(cmd[1], "g");
            email = email.replace(rgx, '-');
            console.log(email);
        } else if (cmd[0] === "Encrypt") {
            for (let i of email) {
                let el = i.charCodeAt(0);
                asci.push(el);
            }
            console.log(asci.join(" "));
        }
    }

}

solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
]);
