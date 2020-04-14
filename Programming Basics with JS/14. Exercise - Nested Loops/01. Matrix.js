function matrix(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);

    for (let firtsRowFirstNum = a; firtsRowFirstNum <= b; firtsRowFirstNum++) {
        for (let firtsRowSecondNum = a; firtsRowSecondNum <= b; firtsRowSecondNum++) {
            for (let secondRowFirstNum = c; secondRowFirstNum <= d; secondRowFirstNum++) {
                for (let secondRowSecondNum = c; secondRowSecondNum <= d; secondRowSecondNum++) {
                    if (((firtsRowFirstNum + secondRowSecondNum) == (firtsRowSecondNum + secondRowFirstNum)) &&
                        (firtsRowFirstNum != firtsRowSecondNum) &&
                        (secondRowFirstNum != secondRowSecondNum)) {
                        console.log(`${firtsRowFirstNum}${firtsRowSecondNum}`);
                        console.log(`${secondRowFirstNum}${secondRowSecondNum}`);
                        console.log();
                    }
                }
            }
        }
    }
}

matrix([1, 2, 3, 4]);
