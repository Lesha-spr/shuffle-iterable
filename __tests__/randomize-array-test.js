jest.dontMock('../helpers/randomize-array.js');

var random, array, length;

describe('randomize-array', function() {
    beforeEach(function() {
        random = require('../helpers/randomize-array.js');
        array = [];

        for (var i = 0; i < 1000; i++) {
            array.push(i);
        }

        length = array.length;
    });

    it('Should return array with same length', function() {
        random(array);

        expect(Array.isArray(array)).toBe(true);
        expect(array.length).toBe(length)
    });

    it('Should return array with not the same indexes', function() {
        var isEqual = true;
        var arr = array.slice();
        random(array);

        for (var i = 0; i < length; i++) {
            if (arr[i] !== random[i]) {
                isEqual = false;
            }
        }

        expect(isEqual).toBe(false);
    });
});