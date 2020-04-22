function solve(input) {

    let arr = [];

    for (let i of input) {
        i = i.toUpperCase();
        arr.push(i);
    }
    
    console.log(arr.join(""));

}

solve('Hi, how are you?')
