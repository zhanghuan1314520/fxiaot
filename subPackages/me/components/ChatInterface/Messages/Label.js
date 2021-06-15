require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/Label" ], {
    "0e0d": function(e, n, t) {},
    "1c23": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("b749"), c = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = c.a;
    },
    "42de": function(e, n, t) {
        "use strict";
        var a = t("0e0d");
        t.n(a).a;
    },
    4451: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("ef2a"), c = t("1c23");
        for (var o in c) "default" !== o && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(o);
        t("42de");
        var s = t("f0c5"), u = Object(s.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    b749: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            components: {
                BaseLayout: function() {
                    Promise.all([ t.e("subPackages/me/common/vendor"), t.e("subPackages/me/components/ChatInterface/Messages/BaseLayout") ]).then(function() {
                        return resolve(t("607a"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                message: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            }
        };
        n.default = a;
    },
    ef2a: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/Label-create-component", {
    "subPackages/me/components/ChatInterface/Messages/Label-create-component": function(e, n, t) {
        t("543d").createComponent(t("4451"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/Label-create-component" ] ] ]);