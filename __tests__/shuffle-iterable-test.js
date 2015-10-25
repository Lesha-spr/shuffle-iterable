jest.dontMock('../index.js');
jest.dontMock('../helpers/randomize-array.js');

var shuffle, array, object, string, isEqual;

describe('randomize-array', function() {
    beforeEach(function() {
        shuffle = require('../index.js');
        array = [1, 2, 3, 4, 5];
        object = {a: 1, b: 2, c: 3, d: 4, e: 5};
        string = 'abcde';

        isEqual = true;
    });

    it('Should return new data', function() {
        var newArray = shuffle(array);
        var newObject = shuffle(object);
        var newString = shuffle(string);

        expect(newArray).not.toEqual(array);
        expect(newObject).not.toEqual(object);
        expect(newString).not.toEqual(string);
    });

    it('Should return shuffled array', function() {
        var newArray = shuffle(array);

        for (var i = 0; i < newArray.length; i++) {
            if (newArray[i] !== array[i]) {
                isEqual = false;
            }
        }

        expect(isEqual).toBe(false);
    });

    it('Should return shuffled object', function() {
        var newObject = shuffle(object);
        var keys = Object.keys(object);
        var newKeys = Object.keys(newObject);

        for (var i = 0; i < keys.length; i++) {
            if (newKeys[i] !== keys[i]) {
                isEqual = false;
            }
        }

        expect(isEqual).toBe(false);
    });

    it('Should return shuffled string', function() {
        var newString = shuffle(string);

        for (var i = 0; i < newString.length; i++) {
            if (newString[i] !== string[i]) {
                isEqual = false;
            }
        }

        expect(isEqual).toBe(false);
    });
});