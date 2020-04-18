function city(a, b, c, d, e) {

    let obj = { name: a, area: b, population: c, country: d, postCode: e };
    let keys = Object.keys(obj);
    for (let el of keys) {
        console.log(`${el} -> ${obj[el]}`)
    }

}

city("Sofia", "492", "1238438", "Bulgaria", "1000");
