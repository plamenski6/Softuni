function solve(steps, stepLength, speed) {

    let distance = steps * stepLength;
    let rests = Math.floor(distance / 500);
    let time = (distance / speed) / 1000 * 60;
    let timeSeconds = Math.ceil((time + rests) * 60);
    let result = new Date(null, null, null, null, null, timeSeconds);
    result = result.toTimeString().split(" ");
    console.log(result[0]);

}

solve(4000, 0.60, 5);
