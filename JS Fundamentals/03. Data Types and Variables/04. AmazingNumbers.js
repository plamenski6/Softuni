function solve(num) {

    var str = String(num);
    var sum = 0;

    for (let index = 0; index < str.length; index++) {
        sum += Number(str[index]);
    }

    var result = String(sum).includes('9');
    console.log(`${num} Amazing? ${result ? 'True' : 'False'}`);

}

solve(199);
