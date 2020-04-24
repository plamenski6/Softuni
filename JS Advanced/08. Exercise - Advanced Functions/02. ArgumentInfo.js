function solve(...args) {

    const obj = {};

    args.forEach(el => {
        let argType = typeof (el)
        console.log(`${argType}: ${el}`);

        if (!obj.hasOwnProperty(argType)) {
            obj[argType] = 0;
        }

        obj[argType]++;
    });

    const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (let i of arr) {
        console.log(`${i[0]} = ${i[1]}`);
    }

}

solve('cat', 42, function () { console.log('Hello world!'); });
