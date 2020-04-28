let lookupChar = require("./CharLookup");
let assert = require("chai").assert;

describe("Function behavior", ()=>{
    
    it("check the string with number type", () => {
        let result = lookupChar(6,5)

        assert.equal(result, undefined, "the result must be undefined");
    });
    
    it("check the index with string type", () => {
        let result = lookupChar("true","5")

        assert.equal(result, undefined, "the result must be undefined");
    });

    it("check the index with floating number", () => {
        let result = lookupChar("true",5.5)

        assert.equal(result, undefined, "the result must be undefined");
    });
    
    it("check the index > string.length", () => {
        let result = lookupChar("test", 16)

        assert.equal(result, "Incorrect index")
    });

    it("check the index < 0", () => {
        let result = lookupChar("test", -3)

        assert.equal(result, "Incorrect index")
    });
    
    it("check the correct result", () => {
        let result = lookupChar("test",2)

        assert.equal(result, "s","must be s")
    });
});
