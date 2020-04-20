function solve(arr, n) {

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let magicSum = Number(n);

  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j];

      if (firstNum + secondNum === magicSum) {
        console.log(`${firstNum} ${secondNum}`);
      }
    }
  }
}

solve([1, 7, 6, 2, 19, 23],
  8);
