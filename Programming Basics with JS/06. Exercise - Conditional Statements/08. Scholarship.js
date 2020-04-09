function solve(input) {

    let dohod = Number(input.shift());
    let uspeh = Number(input.shift());
    let zaplata = Number(input.shift());
    let socStipendiq = 0;
    let otlStipendiq = 0;

    if ((dohod < zaplata) && (uspeh > 4.5)) {
        socStipendiq = 0.35 * zaplata;
    }
    if (uspeh >= 5.5) {
        otlStipendiq = uspeh * 25;
    }
    if (socStipendiq === 0 && otlStipendiq === 0) {
        console.log("You cannot get a scholarship!")
    } else if (socStipendiq > otlStipendiq) {
        console.log(`You get a Social scholarship ${Math.floor(socStipendiq)} BGN`)
    } else if (otlStipendiq >= socStipendiq) {
        console.log(`You get a scholarship for excellent results ${Math.floor(otlStipendiq)} BGN`)
    }

}

solve([300.00,
    5.95,
    420.00
]);
