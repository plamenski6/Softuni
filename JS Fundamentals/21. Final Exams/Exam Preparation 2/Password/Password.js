function solve(input) {

    let number = input.shift();

    for (let i of input) {
        let regex = /(.+)>([\d]{3})\|([a-z]{3})\|([A-Z]{3})\|([^><]{3})<\1/g;
        let match = regex.exec(i);

        if (match) {
            let password = match[2] + match[3] + match[4] + match[5];
            console.log(`Password: ${password}`);
        } else {
            console.log("Try another password!");
        }
    }

}

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);
