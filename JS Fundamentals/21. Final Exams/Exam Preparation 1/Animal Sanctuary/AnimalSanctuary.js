function solve(input) {

    let number = input.shift();
    let totalWeight = 0;

    for (let line of input) {
        let regex = /^n:(?<name>[^;]+);t:(?<kind>[^;]+);c--(?<country>[A-za-z ]+)$/g;
        let match = regex.exec(line);
        let currentWeight = 0;
        if (match) {
            let weight = line.match(/[\d]/g);
            let { name, kind, country } = match.groups
            let animalName = name.match(/[A-Za-z]*/g);
            let animalKind = kind.match(/[A-Za-z]*/g);

            if (animalName && animalKind && country) {
                if (weight) {
                    for (let i of weight) {
                        currentWeight += Number(i);
                    }
                    totalWeight += currentWeight;
                }
                console.log(`${animalName.join("")} is a ${animalKind.join("")} from ${country}`);
            }
        }
    }

    console.log(`Total weight of animals: ${totalWeight}KG`);

}

solve([
    '4',
    'n:Bo^%4b35454bie#$;t:Ele5ph#$34a%nt;c--Africa',
    'n:Honey;t:Ti^^5ger;c--India',
    'bla;t:1234a;c--America',
    'n:A#$@545n;t:Cat241$@#23;cGermany'
]);
