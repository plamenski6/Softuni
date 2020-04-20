function solve(input) {

    for (let i of input) {
        let regex = /([#$%&*])(?<name>[A-Za-z]+)\1=(?<length>[0-9]+)!!(?<code>.+)/g;
        let match = regex.exec(i);
        if (match) {
            if (+match[3] === match[4].length) {
                let newCode = [];
                for (let i of match[4]) {
                    let k = i.charCodeAt(0)
                    let newK = k + Number(match[3]);
                    let newI = String.fromCharCode(newK);
                    newCode.push(newI);
                }
                console.log(`Coordinates found! ${match[2]} -> ${newCode.join('')}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }

}

solve([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
]);
