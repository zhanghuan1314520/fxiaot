require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/richPage" ], {
    "0b8b": function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("9d22"), o = e("19e8");
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        var d = e("f0c5"), r = Object(d.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    },
    "19e8": function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("5fdd"), o = e.n(u);
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        t.default = o.a;
    },
    "497d": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("0b8b")).default);
        }).call(this, e("543d").createPage);
    },
    "5fdd": function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = {
            data: function() {
                return {
                    nodes: ""
                };
            },
            onLoad: function(n) {
                this.nodes = decodeURIComponent(n.nodes);
            }
        };
        t.default = u;
    },
    "9d22": function(n, t, e) {
        "use strict";
        var u = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
    }
}, [ [ "497d", "common/runtime", "common/vendor" ] ] ]);