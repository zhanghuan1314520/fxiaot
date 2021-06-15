require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/AutoSend" ], {
    "2d43": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("e853"), o = t("d072");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("f739");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "51b1": function(e, n, t) {
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
    },
    bcacd: function(e, n, t) {},
    d072: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("51b1"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    e853: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    f739: function(e, n, t) {
        "use strict";
        var a = t("bcacd");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/AutoSend-create-component", {
    "subPackages/me/components/ChatInterface/Messages/AutoSend-create-component": function(e, n, t) {
        t("543d").createComponent(t("2d43"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/AutoSend-create-component" ] ] ]);