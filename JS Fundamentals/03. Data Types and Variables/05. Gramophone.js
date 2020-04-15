function solve(band, album, song) {

    let result = (band.length * album.length) * song.length / 2;
    let rot = Math.ceil(result / 2.5);
    console.log(`The plate was rotated ${rot} times.`);

}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
