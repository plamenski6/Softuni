function solve(name, age, weight, height) {

    let bmi = Math.round(weight / ((height / 100) * (height / 100)));

    let obj = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: bmi
    }

    if (obj.BMI < 18.5) {
        obj.status = "underweight";
    } else if (obj.BMI < 25) {
        obj.status = "normal";
    } else if (obj.BMI < 30) {
        obj.status = "overweight";
    } else if (obj.BMI >= 30) {
        obj.status = "obese";
        obj.recommendation = 'admission required';
    }

    return obj;

}

console.log(solve('Honey Boo Boo', 9, 57, 137));
