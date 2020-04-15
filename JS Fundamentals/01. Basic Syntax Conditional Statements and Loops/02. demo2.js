function solve(n) {
    let oddCounter = n;
    let counter = 0;
    let sum = 0;

    while (oddCounter > 0) {

        if (counter % 2 == 1) {
            console.log(counter);
            sum += counter;
            oddCounter--;
        }

        counter++;
    }

    console.log(`Sum: ${sum}`);

}

solve(5);
