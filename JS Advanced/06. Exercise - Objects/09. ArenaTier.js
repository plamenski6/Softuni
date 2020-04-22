function solve(input) {

    let obj = {};

    for (let i of input) {
        if (i === "Ave Cesar") {
            break;
        }

        if (i.includes("->")) {
            let [gladiator, technique, skill] = i.split(" -> ");

            if (!obj.hasOwnProperty(gladiator)) {
                obj[gladiator] = {
                    techniques: { [technique]: +skill },
                    skill: Number(skill)
                };
            } else {
                obj[gladiator].skill += Number(skill);
                if (obj[gladiator].techniques[technique]) {
                    let oldSkill = obj[gladiator].techniques[technique];
                    if (skill > oldSkill) {
                        obj[gladiator].techniques[technique] = +skill;
                    }
                } else {
                    obj[gladiator].techniques[technique] = +skill;
                }
            }
        } else if (i.includes("vs")) {
            let [gladiator1, gladiator2] = i.split(" vs ");

            if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
                let gladiator1Techniques = Object.keys(obj[gladiator1].techniques);
                let gladiator2Techniques = Object.keys(obj[gladiator2].techniques);
                let totalSkill1 = obj[gladiator1].skill;
                let totalSkill2 = obj[gladiator2].skill;
                for (let tech1 of gladiator1Techniques) {
                    for (let tech2 of gladiator2Techniques) {
                        if (tech1 === tech2) {
                            if (totalSkill1 > totalSkill2) {
                                delete obj[gladiator2];
                            } else if (totalSkill2 < totalSkill1) {
                                delete obj[gladiator1];
                            }
                        }
                    }
                }
            }
        }
    }

    let arr = Object.entries(obj);

    arr.sort((a, b) => b[1].skill - a[1].skill || a[0].localeCompare(b[0]));

    for (let g of arr) {
        console.log(`${g[0]}: ${g[1].skill} skill`);
        let tech = Object.entries(g[1].techniques);
        tech.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (let t of tech) {
            console.log(`- ${t[0]} <!> ${t[1]}`);
        }
    }

}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
