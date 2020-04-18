function solve(name, lastName, hairColor) {

    let obj = { name: name, lastName: lastName, hairColor: hairColor }
    let json = JSON.stringify(obj);
    console.log(json);

}

solve('George',
    'Jones',
    'Brown');
