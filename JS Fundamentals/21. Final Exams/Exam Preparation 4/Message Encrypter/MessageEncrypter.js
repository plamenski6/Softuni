function solve(input) {

    input.shift();

    for (let i of input) {
        let regex = /(\*|@)(?<tag>[A-Z][a-z]{3,})\1: \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/g;
        let arr = regex.exec(i);

        if (arr) {
            let tag = arr[2];
            let numbers = [];
            for (let i of arr.slice(3)) {
                let number = i.charCodeAt(0);
                numbers.push(number);
            }
            console.log(`${tag}: ${numbers.join(" ")}`);
        } else {
            console.log("Valid message not found!");
        }
    }

}

solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
]);
