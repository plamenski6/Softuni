function solve(input) {

    let regex = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let phone = input[0];
    let match = phone.match(regex);

    if (match !== null) {
        console.log(match.join(', '));
    }

}

solve(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]);
