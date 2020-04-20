function solve(arr) {

    let outputArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElem = arr[i];
        let rightElem = arr.slice(i + 1);

        let isBigger = true;

        for (let s = 0; s < rightElem.length; s++) {
            if (currentElem <= rightElem[s]) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            outputArr.push(currentElem);
        }

    }

    console.log(outputArr.join(" "));

}

solve([1, 4, 3, 2]);
