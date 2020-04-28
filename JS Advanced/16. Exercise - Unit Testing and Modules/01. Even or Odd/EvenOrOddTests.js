let isOddOrEven = require("./EvenOrOdd");
let assert = require("chai").assert;

describe("isOddOrEven behavior", () => {

    it("check the type of the input - Boolean", () => {
        let result = isOddOrEven(false);

        assert.equal(result, undefined, "The result is not undefined");
    });

    it("check the type of the input - Number", () => {
        let result = isOddOrEven(15);

        assert.equal(result, undefined, "The result is not undefined");
    });

    it("check the string - even case", () => {
        let result = isOddOrEven("testingg");

        assert.equal(result, "even", "The result must be even");
    });

    it("check the string - odd case", () => {
        let result = isOddOrEven("str");

        assert.equal(result, "odd", "The result must be odd");
    });
});
