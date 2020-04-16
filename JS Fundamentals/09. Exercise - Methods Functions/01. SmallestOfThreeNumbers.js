function smallestOfThree(a, b, c) {

    if (a <= b && a <= c) {
        console.log(a);
    } else if (b <= a && b <= c) {
        console.log(b);
    } else if (c <= a && c <= b) {
        console.log(c);
    }

}

smallestOfThree(1, 1, 2);
