function solve(input) {

    let obj = {};
    let regex = /\s*[^A-z]+\s*/g;
    let arr = input[0].split(regex);

    for (let i of arr) {
        if (i.length > 0) {
            if (!obj.hasOwnProperty(i)) {
                obj[i] = 1;
            } else {
                obj[i]++;
            }
        }
    }

    console.log(JSON.stringify(obj));

}

solve(["Far too slow, you're far too slow."]);
