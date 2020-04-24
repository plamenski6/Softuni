function solve(arr, cmd) {

    let sorter = filter();
    return sorter[cmd](arr);

    function filter() {

        return {
            asc: (s) => s.sort((a, b) => a - b),
            desc: (s) => s.sort((a, b) => b - a)
        }
    }

}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
