function solve(input) {

    let name = input.shift();
    if (name == "banana" || name == "apple" || name == "kiwi" || name == "cherry" ||
        name == "lemon" || name == "grapes") {
        console.log("fruit");
    } else if (name == "tomato" || name == "cucumber" || name == "pepper" || name == "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}

solve(["pepper"]);
