let BookStore = require('./solution');
let assert = require('chai').assert;

describe("BookStore", () => {

    let myClass;
    beforeEach(function () {
        myClass = new BookStore();
    })

    describe("constructor", () => {
        it("Instantiation with one parameter", () => {
            assert.equal(myClass.name = "name", "name");
            assert.deepEqual(myClass.books, []);
            assert.deepEqual(myClass._workers, []);
        });
    });

    describe("workers", () => {
        it("return", () => {
            let expected = [];
            assert.deepEqual(myClass.workers, expected);
        });
    });

    describe("stockBooks", () => {
        it("return", () => {
            let actual = myClass.stockBooks(['Inferno-Dan Braun'])
            let expected = [{ title: 'Inferno', author: 'Dan Braun' }];
            assert.deepEqual(actual, expected);
        });
    });

    describe("hire", () => {
        it("when we have that person", () => {
            myClass.hire("P", "seller");
            let actual = () => myClass.hire("P", "seller");
            let expected = 'This person is our employee';
            assert.throw(actual, expected);
        });

        it("when we dont have that person", () => {
            myClass.name = "name";
            let actual = myClass.hire("P", "seller");
            let expected = `P started work at name as seller`;
            assert.equal(actual, expected);
        });
    });

    describe("fire", () => {
        it("when we dont have this employee", () => {
            myClass.hire("P", "seller");
            let actual = () => myClass.fire("H");
            let expected = `H doesn't work here`;
            assert.throw(actual, expected);
        });

        it("when we have this employee", () => {
            myClass.hire("P", "seller");
            let actual = myClass.fire("P");
            let expected = `P is fired`;
            assert.equal(actual, expected);
        });

    });

    describe("sellBook", () => {
        it("when book is not in books", () => {
            myClass.stockBooks(['Inferno-Dan Braun']);
            myClass.hire("P", "seller");
            let actual = () => myClass.sellBook("ggg", "mmm");
            let expected = 'This book is out of stock';
            assert.throw(actual, expected);
        });

        it("when worker is not in workers", () => {
            myClass.stockBooks(['Inferno-Dan Braun']);
            myClass.hire("P", "seller");
            let actual = () => myClass.sellBook("Inferno", "J");
            let expected = `J is not working here`
            assert.throw(actual, expected);
        });

        it("when we got everything", () => {
            myClass.stockBooks(['Inferno-Dan Braun']);
            myClass.hire("P", "seller");
            myClass.sellBook("Inferno", "P");
            let actual = myClass.workers;
            let expected = [{
                booksSold: 1,
                name: "P",
                position: "seller"
            }];
            assert.deepEqual(actual, expected);
        });
    });

    describe("printWorkers", () => {
        it("print", () => {
            myClass.stockBooks(['Inferno-Dan Braun']);
            myClass.hire("P", "seller");
            myClass.sellBook("Inferno", "P");
            let actual = myClass.printWorkers();
            let expected = `Name:P Position:seller BooksSold:1`;
            assert.equal(actual, expected);
        });

    });
});
