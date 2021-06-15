(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/comment/components/WhiteSpace" ], {
    "03d6": function(e, n, t) {},
    "18f3": function(e, n, t) {
        "use strict";
        var c = t("03d6");
        t.n(c).a;
    },
    "60f1": function(e, n, t) {
        "use strict";
        var c = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return c;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    8740: function(e, n, t) {
        "use strict";
        t.r(n);
        var c = t("60f1"), o = t("a2eb");
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("18f3");
        var u = t("f0c5"), r = Object(u.a)(o.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        n.default = r.exports;
    },
    a2eb: function(e, n, t) {
        "use strict";
        t.r(n);
        var c = t("ed62"), o = t.n(c);
        for (var a in c) "default" !== a && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(a);
        n.default = o.a;
    },
    ed62: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = {
            props: {
                height: {
                    type: String,
                    default: function() {
                        return "20rpx";
                    }
                },
                color: {
                    type: String,
                    default: function() {
                        return "transparent";
                    }
                }
            }
        };
        n.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/comment/components/WhiteSpace-create-component", {
    "subPackages/comment/components/WhiteSpace-create-component": function(e, n, t) {
        t("543d").createComponent(t("8740"));
    }
}, [ [ "subPackages/comment/components/WhiteSpace-create-component" ] ] ]);