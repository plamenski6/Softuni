function solve(input) {

    let isUpperCase = (c) => c === c.toUpperCase();

    let words = [];
    let currentWord = "";

    for (let i in input) {
        let char = input[i];

        if (!isUpperCase(char) || +i === 0) {
            currentWord += char;
        } else if (isUpperCase(char) || Number(i) === (input.length - 1)) {
            words.push(currentWord);
            currentWord = char;
        }

        if (Number(i) === (input.length - 1)) {
            words.push(currentWord);
        }
    }

    console.log(words.join(', '));

}

solve('CaCd');
