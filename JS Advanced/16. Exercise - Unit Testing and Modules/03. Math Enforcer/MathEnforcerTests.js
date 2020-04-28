let mathEnforcer = require("./MathEnforcer");
let assert = require("chai").assert

describe("mathEnforcer", () => {

    describe("addFive", () => {

        it("check with invalid element", () => {
            let actualResult = mathEnforcer.addFive("string");
            
            assert.equal(actualResult, undefined, "Element must be string");
        });

        it("check with correct element", () => {
            let actualResult = mathEnforcer.addFive(5);
            let expectedResult = 10;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });

        it("check with negative element", () => {
            let actualResult = mathEnforcer.addFive(-15);
            let expectedResult = -10;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });

        it("check with floating-point element", () => {
            let actualResult = mathEnforcer.addFive(6.3);
            let expectedResult = 11.3;

            assert.equal(actualResult,expectedResult,"Element must be number");
        });
    });
    
    describe("subtractTen", () => {

        it("check with invalid element", () => {
            let actualResult = mathEnforcer.subtractTen("string");

            assert.equal(actualResult, undefined, "Element must be string");
        }); 
        
        it("check with correct element", () => {
            let actualResult = mathEnforcer.subtractTen(17);
            let expectedResult = 7;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });

        it("check with negative element", () => {
            let actualResult = mathEnforcer.subtractTen(-25);
            let expectedResult = -35;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });

        it("check with floating-point element", () => {
            let actualResult = mathEnforcer.subtractTen(6.5);
            let expectedResult = -3.5;

            assert.equal(actualResult,expectedResult,"Element must be number");
        });
    });
    
    describe("sum", () => {

        it("check with invalid first element", () => {
            let actualResult = mathEnforcer.sum("string", 5);

            assert.equal(actualResult, undefined, "First element must be string");
        });

        it("check with invalid second element", () => {
            let actualResult = mathEnforcer.sum(3, "string");

            assert.equal(actualResult, undefined, "Second element must be string");
        });

        it("check with correct elements", () => {
            let actualResult = mathEnforcer.sum(10,3);
            let expectedResult = 13;

            assert.equal(actualResult, expectedResult, "The elements must be numbers");
        });

        it("check with negative elements", () => {
            let actualResult = mathEnforcer.sum(25,-25);
            let expectedResult = 0;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });

        it("check with floating-point elements", () => {
            let actualResult = mathEnforcer.sum(59.8, 10.2);
            let expectedResult = 70;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });

        it("check with negative floating-point elements", () => {
            let actualResult = mathEnforcer.sum(59.8, -10.8);
            let expectedResult = 49;

            assert.equal(actualResult, expectedResult,"Element must be number");
        });
    });
});
