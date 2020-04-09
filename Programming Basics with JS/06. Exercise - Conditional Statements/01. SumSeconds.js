function solve(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());

    let total = a + b + c;
    let min = parseInt(total / 60);
    let sec = total % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }

}

solve([35, 45, 44]);
