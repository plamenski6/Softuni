function solve(input) {

    let tracker = {};
    input.shift().split(" ")
        .forEach((word) => { tracker[word] = 0; });

    for (let i of input) {
        if (tracker.hasOwnProperty(i)) {
            tracker[i] += 1;
        }
    }

    Object.keys(tracker)
        .sort((a, b) => tracker[b] - tracker[a])
        .forEach((key) => {
            console.log(`${key} - ${tracker[key]}`);
        });

}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you',
    'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
