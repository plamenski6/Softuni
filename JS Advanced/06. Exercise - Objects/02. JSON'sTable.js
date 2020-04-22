function solve(input) {

    let parsedData = input.map(x => JSON.parse(x));

    let createTable = content => `<table>\n${content}</table>`;
    let createRow = row => `	<tr>\n${row}	</tr>\n`;
    let createData = data => `		<td>${data}</td>\n`;

    let result = parsedData.reduce((accRows, row) => {
        let tdForPerson = Object.values(row).reduce((accTd, td) => {
            return accTd + createData(td);
        }, '')
        return accRows + createRow(tdForPerson);
    }, '')

    console.log(createTable(result));

}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);
