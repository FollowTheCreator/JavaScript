const assert = require("assert");
const ArrayLib = require("../ArrayLib/ArrayLib");

describe('ArrayLibChain', function() {
    describe('iteration', function() {
        it('returns [1, 2, 3, 4] array', function() {
            const array = ArrayLib.chain([1, 2, 3, 4]).array;
            assert.deepEqual(
                [...array], 
                [1, 2, 3, 4]
            );
        });
    }); 

    describe('value()', function() {
        it('returns [1, 2, 3, 4] array', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).value(), 
                [1, 2, 3, 4]
            );
        });
    }); 

    describe('take()', function() {
        it('returns [1, 2] array with (2) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).take(2).value(), 
                [1, 2]
            );
        });

        it('returns [1, 2, 3, 4] array with (10) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).take(10).value(), 
                [1, 2, 3, 4]
            );
        });

        it('returns [] array with (0) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).take(0).value(), 
                []
            );
        });

        it('returns [] array with (-5) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).take(-5).value(), 
                []
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).take().value(), 
                [1, 2, 3, 4]
            );
        });
    });   

    describe('skip()', function() {
        it('returns [3, 4] array with (2) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).skip(2).value(), 
                [3, 4]
            );
        });

        it('returns [] array with (10) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).skip(10).value(), 
                []
            );
        });

        it('returns [1, 2, 3, 4] array with (0) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).skip(0).value(), 
                [1, 2, 3, 4]
            );
        });

        it('returns [1, 2, 3, 4] array with (-5) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).skip(-5).value(), 
                [1, 2, 3, 4]
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).skip().value(), 
                [1, 2, 3, 4]
            );
        });
    });  

    describe('map()', function() {
        it('returns [2, 4, 6, 8] array with (a => a * 2) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).map(a => a * 2).value(), 
                [2, 4, 6, 8]
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).map().value(), 
                [1, 2, 3, 4]
            );
        });
    });  

    describe('reduce()', function() {
        it('returns 110 with ((sum, current) => sum + current, 100) arguments', function() {
            assert.equal(
                ArrayLib.chain([1, 2, 3, 4]).reduce((sum, current) => sum + current, 100), 
                110
            );
        });

        it('returns 10 with ((sum, current) => sum + current) arguments', function() {
            assert.equal(
                ArrayLib.chain([1, 2, 3, 4]).reduce((sum, current) => sum + current), 
                10
            );
        });

        it('returns 4 with () arguments', function() {
            assert.equal(
                ArrayLib.chain([1, 2, 3, 4]).reduce(), 
                4
            );
        });
    });  

    describe('filter()', function() {
        it('returns [3, 4] array with (item => item > 2) arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).filter(item => item > 2).value(), 
                [3, 4]
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.deepEqual(
                ArrayLib.chain([1, 2, 3, 4]).filter().value(), 
                [1, 2, 3, 4]
            );
        });
    }); 

    describe('foreach()', function() {
        it('returns [3, 4] array with (item => item > 2) arguments', function() {
            const testArray = [];
            ArrayLib.chain([1, 2, 3, 4]).foreach(item => testArray.push(item));
            assert.deepEqual(
                testArray,
                [1, 2, 3, 4]
            );
        });

        it('does not throw exception with () arguments', function() {
            assert.equal(
                ArrayLib.chain([1, 2, 3, 4]).foreach(), 
                null
            );
        });
    });

    describe('sum()', function() {
        it('first time result.source == "calculated", another times result.source == "cache"', function() {
            const chain = ArrayLib.chain([1, 2, 3, 4]);
            const firstResult = chain.sum();
            const secondResult = chain.sum();
            const thirdResult = chain.sum();
            assert.equal(
                firstResult.source, 
                "calculated"
            );
            assert.equal(
                secondResult.source, 
                "cache"
            );
            assert.equal(
                thirdResult.source, 
                "cache"
            );
        });

        it('result.data == 10', function() {
            assert.equal(
                ArrayLib.chain([1, 2, 3, 4]).sum().data, 
                10
            );
        });
    });
});
