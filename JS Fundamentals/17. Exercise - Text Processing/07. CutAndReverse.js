function solve(str) {

    let leftHalf = str.slice(0, str.length / 2);
    let rigthHalf = str.slice((str.length / 2));

    leftHalf = leftHalf.split("");
    console.log(leftHalf.reverse().join(""));
    rigthHalf = rigthHalf.split("");
    console.log(rigthHalf.reverse().join(""));

}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
