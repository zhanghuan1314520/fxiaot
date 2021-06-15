require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/Loading" ], {
    77437: function(n, e, o) {
        "use strict";
        o.r(e);
        var t = o("9bdb2"), a = o("7b1d0");
        for (var c in a) "default" !== c && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(c);
        var u = o("f0c5"), s = Object(u.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = s.exports;
    },
    "7b1d0": function(n, e, o) {
        "use strict";
        o.r(e);
        var t = o("83da"), a = o.n(t);
        for (var c in t) "default" !== c && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = a.a;
    },
    "83da": function(n, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            props: {
                loading: {
                    type: Boolean,
                    default: !0
                }
            }
        };
        e.default = t;
    },
    "9bdb2": function(n, e, o) {
        "use strict";
        var t = function() {
            this.$createElement, this._self._c;
        }, a = [];
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/Loading-create-component", {
    "subPackages/news/components/Loading-create-component": function(n, e, o) {
        o("543d").createComponent(o("77437"));
    }
}, [ [ "subPackages/news/components/Loading-create-component" ] ] ]);