# shuffle-iterable
Shuffles any iterable data. Returns new data (doesn't modify original).
Supported types: ```Array, Object, String ```.

### Update: temporarily removed es6 types support.

## Usage

```
npm install shuffle-iterable
```

```javascript
var shuffle = require('shuffle-iterable');

var obj = {a: 5, b: 10, c: 15};
shuffle(obj); // new object randomly shuffled by obj keys;

var arr = [3, 5, 9];
shuffle(arr);

var str = 'abc';
shuffle(str);
```