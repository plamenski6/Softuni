function solve(words, text) {

    let result = text;
    let sepWord = words.split(", ");

    result.split(" ").forEach((el) => {
        if (el === '*'.repeat(el.length)) {
            result = result.replace(el, sepWord.find((x) => x.length === el.length));
        }
    })

    console.log(result);

}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages');
