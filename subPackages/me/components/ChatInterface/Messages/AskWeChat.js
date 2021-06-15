require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/components/ChatInterface/Messages/AskWeChat" ], {
    "3f64": function(e, n, t) {
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
    "41d5": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("3f64"), s = t("51ff");
        for (var o in s) "default" !== o && function(e) {
            t.d(n, e, function() {
                return s[e];
            });
        }(o);
        t("ee7f");
        var c = t("f0c5"), u = Object(c.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "51ff": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8763"), s = t.n(a);
        for (var o in a) "default" !== o && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = s.a;
    },
    "7fd9": function(e, n, t) {},
    8763: function(e, n, t) {
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
    ee7f: function(e, n, t) {
        "use strict";
        var a = t("7fd9");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/components/ChatInterface/Messages/AskWeChat-create-component", {
    "subPackages/me/components/ChatInterface/Messages/AskWeChat-create-component": function(e, n, t) {
        t("543d").createComponent(t("41d5"));
    }
}, [ [ "subPackages/me/components/ChatInterface/Messages/AskWeChat-create-component" ] ] ]);