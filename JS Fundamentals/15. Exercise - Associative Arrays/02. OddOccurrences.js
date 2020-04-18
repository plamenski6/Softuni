function solve(input) {

    let tracker = {};

    input.split(' ').map((word) => word.toLowerCase())
        .forEach((word) => {
            if (!tracker.hasOwnProperty(word)) {
                tracker[word] = 0;
            }

            tracker[word] += 1;
        })

    let array = Object.keys(tracker).filter((key) => tracker[key] % 2 == 1).join(" ");
    console.log(array);

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
