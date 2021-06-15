(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/lotteryDetail/WhiteSpace" ], {
    "02c3": function(e, t, n) {
        "use strict";
        var c = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "5ee0": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
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
        t.default = c;
    },
    "6e04": function(e, t, n) {
        "use strict";
        n.r(t);
        var c = n("5ee0"), o = n.n(c);
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        t.default = o.a;
    },
    "7e063": function(e, t, n) {
        "use strict";
        var c = n("fcb8");
        n.n(c).a;
    },
    c024e: function(e, t, n) {
        "use strict";
        n.r(t);
        var c = n("02c3"), o = n("6e04");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("7e063");
        var r = n("f0c5"), u = Object(r.a)(o.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        t.default = u.exports;
    },
    fcb8: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/lotteryDetail/WhiteSpace-create-component", {
    "pages/components/lotteryDetail/WhiteSpace-create-component": function(e, t, n) {
        n("543d").createComponent(n("c024e"));
    }
}, [ [ "pages/components/lotteryDetail/WhiteSpace-create-component" ] ] ]);