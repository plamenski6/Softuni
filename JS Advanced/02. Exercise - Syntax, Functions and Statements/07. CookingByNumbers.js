function solve(arr) {

    let num = arr.shift();
    num = Number(num);

    for (let i of arr) {
        switch (i) {
            case "chop":
                num = num / 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num = num + 1;
                console.log(num);
                break;
            case "bake":
                num = num * 3;
                console.log(num);
                break;
            case "fillet":
                num -= num * 0.2;
                console.log(num);
                break;
        }
    }

}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
