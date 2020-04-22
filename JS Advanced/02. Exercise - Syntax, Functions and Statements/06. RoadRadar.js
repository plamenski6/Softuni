function solve(arr) {

    let speed = arr.shift();
    let area = arr.shift();

    if (area === "motorway" && speed > 130) {
        if (speed > 130 && speed <= 150) {
            console.log('speeding');
        } else if (speed > 150 && speed <= 170) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    } else if (area === "interstate" && speed > 90) {
        if (speed > 90 && speed <= 110) {
            console.log('speeding');
        } else if (speed > 110 && speed <= 130) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    } else if (area === "city" && speed > 50) {
        if (speed > 50 && speed <= 70) {
            console.log('speeding');
        } else if (speed > 70 && speed <= 90) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    } else if (area === "residential" && speed > 20) {
        if (speed > 20 && speed <= 40) {
            console.log('speeding');
        } else if (speed > 40 && speed <= 60) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    }

}

solve([21, 'residential']);
