function solve(input) {

    let type = input.shift();

    if (type === "square") {
        let a = Number(input.shift());
        let s = a * a;
        console.log(s.toFixed(3));
    } else if (type === "rectangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
        let s = a * b;
        console.log(s.toFixed(3));
    } else if (type === "circle") {
        let r = Number(input.shift());
        let s = Math.PI * r * r;
        console.log(s.toFixed(3));
    } else {
        let a = Number(input.shift());
        let h = Number(input.shift());
        let s = (a * h) / 2;
        console.log(s.toFixed(3));
    }
}

solve(["triangle", 4.5, 20]);
