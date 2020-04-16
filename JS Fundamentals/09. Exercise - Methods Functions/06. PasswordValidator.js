function passVal(password) {

    let a = lengthValidator(password);
    let b = containsValidator(password);
    let c = digitContainsValidator(password);

    if (a === true && b === true && c === true) {
        console.log('Password is valid');
    } else {
        if (a !== true) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (b !== true) {
            console.log('Password must consist only of letters and digits');
        }
        if (c !== true) {
            console.log('Password must have at least 2 digits');
        }
    }

    function lengthValidator(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return "Password must be between 6 and 10 characters";
        }
    }

    function containsValidator(password) {
        let characters = password.split('');
        let isValid = true;

        for (let letter of characters) {
            let asciiValue = letter.charCodeAt(0);
            if (!isDigit(asciiValue) || !isCapitalLetter(asciiValue) || !isLowerLetter(asciiValue)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            return true;
        } else {
            return 'Password must consist only of letters and digits';
        }

        function isDigit(char) {
            return char >= 48 && char <= 57
        }

        function isCapitalLetter(char) {
            return char >= 65 && char <= 90
        }

        function isLowerLetter(char) {
            return char >= 97 && char <= 122
        }

    }

    function digitContainsValidator(password) {
        let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let digitCounter = 0;

        password.split('').forEach((letter) => {

            let value = Number(letter);
            if (digits.includes(value)) {
                digitCounter++;
            }
        })

        if (digitCounter >= 2) {
            return true;
        } else {
            return "Password must have at least 2 digits"
        }
    }

}

passVal("MyPass123");
