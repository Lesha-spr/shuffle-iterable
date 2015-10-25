import isObject from 'is-object';

let random = arr => {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);

    return arr;
};

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
            length = iterable.size;

            for (let entry of entries) {
                ret.add(...entry);
            }

            break;

        case isObject(iterable):
            ret = {};
            entries = random(Object.keys(iterable));

            for (let entry of entries) {
                ret[entry] = iterable[entry];
            }

            break;

        case Array.isArray(iterable):
            ret = random(iterable.slice());

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