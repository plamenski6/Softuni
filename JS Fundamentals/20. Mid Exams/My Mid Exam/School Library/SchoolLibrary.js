function solve(input) {

    let books = input.shift().split("&");

    for (let i of input) {

        if (i === "Done") {
            break;
        }

        let cmd = i.split(" | ");

        switch (cmd[0]) {
            case "Add Book":
                if (!books.includes(cmd[1])) {
                    books.unshift(cmd[1]);
                }
                break;
            case "Take Book":
                if (books.includes(cmd[1])) {
                    let index = books.indexOf(cmd[1]);
                    books.splice(index, 1);
                }
                break;
            case "Swap Books":
                if (books.includes(cmd[1]) && books.includes(cmd[2])) {
                    let index1 = books.indexOf(cmd[1]);
                    let index2 = books.indexOf(cmd[2]);
                    books[index1] = cmd[2];
                    books[index2] = cmd[1];
                }
                break;
            case "Insert Book":
                books.push(cmd[1]);
                break;
            case "Check Book":
                if (cmd[1] >= 0 && cmd[1] <= books.length) {
                    let book = books[cmd[1]];
                    console.log(book);
                }
                break;
        }
    }

    console.log(books.join(", "));

}

solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]);
