function solve(input) {

    let n = input.shift();
    let c = 0;

    for (let i of input) {
        let regex = /^(U\$)(?<name>[A-Z][a-z]{3,})\1(P@\$)(?<pass>[a-z]{5,}[\d]+)\3$/g;
        let match = regex.exec(i);

        if (match) {
            console.log("Registration was successful");
            console.log(`Username: ${match[2]}, Password: ${match[4]}`);
            c++;
        } else {
            console.log("Invalid username or password");
        }
    }

    console.log(`Successful registrations: ${c}`);

}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);
