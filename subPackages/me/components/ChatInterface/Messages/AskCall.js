require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/AskCall" ], {
    "0472": function(e, n, t) {},
    "45cb": function(e, n, t) {
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
            },
            methods: {
                clickHandle: function(e) {
                    this.$emit("onChoose", e);
                }
            }
        };
        n.default = a;
    },
    "6fc31": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("45cb"), c = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = c.a;
    },
    "9e28": function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
    },
    f665: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("9e28"), c = t("6fc31");
        for (var o in c) "default" !== o && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(o);
        t("fb8c");
        var s = t("f0c5"), u = Object(s.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    fb8c: function(e, n, t) {
        "use strict";
        var a = t("0472");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/AskCall-create-component", {
    "subPackages/me/components/ChatInterface/Messages/AskCall-create-component": function(e, n, t) {
        t("543d").createComponent(t("f665"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/AskCall-create-component" ] ] ]);