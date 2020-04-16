function oddEvenSum(number) {

    const allEvenDig = getEvenDigits(number);
    const allOddDig = getOddDigits(number);

    const evenSum = getSum(allEvenDig);
    const oddSum = getSum(allOddDig);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function getEvenDigits(number) {
        let evenDigits = [];
        let arr = number.toString().split('')
        for (let i = 0; i < arr.length; i++) {
            let currentNum = arr[i];
            if (currentNum % 2 == 0) {
                evenDigits.push(Number(currentNum));
            }
        }
        return evenDigits;
    }

    function getOddDigits(number) {
        let oddDigits = [];
        number.toString().split('').forEach((digit) => {
            let currentNum = Number(digit);
            if (currentNum % 2 === 1) {
                oddDigits.push(currentNum)
            }
        });
        return oddDigits;
    }

    function getSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

}

oddEvenSum(3495892137259234);
