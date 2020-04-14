function solve(input) {

    let combination = Number(input.shift());
    let counter = 0;

    for (let i = "B".charCodeAt(0); i <= "L".charCodeAt(0); i += 2) {
        for (let j = "f".charCodeAt(0); j >= "a".charCodeAt(0); j--) {
            for (let a = "A".charCodeAt(0); a <= "C".charCodeAt(0); a++) {
                for (let b = 1; b <= 10; b++) {
                    for (let c = 10; c >= 1; c--) {
                        counter++;
                        if (counter == combination) {
                            console.log(`Ticket combination: ${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(a)}${b}${c}`);
                            let sum = i + j + a + b + c;
                            console.log(`Prize: ${sum} lv.`)
                        }
                    }
                }
            }
        }
    }
}

solve([17]);
