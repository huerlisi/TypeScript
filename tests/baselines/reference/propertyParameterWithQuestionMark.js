//// [propertyParameterWithQuestionMark.ts]
class C {
    constructor(public x?) { }
}

// x should not be an optional property
var v: C = {}; // Should fail
var v2: { x? }
v = v2; // Should fail
var v3: { x } = new C; // Should succeed

//// [propertyParameterWithQuestionMark.js]
var C = (function () {
    function C(x) {
        this.x = x;
    }
    return C;
})();
var v = {};
var v2;
v = v2;
var v3 = new C;
