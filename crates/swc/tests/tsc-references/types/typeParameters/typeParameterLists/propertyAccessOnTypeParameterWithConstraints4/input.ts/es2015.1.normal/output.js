class C {
    f() {
        var x;
        var a = x['notHere'](); // should be string
        return a + x.notHere();
    }
}
var r = new C().f();
var i;
var r2 = i.foo.notHere();
var r2b = i.foo['notHere']();
var a1;
var r3 = a1().notHere();
var r3b = a1()['notHere']();
var b = {
    foo: (x)=>{
        var a = x['notHere'](); // should be string
        return a + x.notHere();
    },
    bar: b.foo().notHere()
};
var r4 = b.foo(new Date());
