function solve(input) {

    let name = input.shift();
    let brProjects = Number(input.shift());
    let hours = brProjects * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${brProjects} project/s.`)

}

solve(["George", 4]);
