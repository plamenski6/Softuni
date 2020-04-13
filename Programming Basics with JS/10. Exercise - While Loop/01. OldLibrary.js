function solve(input) {
    let theBook = input.shift();
    let checksNumber = Number(input.shift());
    let nextCheck = input.shift();

    let counter = 0;

    while (counter < checksNumber) {
        if (nextCheck === theBook) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        } else {
            nextCheck = input.shift();
        }
        counter++;

    } if (counter >= checksNumber) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }

}

solve(['Troy',
    8,
    'Stronger',
    'Life Style',
    'Troy',
    ])
