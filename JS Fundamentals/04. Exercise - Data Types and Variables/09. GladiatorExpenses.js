function solve(lostGames, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let total = 0;
    let brokenHelmets = Math.floor(lostGames / 2);
    let brokenSword = Math.floor(lostGames / 3);
    let brokenShield = Math.floor(lostGames / 6);
    let brokenArmor = Math.floor(lostGames / 12);

    let repairHelmet = brokenHelmets * helmetPrice;
    let repairSword = brokenSword * swordPrice;
    let repairShield = brokenShield * shieldPrice;
    let repairArmor = brokenArmor * armorPrice;

    if (lostGames < 6) {
        total = repairHelmet + repairSword;
    } else if (lostGames < 12) {
        total = repairHelmet + repairSword + repairShield;
    } else {
        total = repairHelmet + repairSword + repairShield + repairArmor;
    }

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);

}

solve(23,
    12.50,
    21.50,
    40,
    200
);
