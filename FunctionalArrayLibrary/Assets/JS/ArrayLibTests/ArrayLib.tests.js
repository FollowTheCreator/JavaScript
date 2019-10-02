const assert = require("assert");
const ArrayLib = require("../ArrayLib/ArrayLib");
const ArrayLibChain = require("../ArrayLib/ArrayLibChain");

const checkArraysEquality = function(array1, array2){
    if(array1.length == array2.length && Array.isArray(array1) && Array.isArray(array2)) {
        for(let i = 0; i < array1.length; i++){
            if(array1[i] != array2[i]){
                return false;
            }
        }

        return true;
    }
    
    return false;
}

describe('ArrayLib', function() {
    describe('take()', function() {
        it('returns [1, 2] array with ([1, 2, 3, 4], 2) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.take([1, 2, 3, 4], 2), 
                    [1, 2]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with ([1, 2, 3, 4], 10) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.take([1, 2, 3, 4], 10), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });

        it('returns [] array with ([1, 2, 3, 4], 0) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.take([1, 2, 3, 4], 0), 
                    []
                ),
                true
            );
        });

        it('returns [] array with ([1, 2, 3, 4], -7) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.take([1, 2, 3, 4], -7), 
                    []
                ),
                true
            );
        });

        it('returns [] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.take(), 
                    []
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with ([1, 2, 3, 4]) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.take([1, 2, 3, 4]), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });
    });

    describe('skip()', function() {
        it('returns [3, 4] array with ([1, 2, 3, 4], 2) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.skip([1, 2, 3, 4], 2), 
                    [3, 4]
                ),
                true
            );
        });

        it('returns [] array with ([1, 2, 3, 4], 10) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.skip([1, 2, 3, 4], 10), 
                    []
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with ([1, 2, 3, 4], 0) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.skip([1, 2, 3, 4], 0), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with ([1, 2, 3, 4], -7) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.skip([1, 2, 3, 4], -7), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });

        it('returns [] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.skip(), 
                    []
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with ([1, 2, 3, 4]) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.skip([1, 2, 3, 4]), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });
    });

    describe('map()', function() {
        it('returns [2, 4, 6] array with ([1, 2, 3], a => a * 2) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.map([1, 2, 3], a => a * 2), 
                    [2, 4, 6]
                ),
                true
            );
        });

        it('returns [] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.map(), 
                    []
                ),
                true
            );
        });

        it('returns [1, 2, 3] array with ([1, 2, 3]) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.map([1, 2, 3]), 
                    [1, 2, 3]
                ),
                true
            );
        });
    });

    describe('reduce()', function() {
        it('returns 115 with ([1, 2, 3, 4, 5], (sum, current) => sum + current, 100) arguments', function() {
            assert.equal(
                ArrayLib.reduce([1, 2, 3, 4, 5], (sum, current) => sum + current, 100), 
                115
            );
        });

        it('returns 15 with ([1, 2, 3, 4, 5], (sum, current) => sum + current) arguments', function() {
            assert.equal(
                ArrayLib.reduce([1, 2, 3, 4, 5], (sum, current) => sum + current), 
                15
            );
        });

        it('returns 5 with ([1, 2, 3, 4, 5]) arguments', function() {
            assert.equal(
                ArrayLib.reduce([1, 2, 3, 4, 5]), 
                5
            );
        });

        it('returns 0 with () arguments', function() {
            assert.equal(
                ArrayLib.reduce(), 
                0
            );
        });
    });

    describe('filter()', function() {
        it('returns [4, 5] array with ([1, 2, 3, 4, 5], item => item > 3) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.filter([1, 2, 3, 4, 5], item => item > 3), 
                    [4, 5]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4, 5] array with ([1, 2, 3, 4, 5]) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.filter([1, 2, 3, 4, 5]), 
                    [1, 2, 3, 4, 5]
                ),
                true
            );
        });

        it('returns [] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.filter(), 
                    []
                ),
                true
            );
        });
    });

    describe('foreach()', function() {
        it('returns [1, 2, 3, 4, 5] array with ([1, 2, 3, 4, 5], item => testArray.push(item)) arguments', function() {
            const testArray = [];
            ArrayLib.foreach([1, 2, 3, 4, 5], item => testArray.push(item));
            assert.equal(
                checkArraysEquality(
                    testArray, 
                    [1, 2, 3, 4, 5]
                ),
                true
            );
        });

        it('does not throw exception with ([1, 2, 3, 4, 5]) arguments', function() {
            assert.equal(
                ArrayLib.foreach([1, 2, 3, 4, 5]), 
                null
            );
        });

        it('does not throw exception with () arguments', function() {
            assert.equal(
                ArrayLib.foreach(), 
                null
            );
        });
    });

    describe('sum()', function() {
        it('first time result.source == "calculated", another times result.source == "cache"', function() {
            const firstResult = ArrayLib.sum([1, 2, 3, 4, 5]);
            const secondResult = ArrayLib.sum([1, 2, 3, 4, 5]);
            const thirdResult = ArrayLib.sum([1, 2, 3, 4, 5]);
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

        it('result.data == 15 with ([1, 2, 3, 4, 5]) arguments', function() {
            const result = ArrayLib.sum([1, 2, 3, 4, 5]);
            assert.equal(
                result.data, 
                15
            );
        });
    });

    describe('chain()', function() {
        it('result.array == [1, 2, 3, 4, 5] with ([1, 2, 3, 4, 5]) arguments', function() {
            const result = ArrayLib.chain([1, 2, 3, 4, 5]);
            assert.equal(
                checkArraysEquality(
                    result.array, 
                    [1, 2, 3, 4, 5]
                ),
                true
            );
        });

        it('result.array == [] with () arguments', function() {
            const result = ArrayLib.chain();
            assert.equal(
                checkArraysEquality(
                    result.array, 
                    []
                ),
                true
            );
        });

        it('result is instance of ArrayLibChain class', function() {
            const result = ArrayLib.chain([1, 2, 3, 4, 5]);
            assert.equal(
                result instanceof ArrayLibChain,
                true
            );
        });
    });
});
