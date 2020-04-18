function solve(word, text) {

    word = word.toLowerCase();
    text = text.toLowerCase();

    if (text.split(" ").includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

solve('javascript',
    'JavaScript is the best programming language');
