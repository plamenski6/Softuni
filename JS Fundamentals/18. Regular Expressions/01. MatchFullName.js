function solve(input) {

    let name = input[0];
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let arr = name.match(regex);

    if (arr != null) {
        console.log(arr.join(" "));
    }

}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]);
