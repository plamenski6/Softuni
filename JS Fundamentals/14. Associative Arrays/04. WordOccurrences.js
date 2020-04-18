function solve(input) {

    let words = new Map;

    for (let element of input) {
        let counter = 1;
        if (words.has(element)) {
            let oldBr = words.get(element)
            counter += Number(oldBr);
            words.set(element, counter);
        } else {
            words.set(element, counter);
        }

    }

    let entries = Array.from(words.entries()).sort((a, b) => b[1] - a[1]);

    for (let i of entries) {
        console.log(`${i[0]} -> ${i[1]} times`);
    }

}

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);
