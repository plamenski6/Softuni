let StringBuilder = require("./StringBuilder");
let assert = require("chai").assert;

describe("stringBuilder", () => {

    let actualResult;
    let expectedResult;
    let stringBuilder;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        stringBuilder = new StringBuilder();
    });

    describe("constructor", () => {

        it("without param", () => {
            let actualResult = new StringBuilder();
            let expectedResult = [];

            assert.deepEqual(actualResult._stringArray, expectedResult);
        });

        it("with param",() => {
            let actualResult = new StringBuilder("some");
            let expectedResult = ['s','o','m','e'];

            assert.deepEqual(actualResult._stringArray, expectedResult);
        });

        it("with param different than string",() => {
            let actualResult = () => new StringBuilder(5);
            let expectedResult = 'Argument must be string';

            assert.throw(actualResult, expectedResult);
        });
    });

    describe("append", () => {

        it("append with valid string", () => {
           stringBuilder.append("123");
           actualResult = stringBuilder._stringArray;
           expectedResult = ["1","2","3"];

           assert.deepEqual(actualResult,expectedResult);
        });

        it("append with valid string 2", () => {
            stringBuilder = new StringBuilder("123");
            stringBuilder.append("45");
            actualResult = stringBuilder._stringArray;
            expectedResult = ["1","2","3","4","5"];
 
            assert.deepEqual(actualResult,expectedResult);
         });

         it("append with invalid arg",() => {
            actualResult = () => stringBuilder.append(45);
            expectedResult = 'Argument must be string';

            assert.throw(actualResult, expectedResult);
        });
    });

    describe("prepend", () => {
        it("prepend with valid args", () => {
            stringBuilder = new StringBuilder("as");
            stringBuilder.prepend("kl");

            actualResult = stringBuilder._stringArray;
            expectedResult = ["k","l","a","s"];

            assert.deepEqual(actualResult,expectedResult);
        });

        it("prepend with invalid args", () => {
            actualResult = () => stringBuilder.prepend({});
            expectedResult = "Argument must be string";

            assert.throw(actualResult,expectedResult);
        });
    });

    describe("insertAt", () => {
        it("insertAt with valid args", () => {
            stringBuilder = new StringBuilder("okey");
            stringBuilder.insertAt("P",2)

            actualResult = stringBuilder._stringArray;
            expectedResult = ["o","k","P","e","y"];

            assert.deepEqual(actualResult, expectedResult);
        });

        it("insertAt with invalid args", () => {
            actualResult = () => stringBuilder.insertAt(8);
            expectedResult = "Argument must be string";

            assert.throw(actualResult,expectedResult);
        });
    });

    describe("remove", () => {
        it("remove with valid args", () => {
            stringBuilder = new StringBuilder('1234567');
            stringBuilder.remove(0,3);
            actualResult = stringBuilder._stringArray;
            expectedResult = ["4","5","6","7"];

            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe("toString", () => {
        it("with empty array", () => {
            actualResult = stringBuilder.toString();
            expectedResult = "";

            assert.equal(actualResult, expectedResult);
        });

        it("with no empty array", () => {
            stringBuilder = new StringBuilder('123');
            stringBuilder.append("4");
            stringBuilder.remove(0,2);

            actualResult = stringBuilder.toString();
            expectedResult = "34";

            assert.equal(actualResult, expectedResult);
        });
    });
});
