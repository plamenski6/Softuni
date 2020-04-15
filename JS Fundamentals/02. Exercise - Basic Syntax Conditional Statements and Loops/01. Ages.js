function solve(a) {

    if (a >= 66) {
        console.log("elder");
    } else if (a >= 20) {
        console.log("adult");
    } else if (a >= 14) {
        console.log("teenager");
    } else if (a >= 3) {
        console.log("child");
    } else {
        console.log("baby");
    }

}

solve(20);
