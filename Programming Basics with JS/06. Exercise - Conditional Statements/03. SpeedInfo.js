function solve(input) {

    let s = Number(input.shift());

    if (s <= 10) {
        console.log("slow");
    } else if (s <= 50) {
        console.log("average");
    } else if (s <= 150) {
        console.log("fast");
    } else if (s <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast")
    }

}

solve([3500]);
