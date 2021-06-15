require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/ContinueWait" ], {
    "5d7d": function(e, n, t) {
        "use strict";
        var a = t("d958");
        t.n(a).a;
    },
    "858a": function(e, n, t) {
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
    d7c1: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("858a"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    d958: function(e, n, t) {},
    f1d9: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("f5782"), o = t("d7c1");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("5d7d");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    f5782: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/ContinueWait-create-component", {
    "subPackages/me/components/ChatInterface/Messages/ContinueWait-create-component": function(e, n, t) {
        t("543d").createComponent(t("f1d9"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/ContinueWait-create-component" ] ] ]);