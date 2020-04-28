let Parser = require("./solution.js");
let assert = require("chai").assert;

describe("MyTests", () => {

    let parser;
    beforeEach(function () {
        parser = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
    });

    describe("constructor", () => {
        it("instantiation with one parameter ", () => {
            assert.deepEqual(parser.data,JSON.parse('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]'))
            assert.deepEqual(parser._log, [ '0: getData' ]);
            assert.deepEqual(parser._addToLog("g"), 'Added to log');
        });

    });

    describe("getter", () => {
    
        it("return", () => {
            
            let expected = `[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]`;
            assert.deepEqual(parser.data, JSON.parse(expected));
            
        });

        it("", () => {
            parser._addToLog("g");
            parser._addToLog("h");
            assert.deepEqual(parser._log, ["0: g","1: h"]);
            assert.equal(parser._log.length, 2)
        });
    });

    describe("print", () => {
        it("print", () => {
            let actual = parser.print();
            let expected = 'id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR';
            assert.equal(actual, expected);
            //This test cover 80% of what we need!!!
        });
    });

    it("", () => {
            
    });
    it("", () => {
            
    });
    it("", () => {
            
    });
    it("", () => {
            
    });
    it("", () => {
            
    });
    it("", () => {
            
    });
});
