function solve(json) {

    let person = JSON.parse(json);

    for (let keys in person) {
        console.log(`${keys}: ${person[keys]}`);
    }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
