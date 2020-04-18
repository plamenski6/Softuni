function solve(arr) {

    let text = arr.shift();
    text = text.split(" ");

    for (let i of text) {
        let textWord = i;
        for (let j of arr) {
            let arrWord = j;
            if (arrWord.length === "_".repeat(textWord.length)) {
                text = text.replace(i, text.find((x) => x.length === i.length));
            }
        }
    }

    console.log(text);

}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
