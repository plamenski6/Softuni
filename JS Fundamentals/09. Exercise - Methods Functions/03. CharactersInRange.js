function charactersInRange(str, end) {

    let startSymbol = str.charCodeAt();
    let endSymbol = end.charCodeAt();
    let startPoint = Math.min(startSymbol, endSymbol);
    let endPoint = Math.max(startSymbol, endSymbol);

    printAsciiSymbol(startPoint, endPoint);

    function printAsciiSymbol(after, before) {
        let symbols = [];
        for (let i = after + 1; i < before; i++) {
            symbols.push(String.fromCharCode(i));
        }
        console.log(symbols.join(' '));
    }

}

charactersInRange('a', 'd');
