function solve(input) {

    let assArr = {};

    for (let element of input) {
        let tokens = element.split(" ");
        let name = tokens[0];
        let number = tokens[1];
        assArr[name] = number;
    }

    for (let key in assArr) {
        console.log(`${key} -> ${assArr[key]}`);
    }

}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
