function solve(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {
        let target = i - k;
        if (target < 0) {
            target = 0;
        }
        let sum = 0;
        arr.slice(target, i).forEach(x => sum += x);
        arr.push(sum)
    }

    console.log(arr.join(" "));

}

solve(6, 3);
