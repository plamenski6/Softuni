function solve(input) {

    let countBatch = Number(input.shift());

    for (let i = 1; i <= countBatch; i++) {
        let isFlour = false;
        let isEggs = false;
        let isSugar = false;
        let isBake = false;

        while (!isEggs || !isFlour || !isSugar || !isBake) {

            let product = input.shift();

            switch (product) {
                case "flour": isFlour = true; break;
                case "eggs": isEggs = true; break;
                case "sugar": isSugar = true; break;
                case "Bake!": {
                    if (isFlour == true && isEggs == true && isSugar == true) {
                        isBake = true;
                        continue
                    } else {
                        console.log('The batter should contain flour, eggs and sugar!');
                    }
                } break;
            }

        }

        console.log(`Baking batch number ${i}...`)

    }

}

solve(['3',
    'flour',
    'eggs',
    'jam',
    'Bake!',
    'sugar',
    'Bake!',
    'flour',
    'eggs',
    'milk',
    'almonds',
    'sugar',
    'Bake!',
    'flour',
    'eggs',
    'sugar',
    'Bake!']);
