require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/robot/msg/textMsg" ], {
    "24d4": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("2e98"), a = n("7578");
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        n("7937");
        var c = n("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "2e98": function(e, t, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    6580: function(e, t, n) {},
    7578: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("97dd"), a = n.n(o);
        for (var s in o) "default" !== s && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = a.a;
    },
    7937: function(e, t, n) {
        "use strict";
        var o = n("6580");
        n.n(o).a;
    },
    "97dd": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            components: {
                BaseLayout: function() {
                    n.e("subPackages/me/pages/components/robot/BaseLayout").then(function() {
                        return resolve(n("0931"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                message: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                isReceive: {
                    type: Boolean,
                    default: !0
                }
            }
        };
        t.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/robot/msg/textMsg-create-component", {
    "subPackages/me/pages/components/robot/msg/textMsg-create-component": function(e, t, n) {
        n("543d").createComponent(n("24d4"));
    }
}, [ [ "subPackages/me/pages/components/robot/msg/textMsg-create-component" ] ] ]);