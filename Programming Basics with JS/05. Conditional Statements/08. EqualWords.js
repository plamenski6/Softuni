function solve(input) {

    let a = input.shift();
    let b = input.shift();
    a = a.toUpperCase();
    b = b.toUpperCase();
    if (a === b) {
        console.log("yes")
    } else {
        console.log("no")
    }

}

solve(["Hello", "hello"]);
