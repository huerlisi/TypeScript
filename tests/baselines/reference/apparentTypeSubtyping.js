//// [apparentTypeSubtyping.ts]
// subtype checks use the apparent type of the target type
// S is a subtype of a type T, and T is a supertype of S, if one of the following is true, where S' denotes the apparent type (section 3.8.1) of S:

class Base<U extends String> {
    x: U;
}

// is String (S) a subtype of U extends String (T)? Would only be true if we used the apparent type of U (T)
class Derived<U> extends Base<string> { // error
    x: String;
}

class Base2 {
    x: String;
    static s: String;
}

// is U extends String (S) a subtype of String (T)? Apparent type of U is String so it succeeds
class Derived2<U extends String> extends Base2 { // error because of the prototype's not matching, not because of the instance side
    x: U;
}

//// [apparentTypeSubtyping.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base() {
    }
    return Base;
})();
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        _super.apply(this, arguments);
    }
    return Derived;
})(Base);
var Base2 = (function () {
    function Base2() {
    }
    return Base2;
})();
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        _super.apply(this, arguments);
    }
    return Derived2;
})(Base2);
