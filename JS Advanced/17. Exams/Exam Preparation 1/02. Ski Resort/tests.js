let SkiResort = require('./solution');
let assert = require("chai").assert;

describe('SkiResort', function () {

    let skiResort;
    beforeEach(function () {
        skiResort = new SkiResort();
    });

    let strCompare = (a, b) => assert.deepEqual(JSON.stringify(a), JSON.stringify(b));

    describe("constructor", () => {

        it('Instantiation with one parameter', () => {
            skiResort.name = 'rn';
            
            assert.deepEqual(skiResort.name, "rn");
            strCompare(skiResort.hotels, []);
            assert.equal(skiResort.voters, 0);
        });
    });

    describe("get bestHotel", () => {

        it("with no voters ", () => {
            let expectedResult = "No votes yet";

            assert.deepEqual(skiResort.bestHotel, expectedResult);
        });

        it("with voters ", () => {
            skiResort.build('h1', 10);
            skiResort.leave('h1', 10, 10);
            skiResort.build('h2', 10);
            skiResort.leave('h2', 10, 20);

            // let best = skiResort.hotels.reduce((a, b) => a.points > b.points ? a : b);
             let expectedResult = `Best hotel is h2 with grade 200. Available beds: 20`;
             assert.deepEqual(skiResort.bestHotel,expectedResult);
        });
    });

    describe("build", () => {

        it("with empty name", () => {
            let expectedResult = "Invalid input";

            assert.throw(() => skiResort.build("", 15), expectedResult);
        });

        it("with beds < 1", () => {
            let expectedResult = "Invalid input";

            assert.throw(() => skiResort.build('rn', 0), expectedResult);
        });

        it("with valid args", () => {
            let expectedResult = `Successfully built new hotel - New hotel`;

            assert.deepEqual(skiResort.build('New hotel', 10), expectedResult)
            strCompare(skiResort.hotels, [{
                name: "New hotel",
                beds: 10,
                points: 0
            }])
        });
    });

    describe("book", () => {
        it("with empty name", () => {
            let expectedResult = "Invalid input";

            assert.throw(() => skiResort.book("", 15), expectedResult);
        });

        it("with beds < 1", () => {
            let expectedResult = "Invalid input";

            assert.throw(() => skiResort.book('rn', 0), expectedResult);
        });

        it("with different hotel name", () => {
            let expectedResult = "There is no such hotel";

            assert.throw(() => skiResort.book('rn', 5), expectedResult);
        });

        it("with less beds in hotel", () => {
            skiResort.build('rn', 10);
            let expectedResult = "There is no free space";

            assert.throw(() => skiResort.book('rn', 11), expectedResult);
        });

        it("with more beds in hotel", () => {
            skiResort.build('rn', 10);
            let expectedResult = "Successfully booked";

            assert.deepEqual(skiResort.book('rn', 4), expectedResult);
        });

        it("with more beds and decrementing in hotel", () => {
            skiResort.build('rn', 10);
            skiResort.book('rn', 4);

            strCompare(skiResort.hotels, [{
                name: 'rn',
                beds: 6,
                points: 0
            }]);
        });

    });

    describe("leave", () => {
        it("with empty name", () => {
            let expectedResult = "Invalid input";

            assert.throw(() => skiResort.leave("", 15, 5), expectedResult);
        });

        it("with beds < 1", () => {
            let expectedResult = "Invalid input";

            assert.throw(() => skiResort.leave('rn', 0, 6), expectedResult);
        });

        it("with different hotel name", () => {
            let expectedResult = "There is no such hotel";

            assert.throw(() => skiResort.leave('rn', 5, 0), expectedResult);
        });

        it("should return success message", () => {
            skiResort.build('rn', 10);
            let expectedResult = `10 people left ${'rn'} hotel`;

            assert.deepEqual(skiResort.leave('rn', 10, 10), expectedResult);
        });

        it("should increment hotel stats", () => {
            skiResort.build('rn', 10);
            skiResort.leave('rn', 10, 10);

            strCompare(skiResort.hotels, [{ name: 'rn', beds: 20, points: 100 }]);
        });
    });

    describe('averageGrade', () => {

        it("if voters === 0", () => {
            let expectedResult = "No votes yet";

            assert.equal(skiResort.averageGrade(), expectedResult);
        });

        it("should return averageGrade", () => {
            skiResort.build('rn', 10);
            skiResort.leave('rn', 10, 10);
            let expectedResult = `Average grade: 10.00`;

            assert.equal(skiResort.averageGrade(), expectedResult);
        });
    });
});
