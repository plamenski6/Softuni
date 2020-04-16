function solve(arr) {
        // let newArr = [];
        // for (let i = 0; i < arr.length; i++) {
        //     let currentNum = arr[i];
        //     if (i % 2 === 1) {
        //         currentNum *= 2;
        //         newArr.push(currentNum);
        //     }
        // }
        // newArr = newArr.reverse();
        // console.log(newArr.join(" "));

        let newArr = arr
                .filter((x, i) => i % 2 === 1)
                .map(x => x * 2)
                .reverse();

        console.log(newArr.join(" "));

}

solve([3, 0, 10, 4, 7, 3]);
