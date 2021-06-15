(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/redme" ], {
    "29f2": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("d6cc")).default);
        }).call(this, e("543d").createPage);
    },
    "4ce2": function(n, t, e) {
        "use strict";
        var u = e("f7eb");
        e.n(u).a;
    },
    "66c5": function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(e("f4fd")), c = {
            data: function() {
                return {
                    redmeImg: ""
                };
            },
            onLoad: function() {
                var n = this;
                u.default.getGlobalConfig().then(function(t) {
                    n.redmeImg = t.audit_rules;
                });
            }
        };
        t.default = c;
    },
    "67ba": function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("66c5"), c = e.n(u);
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        t.default = c.a;
    },
    8197: function(n, t, e) {
        "use strict";
        var u = function() {
            this.$createElement, this._self._c;
        }, c = [];
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {});
    },
    d6cc: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("8197"), c = e("67ba");
        for (var a in c) "default" !== a && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(a);
        e("4ce2");
        var f = e("f0c5"), r = Object(f.a)(c.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    },
    f7eb: function(n, t, e) {}
}, [ [ "29f2", "common/runtime", "common/vendor" ] ] ]);