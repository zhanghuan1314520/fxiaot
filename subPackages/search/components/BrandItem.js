require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/search/components/BrandItem" ], {
    7775: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            props: {
                listData: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            }
        };
        e.default = a;
    },
    "7fcd": function(n, e, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
    },
    9630: function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("7775"), c = t.n(a);
        for (var o in a) "default" !== o && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = c.a;
    },
    9875: function(n, e, t) {},
    ba31: function(n, e, t) {
        "use strict";
        var a = t("9875");
        t.n(a).a;
    },
    d0b4: function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("7fcd"), c = t("9630");
        for (var o in c) "default" !== o && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(o);
        t("ba31");
        var r = t("f0c5"), u = Object(r.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/search/components/BrandItem-create-component", {
    "subPackages/search/components/BrandItem-create-component": function(n, e, t) {
        t("543d").createComponent(t("d0b4"));
    }
}, [ [ "subPackages/search/components/BrandItem-create-component" ] ] ]);