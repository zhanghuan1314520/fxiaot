require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/chat/Guide" ], {
    "0134": function(e, n, t) {},
    "454d": function(e, n, t) {
        "use strict";
        t.r(n);
        var c = t("460b"), o = t("5210");
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("6431");
        var u = t("f0c5"), r = Object(u.a)(o.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        n.default = r.exports;
    },
    "460b": function(e, n, t) {
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
    5210: function(e, n, t) {
        "use strict";
        t.r(n);
        var c = t("9fb6"), o = t.n(c);
        for (var a in c) "default" !== a && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(a);
        n.default = o.a;
    },
    6431: function(e, n, t) {
        "use strict";
        var c = t("0134");
        t.n(c).a;
    },
    "9fb6": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = t("ca00"), o = {
            computed: {
                top: function() {
                    return "".concat(c.navHeaderHeight + 98, "rpx");
                }
            },
            methods: {
                comfirm: function() {
                    this.$emit("comfirm");
                }
            }
        };
        n.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/chat/Guide-create-component", {
    "subPackages/me/pages/components/chat/Guide-create-component": function(e, n, t) {
        t("543d").createComponent(t("454d"));
    }
}, [ [ "subPackages/me/pages/components/chat/Guide-create-component" ] ] ]);