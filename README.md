# shuffle-iterable
Shuffles any iterable data. Returns new data (doesn't modify original).
Supported types: ```Array, Object, Map, Set, String ```.

## Usage

```
npm install shuffle-iterable
```

```javascript
import shuffle from 'shuffle-iterable';

let map = new Map().set('a', 5).set('b', true).set({}, '0');
shuffle(map) // new Map randomly shuffled by map source;

let set = new Set().add(5).add(true).add('0');
shuffle(set);

let obj = {a: 5, b: 10, c: 15};
shuffle(obj);

let arr = [3, 5, 9];
shuffle(arr);

let str = 'abc';
shuffle(str);
```