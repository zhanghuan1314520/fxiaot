require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/System" ], {
    "0a2d": function(e, n, t) {},
    8565: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return s;
        }), t.d(n, "a", function() {});
    },
    "9ec2": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("b50d"), s = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = s.a;
    },
    "9feb": function(e, n, t) {
        "use strict";
        var a = t("0a2d");
        t.n(a).a;
    },
    b380: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8565"), s = t("9ec2");
        for (var o in s) "default" !== o && function(e) {
            t.d(n, e, function() {
                return s[e];
            });
        }(o);
        t("9feb");
        var c = t("f0c5"), u = Object(c.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    b50d: function(e, n, t) {
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
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("a3fe")).default ],
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
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/System-create-component", {
    "subPackages/me/components/ChatInterface/Messages/System-create-component": function(e, n, t) {
        t("543d").createComponent(t("b380"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/System-create-component" ] ] ]);