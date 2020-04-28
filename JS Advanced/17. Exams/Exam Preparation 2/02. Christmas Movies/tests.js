let ChristmasMovies = require('./solution');
let assert = require('chai').assert;

describe('ChristmasMovies', () => {

    let christmasMovies;
    beforeEach(function () {
        christmasMovies = new ChristmasMovies();
    })

    describe("constructor", () => {

        it("Instantiation with no parameters", () => {
            assert.deepEqual(christmasMovies.movieCollection, []);
            assert.deepEqual(christmasMovies.watched, {});
            assert.deepEqual(christmasMovies.actors, []);
        });
    });

    describe("buyMovie", () => {

        it("test with invalid params", () => {
            christmasMovies.buyMovie("G", ["f", "s"]);
            let actual = () => christmasMovies.buyMovie("G", ["f", "s"]);
            let expected = `You already own G in your collection!`;

            assert.throw(actual, expected);
        });

        it("test with valid params", () => {
            let actual = christmasMovies.buyMovie("G", ["f", "s", "s"]);
            let expected = 'You just got G to your collection in which f, s are taking part!';

            assert.equal(actual, expected);
        });

        it("test movieCollection", () => {
            christmasMovies.buyMovie("G", ["f", "s", "s"]);
            let actual = christmasMovies.movieCollection;
            let expected = [{ name: 'G', actors: ['f', 's'] }];

            assert.deepEqual(actual, expected);
        });

    });

    describe("discardMovie", () => {

        it("with 0 length", () => {

            let actual = () => christmasMovies.discardMovie("H");
            let expected = `H is not at your collection!`;

            assert.throw(actual, expected);
        });

        it("if it not watch yet", () => {
            christmasMovies.buyMovie("H", ['f', 's']);
            let actual = () => christmasMovies.discardMovie("H");
            let expected = `H is not watched!`;

            assert.throw(actual, expected);
        });

        it("return message in throw away", () => {
            christmasMovies.buyMovie("H", ['f', 's']);
            christmasMovies.watchMovie("H");
            let actual = christmasMovies.discardMovie("H");
            let expected = `You just threw away H!`

            assert.equal(actual, expected);
        });
    });

    describe("watchMovie", () => {

        it("if it not in the wathc list", () => {

            let actual = () => christmasMovies.watchMovie("H");
            let expected = 'No such movie in your collection!';

            assert.throw(actual, expected);
        });

        it("with valid params", () => {
            christmasMovies.buyMovie("H", ['f', 's']);
            christmasMovies.watchMovie("H");
            christmasMovies.watchMovie("H");
            let actual = christmasMovies.watched["H"];
            let expected = 2;

            assert.equal(actual, expected)
        });
    });

    describe("favouriteMovie", () => {

        it("if there no movies in the watched list", () => {
            christmasMovies.buyMovie("H", ['f', 's']);
            let actual = () => christmasMovies.favouriteMovie();
            let expected = 'You have not watched a movie yet this year!';

            assert.throw(actual, expected);
        });

        it("with valid params", () => {
            christmasMovies.buyMovie("H", ['f', 's']);
            christmasMovies.buyMovie("G", ['t', 'j']);
            christmasMovies.watchMovie("H");
            christmasMovies.watchMovie("H");
            christmasMovies.watchMovie("G");
            let actual = christmasMovies.favouriteMovie();
            let expected = `Your favourite movie is H and you have watched it 2 times!`;

            assert.equal(actual, expected);
        });
    });

    describe("mostStarredActor", () => {

        it("if there are no movies in the coll", () => {
            let actual = () => christmasMovies.mostStarredActor();
            let expected = 'You have not watched a movie yet this year!';

            assert.throw(actual, expected);
        });
        
        it("with valid params", () => {
            christmasMovies.buyMovie("H", ['f', 's']);
            christmasMovies.buyMovie("W", ['f', 'r']);
            christmasMovies.buyMovie("G", ['t', 'j']);
            let actual = christmasMovies.mostStarredActor();
            let expected = `The most starred actor is f and starred in 2 movies!`

            assert.equal(actual, expected);
        });
    });
});
