function solve(num) {

    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (num === 1) {
        console.log(weekDays[0])
    } else if (num === 2) {
        console.log(weekDays[1])
    } else if (num === 3) {
        console.log(weekDays[2])
    } else if (num === 4) {
        console.log(weekDays[3])
    } else if (num === 5) {
        console.log(weekDays[4])
    } else if (num === 6) {
        console.log(weekDays[5])
    } else if (num === 7) {
        console.log(weekDays[6])
    } else {
        console.log("Invalid day!")
    }

}

solve(2);
