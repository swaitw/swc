var param;
(function() {
    for(var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++)numbers[_key] = arguments[_key];
    numbers.every(function(n) {
        return n > 0;
    });
})(5, 6, 7), (function() {
    for(var _len = arguments.length, mixed = new Array(_len), _key = 0; _key < _len; _key++)mixed[_key] = arguments[_key];
    mixed.every(function(n) {
        return !!n;
    });
})(5, "oops", "oh no"), (function() {
    for(var _len = arguments.length, noNumbers = new Array(_len), _key = 0; _key < _len; _key++)noNumbers[_key] = arguments[_key];
    noNumbers.some(function(n) {
        return n > 0;
    });
})(), (function(first) {
    for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)rest[_key - 1] = arguments[_key];
})(8, 9, 10), (void 0 === param ? {
    u: 23
} : param).u, (function(f) {
    f(12);
})(function(i) {
    return i;
}), ({
    a: function(n) {
        return n;
    }
}).a(11);
