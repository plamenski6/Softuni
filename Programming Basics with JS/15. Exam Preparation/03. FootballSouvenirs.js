function solve(input) {

    let team = input.shift();
    let souv = input.shift();
    let brSouv = Number(input.shift());
    let result = 0;

    switch (team) {
        case "Argentina":
            switch (souv) {
                case "flags": result = brSouv * 3.25; break;
                case "caps": result = brSouv * 7.2; break;
                case "posters": result = brSouv * 5.1; break;
                case "stickers": result = brSouv * 1.25; break;
                default: console.log("Invalid stock!");
            }
            break;
        case "Brazil":
            switch (souv) {
                case "flags": result = brSouv * 4.2; break;
                case "caps": result = brSouv * 8.5; break;
                case "posters": result = brSouv * 5.35; break;
                case "stickers": result = brSouv * 1.2; break;
                default: console.log("Invalid stock!");
            }
            break;
        case "Croatia":
            switch (souv) {
                case "flags": result = brSouv * 2.75; break;
                case "caps": result = brSouv * 6.9; break;
                case "posters": result = brSouv * 4.95; break;
                case "stickers": result = brSouv * 1.1; break;
                default: console.log("Invalid stock!");
            }
            break;
        case "Denmark":
            switch (souv) {
                case "flags": result = brSouv * 3.1; break;
                case "caps": result = brSouv * 6.5; break;
                case "posters": result = brSouv * 4.8; break;
                case "stickers": result = brSouv * 0.9; break;
                default: console.log("Invalid stock!");
            }
            break;
        default: console.log("Invalid country!");
    }

    if (result > 0) {
        console.log(`Pepi bought ${brSouv} ${souv} of ${team} for ${result.toFixed(2)} lv.`);
    }

}

solve(["Brazil", "stickers", 5]);
