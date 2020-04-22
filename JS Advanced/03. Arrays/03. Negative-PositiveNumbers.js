function solve(arr) {

    let result = [];
    // arr.forEach(element => {
    //     if(element < 0){
    //         result.unshift(element);
    //     } else {
    //         result.push(element)
    //     }
    // });

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    console.log(result.join("\n"));

}

solve([1,2,0,-6]);
