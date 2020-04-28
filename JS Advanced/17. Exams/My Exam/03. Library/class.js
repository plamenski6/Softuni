class Library {
 
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: Number(libraryName.length),
            special: Number((libraryName.length*2)),
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type){
        if(!this.subscriptionTypes.hasOwnProperty(type)){
            throw new Error(`The type ${type} is invalid`);
        }

        let person = this.subscribers.find(x => x.name === name);

        if(!person){
            person = {
                name,
                type,
                books: []
            };
            this.subscribers.push(person);
        }

        person.type = type;

        return person; 
    }

    unsubscribe(name){
        let person = this.subscribers.find(x => x.name === name);

        if(!person){
            throw new Error(`There is no such subscriber as ${name}`);
        }

        let index = this.subscribers.indexOf(person);
        this.subscribers.splice(index, 1);
        
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor){

        let person = this.subscribers.find(x => x.name === subscriberName);

        if(!person){
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let TypeLimit = this.subscriptionTypes[person.type];
        if(person.books.length === TypeLimit){
            throw new Error(`You have reached your subscription limit ${TypeLimit}!`);
        }   

        let newBook = {
            title: bookTitle,
            author: bookAuthor
        };

        person.books.push(newBook);

        return person;
    }

    showInfo (){
        if(this.subscribers.length === 0){
           return `${this.libraryName} has no information about any subscribers`;
        }

        return this.subscribers.reduce((acc, person) => {
            acc += `Subscriber: ${person.name}, Type: ${person.type}\n`;
            acc += "Received books: " + person.books.reduce((acc2, book) => {
                acc2.push(`${book.title} by ${book.author}`);
                return acc2;
            },[]).join(", ");
            return acc + `\n`;
        }, "").trim();
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
