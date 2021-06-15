require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/BorderContainer" ], {
    1919: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("56aa"), r = t("b1fc");
        for (var a in r) "default" !== a && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(a);
        t("9248");
        var c = t("f0c5"), u = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "56aa": function(n, e, t) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {});
    },
    "6b29": function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                border: {
                    type: Boolean,
                    default: function() {
                        return !0;
                    }
                },
                isFirstItem: {
                    type: Boolean,
                    default: function() {
                        return !1;
                    }
                }
            }
        };
        e.default = o;
    },
    9248: function(n, e, t) {
        "use strict";
        var o = t("b241");
        t.n(o).a;
    },
    b1fc: function(n, e, t) {
        "use strict";
        t.r(e);
        var o = t("6b29"), r = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = r.a;
    },
    b241: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/BorderContainer-create-component", {
    "subPackages/news/components/BorderContainer-create-component": function(n, e, t) {
        t("543d").createComponent(t("1919"));
    }
}, [ [ "subPackages/news/components/BorderContainer-create-component" ] ] ]);