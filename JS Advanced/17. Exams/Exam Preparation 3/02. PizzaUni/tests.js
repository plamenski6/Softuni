let PizzUni = require('./solution');
let assert = require('chai').assert;

describe("PizzUni", () => {

    let pizzUni;
    beforeEach(function () {
        pizzUni = new PizzUni();
    });

    describe("constructor", () => {

        it("test the constructor", () => {
            assert.deepEqual(pizzUni.registeredUsers, []);
            assert.deepEqual(pizzUni.availableProducts, {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            });
            assert.deepEqual(pizzUni.orders, []);
        });
    });

    describe("registerUser", () => {

        it("with already used email", () => {
            pizzUni.registerUser('someEmail');
            let actual = () => pizzUni.registerUser('someEmail');
            let expected = `This email address (someEmail) is already being used!`;

            assert.throw(actual, expected);
        });

        it("registeredUsers length check", () => {
            pizzUni.registerUser('someEmail');
            let actual = pizzUni.registeredUsers.length;
            let expected = 1

            assert.equal(actual, expected);
        });

        it("1st el equal to current", () => {
            pizzUni.registerUser('someEmail');
            let actual = pizzUni.registeredUsers[0];
            let expected = {
                email: 'someEmail',
                orderHistory: []
            };

            assert.deepEqual(actual, expected);
        });

        it("returned current user", () => {
            let actual = pizzUni.registerUser('someEmail');
            let expected = {
                email: 'someEmail',
                orderHistory: []
            };

            assert.deepEqual(actual, expected);
        });
    });

    describe("makeAnOrder", () => {

        it("with unregistered user", () => {
            let actual = () => pizzUni.makeAnOrder('005', '4', '6');
            let expected = `You must be registered to make orders!`;

            assert.throw(actual, expected);
        });

        it('make order with invalid pizza', () => {
            pizzUni.registerUser('005');
            let actual = () => pizzUni.makeAnOrder('005', 'p', 'l');
            let expected = 'You must order at least 1 Pizza to finish the order.';

            assert.throw(actual, expected);
        });

        it('make order with valid things', () => {
            pizzUni.registerUser('005');
            pizzUni.makeAnOrder('005', 'Italian Style', 'Water');
            let actual = pizzUni.registeredUsers[0].orderHistory;
            let expected = [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
            }];

            assert.deepEqual(actual, expected);
        });

        it('make order - array check', () => {
            pizzUni.registerUser('005');
            pizzUni.makeAnOrder('005', 'Italian Style', 'Water');
            let actual = pizzUni.orders;
            let expected = [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: `005`,
                status: 'pending'
            }];

            assert.deepEqual(actual, expected);
        });

        it('make order - array check', () => {
            pizzUni.registerUser('005');
            let actual = pizzUni.makeAnOrder('005', 'Italian Style', 'Water');
            let expected = 0;

            assert.deepEqual(actual, expected);
        });
    });

    describe("detailsAboutMyOrder", () => {

        it('status order', () => {
            pizzUni.registerUser('005');
            pizzUni.makeAnOrder('005', 'Italian Style', 'Water');
            let actual = pizzUni.detailsAboutMyOrder(0);
            let expected = `Status of your order: pending`;

            assert.equal(actual, expected);
        });
    });

    describe("doesTheUserExist", () => {

        it('return email', () => {
            pizzUni.registerUser('005');
            let actual = pizzUni.doesTheUserExist('005');
            let expected = {
                email: '005',
                orderHistory: []
            };

            assert.deepEqual(actual, expected);
        });
    });

    describe("completeOrder", () => {

        it('complete order', () => {
            pizzUni.registerUser('005');
            pizzUni.makeAnOrder('005', 'Italian Style', 'Water');
            let actual = pizzUni.completeOrder();
            let expected = {
                orderedPizza: 'Italian Style',
                orderedDrink: 'Water',
                email: `005`,
                status: 'completed'
            }

            assert.deepEqual(actual, expected)
        });

    });
});
