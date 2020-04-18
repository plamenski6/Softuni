function cats(arr) {

    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(" ");
        console.log(`${name}, age ${age} says Meow`);
    }

}

cats(['Mellow 2', 'Tom 5']);
