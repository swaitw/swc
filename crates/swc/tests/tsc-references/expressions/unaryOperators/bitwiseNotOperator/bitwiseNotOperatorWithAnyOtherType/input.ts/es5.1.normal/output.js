function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
// @allowUnreachableCode: true
// ~ operator on any type
var ANY;
var ANY1;
var ANY2 = [
    "",
    ""
];
var obj;
var obj1 = {
    x: "",
    y: function() {
    }
};
function foo() {
    var a;
    return a;
}
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
    }
    _createClass(A, null, [
        {
            key: "foo",
            value: function foo() {
                var a;
                return a;
            }
        }
    ]);
    return A;
}();
var M1;
(function(M) {
    var n;
    M.n = n;
})(M1 || (M1 = {
}));
var objA = new A();
// any other type var
var ResultIsNumber = ~ANY1;
var ResultIsNumber1 = ~ANY2;
var ResultIsNumber2 = ~A;
var ResultIsNumber3 = ~M1;
var ResultIsNumber4 = ~obj;
var ResultIsNumber5 = ~obj1;
// any type literal
var ResultIsNumber6 = ~undefined;
var ResultIsNumber7 = ~null;
// any type expressions
var ResultIsNumber8 = ~ANY2[0];
var ResultIsNumber9 = ~obj1.x;
var ResultIsNumber10 = ~obj1.y;
var ResultIsNumber11 = ~objA.a;
var ResultIsNumber12 = ~M1.n;
var ResultIsNumber13 = ~foo();
var ResultIsNumber14 = ~A.foo();
var ResultIsNumber15 = ~(ANY + ANY1);
var ResultIsNumber16 = ~(null + undefined);
var ResultIsNumber17 = ~(null + null);
var ResultIsNumber18 = ~(undefined + undefined);
// multiple ~ operators
var ResultIsNumber19 = ~~ANY;
var ResultIsNumber20 = ~~~(ANY + ANY1);
//miss assignment operators
~ANY;
~ANY1;
~ANY2[0];
~ANY, ANY1;
~obj1.y;
~objA.a;
~M1.n;
~~obj1.x;
