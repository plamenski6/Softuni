function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        let reverseValue = Number(getReverseValue(currentNumber));
        if (currentNumber === reverseValue) {
            console.log("true");
        } else {
            console.log("false");
        }
    }

    function getReverseValue(originalValue) {
        return originalValue.toString().split('').reverse().join('');
    }

}

palindromeIntegers([123, 323, 421, 121]);
