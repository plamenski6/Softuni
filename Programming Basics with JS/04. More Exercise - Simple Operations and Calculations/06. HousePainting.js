function solve(input) {

    let x = Number(input.shift());
    let y = Number(input.shift());
    let h = Number(input.shift());

    //STENI
    let stena = x * y;
    let prozorec = 1.5 * 1.5;
    let allstrani = 2 * stena - 2 * prozorec;
    let zadnastena = x * x;
    let vhod = 1.2 * 2;
    let allsteni = 2 * zadnastena - vhod;
    let obshtosteni = allstrani + allsteni;
    let zelboq = obshtosteni / 3.4;

    //POKRIV
    let pokriv = 2 * (x * y);
    let triang = 2 * (x * h / 2);
    let obshtopokriv = pokriv + triang;
    let cherboq = obshtopokriv / 4.3;

    console.log(zelboq.toFixed(2));
    console.log(cherboq.toFixed(2));

}

solve([6, 10, 5.2]);
