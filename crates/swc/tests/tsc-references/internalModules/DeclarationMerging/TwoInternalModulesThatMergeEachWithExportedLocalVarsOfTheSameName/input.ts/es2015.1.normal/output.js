var A1;
//@filename: part1.ts
export { A1 as A };
(function(A) {
    var Utils1;
    (function(Utils) {
        function mirror(p) {
            return {
                x: p.y,
                y: p.x
            };
        }
        Utils.mirror = mirror;
    })(Utils1 || (Utils1 = {
    }));
    A.Origin = {
        x: 0,
        y: 0
    };
    A.Utils = Utils1;
})(A1 || (A1 = {
}));
(function(A) {
    A.Origin = {
        x: 0,
        y: 0
    };
    (function(Utils) {
        class Plane {
            constructor(tl, br){
                this.tl = tl;
                this.br = br;
            }
        }
        Utils.Plane = Plane;
    })(Utils || (Utils = {
    }));
})(A1 || (A1 = {
}));
