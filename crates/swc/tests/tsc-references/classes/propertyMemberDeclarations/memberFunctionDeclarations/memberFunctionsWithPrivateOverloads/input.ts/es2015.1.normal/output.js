class C {
    foo(x, y) {
    }
    bar(x1, y1) {
    }
    static foo(x2, y2) {
    }
    static bar(x3, y3) {
    }
}
class D {
    foo(x4, y4) {
    }
    bar(x5, y5) {
    }
    static foo(x6, y6) {
    }
    static bar(x7, y7) {
    }
}
var c;
var r = c.foo(1); // error
var d;
var r2 = d.foo(2); // error
var r3 = C.foo(1); // error
var r4 = D.bar(''); // error
