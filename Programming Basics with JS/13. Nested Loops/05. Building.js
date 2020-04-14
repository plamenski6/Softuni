function solve(input) {

    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floor; i >= 1; i--) {
        let result = "";

        for (let j = 0; j < rooms; j++) {
            if (i == floor) {
                result += "L";
            } else if (i % 2 == 0) {
                result += "O";
            } else {
                result += "A";
            }

            result += i + "" + j;
            result += " ";
        }

        console.log(result);
    }
    
}

solve([6, 4]);
