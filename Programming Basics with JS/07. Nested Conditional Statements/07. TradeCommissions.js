function solve(input) {

    let grad = input.shift();
    let v = Number(input.shift());
    let result = 0;

    if (0 <= v && v <= 500) {
        if (grad == "Sofia") {
            result = v * 0.05;
        } else if (grad == "Varna") {
            result = v * 0.045;
        } else if (grad == "Plovdiv") {
            result = v * 0.055;
        } else {
            console.log("error");
        }
    } else if (500 < v && v <= 1000) {
        if (grad == "Sofia") {
            result = v * 0.07;
        } else if (grad == "Varna") {
            result = v * 0.075;
        } else if (grad == "Plovdiv") {
            result = v * 0.08;
        } else {
            console.log("error");
        }

    } else if (1000 < v && v <= 10000) {
        if (grad == "Sofia") {
            result = v * 0.08;
        } else if (grad == "Varna") {
            result = v * 0.1;
        } else if (grad == "Plovdiv") {
            result = v * 0.12;
        } else {
            console.log("error");
        }
    } else if (v > 10000) {
        if (grad == "Sofia") {
            result = v * 0.12;
        } else if (grad == "Varna") {
            result = v * 0.13;
        } else if (grad == "Plovdiv") {
            result = v * 0.145;
        } else {
            console.log("error");
        }
    } else {
        console.log("error")
    }

    if (result != 0) {
        console.log(result.toFixed(2));
    }

}

solve(["Ssads", -50]);
