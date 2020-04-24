function solve(num){

    return function(numToAdd){
        return num + numToAdd;
    }

}

let add = solve(5);
console.log(add(2));
console.log(add(3));
