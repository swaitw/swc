class C {
    foo() {
        C.prototype.foo = ()=>{
        };
    }
    bar(x1) {
        C.prototype.bar = ()=>{
        } // error
        ;
        C.prototype.bar = (x)=>x
        ; // ok
        C.prototype.bar = (x)=>1
        ; // ok
        return 1;
    }
}
