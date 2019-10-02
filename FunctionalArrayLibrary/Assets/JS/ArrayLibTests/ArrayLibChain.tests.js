const assert = require("assert");
const ArrayLib = require("../ArrayLib/ArrayLib");

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

describe('ArrayLibChain', function() {
    describe('value()', function() {
        it('returns [1, 2, 3, 4] array', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });
    }); 

    describe('take()', function() {
        it('returns [1, 2] array with (2) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).take(2).value(), 
                    [1, 2]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with (10) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).take(10).value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });

        it('returns [] array with (0) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).take(0).value(), 
                    []
                ),
                true
            );
        });

        it('returns [] array with (-5) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).take(-5).value(), 
                    []
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).take().value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });
    });   

    describe('skip()', function() {
        it('returns [3, 4] array with (2) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).skip(2).value(), 
                    [3, 4]
                ),
                true
            );
        });

        it('returns [] array with (10) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).skip(10).value(), 
                    []
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with (0) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).skip(0).value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with (-5) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).skip(-5).value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).skip().value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });
    });  

    describe('map()', function() {
        it('returns [2, 4, 6, 8] array with (a => a * 2) arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).map(a => a * 2).value(), 
                    [2, 4, 6, 8]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).map().value(), 
                    [1, 2, 3, 4]
                ),
                true
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
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).filter(item => item > 2).value(), 
                    [3, 4]
                ),
                true
            );
        });

        it('returns [1, 2, 3, 4] array with () arguments', function() {
            assert.equal(
                checkArraysEquality(
                    ArrayLib.chain([1, 2, 3, 4]).filter().value(), 
                    [1, 2, 3, 4]
                ),
                true
            );
        });
    }); 

    describe('foreach()', function() {
        it('returns [3, 4] array with (item => item > 2) arguments', function() {
            const testArray = [];
            ArrayLib.chain([1, 2, 3, 4]).foreach(item => testArray.push(item));
            assert.equal(
                checkArraysEquality(
                    testArray,
                    [1, 2, 3, 4]
                ),
                true
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
