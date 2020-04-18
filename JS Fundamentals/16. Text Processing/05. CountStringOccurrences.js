function solve(text, key) {

    let counter = 0;
    let textArr = text.split(" ");

    for (const word of textArr) {
        if (word === key) {
            counter++;
        }
    }

    console.log(counter);

}

solve("This is a word and it also is a sentence",
    "is");
