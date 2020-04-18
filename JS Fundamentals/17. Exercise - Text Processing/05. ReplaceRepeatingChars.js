function solve(word) {

    let str = "";

    for (let i = 0; i < word.length; i++) {
        let lastChar = str.slice(-1);
        let currentChar = word[i];
        if (lastChar !== currentChar) {
            str += currentChar;
        }
    }

    console.log(str);

}

solve('aaaaabbbbbcdddeeeedssaa');
