var isObject = require('lodash.isobject');
var isArray = require('lodash.isarray');
var random = require('./helpers/randomize-array.js');

module.exports = function(iterable) {
    var entries;
    var ret;

    switch (true) {
        case isArray(iterable):
            ret = random(iterable.slice());

            break;

        case isObject(iterable):
            ret = {};
            entries = random(Object.keys(iterable));

            for (var i = 0; i < entries.length; i++) {
                ret[i] = iterable[i];
            }

            break;

        case typeof iterable === 'string':
            ret = random(iterable.split('')).join('');

            break;

        default:
            ret = iterable;

            break;
    }

    return ret;
};