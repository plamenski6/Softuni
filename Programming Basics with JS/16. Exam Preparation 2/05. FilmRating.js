function solve(input) {

    let brFilmi = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let maxName = "";
    let minName = "";
    let ave = 0;

    for (let i = 1; i <= brFilmi; i++) {
        let imeFilm = input.shift();
        let ratingFilm = Number(input.shift());

        if (ratingFilm > max) {
            max = ratingFilm;
            maxName = imeFilm;
        }
        if (ratingFilm < min) {
            min = ratingFilm
            minName = imeFilm;
        }

        ave += ratingFilm
    }

    console.log(`${maxName} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${minName} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${(ave / brFilmi).toFixed(1)}`);

}

solve(['5',
    'A Star is Born',
    '7.8',
    'Creed 2',
    '7.3',
    'Mary Poppins',
    '7.2',
    'Vice',
    '7.2',
    'Captain Marvel',
    '7.1']);
