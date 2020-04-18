function solve(word, text) {

    let result = text;

    while (result.indexOf(word) > -1) {
        result = result.replace(word, '');
    }

    console.log(result);

}

solve('ice',
    'kicegiciceeb');
