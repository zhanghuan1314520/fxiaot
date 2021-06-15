require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/components/WhiteSpace" ], {
    2290: function(e, t, n) {
        "use strict";
        n.r(t);
        var c = n("3f4b"), o = n("e281");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("5f97");
        var a = n("f0c5"), u = Object(a.a)(o.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        t.default = u.exports;
    },
    "3f4b": function(e, t, n) {
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
    "5f97": function(e, t, n) {
        "use strict";
        var c = n("6fb9");
        n.n(c).a;
    },
    "6fb9": function(e, t, n) {},
    "97e1": function(e, t, n) {
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
    e281: function(e, t, n) {
        "use strict";
        n.r(t);
        var c = n("97e1"), o = n.n(c);
        for (var r in c) "default" !== r && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(r);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/components/WhiteSpace-create-component", {
    "subPackages/project/components/WhiteSpace-create-component": function(e, t, n) {
        n("543d").createComponent(n("2290"));
    }
}, [ [ "subPackages/project/components/WhiteSpace-create-component" ] ] ]);