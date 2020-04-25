function solve(arr, str) {
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let newArr = [];
 
    for (let el of arr) {
        let [destination, price, status] = el.split(`|`);
        let ticket = new Ticket(destination, price, status);
       
        newArr.push(ticket);
    }

    newArr = newArr.sort((a, b) => typeof a[str] === `string` ? a[str].localeCompare(b[str]) : a[str] - b[str]);
    
    return newArr
}
