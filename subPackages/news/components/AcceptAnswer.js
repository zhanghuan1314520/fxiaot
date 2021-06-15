require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/components/AcceptAnswer" ], {
    "410d": function(n, e, t) {
        "use strict";
        var c = t("cbbb");
        t.n(c).a;
    },
    "4a4e": function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = {
            props: {
                name: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                avatar: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                content: {
                    type: String,
                    default: function() {
                        return "";
                    }
                }
            }
        };
        e.default = c;
    },
    "505f": function(n, e, t) {
        "use strict";
        t.r(e);
        var c = t("4a4e"), o = t.n(c);
        for (var u in c) "default" !== u && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        e.default = o.a;
    },
    "56b7c": function(n, e, t) {
        "use strict";
        var c = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(e, "b", function() {
            return c;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    },
    "98db": function(n, e, t) {
        "use strict";
        t.r(e);
        var c = t("56b7c"), o = t("505f");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("410d");
        var a = t("f0c5"), r = Object(a.a)(o.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        e.default = r.exports;
    },
    cbbb: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/news/components/AcceptAnswer-create-component", {
    "subPackages/news/components/AcceptAnswer-create-component": function(n, e, t) {
        t("543d").createComponent(t("98db"));
    }
}, [ [ "subPackages/news/components/AcceptAnswer-create-component" ] ] ]);