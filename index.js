import isObject from 'is-object';
import random from './helpers/randomize-array.js';

export default iterable => {
    let entries;
    let ret;

    switch (true) {
        case iterable instanceof Map:
            ret = new Map();
            entries = random(Array.from(iterable.entries()));

            for (let entry of entries) {
                ret.set(...entry);
            }

            break;

        case iterable instanceof Set:
            ret = new Set();
            entries = random(Array.from(iterable.entries()));

            for (let entry of entries) {
                ret.add(...entry);
            }

            break;

        case Array.isArray(iterable):
            ret = random(iterable.slice());

            break;

        case isObject(iterable):
            ret = {};
            entries = random(Object.keys(iterable));

            for (let entry of entries) {
                ret[entry] = iterable[entry];
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