function solve(arr) {

    let r = (+arr.pop()) % arr.length;

    for (let i = 0; i < r; i++) {
        let item = arr.pop();
        arr.unshift(item);

    }

    console.log(arr.join(' '));

}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);
