require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/pageLayout/pages/components/BaseLoading" ], {
    "2ee1": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("7333"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    "38d4": function(e, n, t) {
        "use strict";
        var a = t("6f5c");
        t.n(a).a;
    },
    "6f5c": function(e, n, t) {},
    7333: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            props: {
                margin: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                loadding: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            watch: {
                loadding: function() {}
            }
        };
        n.default = a;
    },
    b454: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("c0d9"), o = t("2ee1");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("38d4");
        var u = t("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = s.exports;
    },
    c0d9: function(e, n, t) {
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
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/pageLayout/pages/components/BaseLoading-create-component", {
    "subPackages/pageLayout/pages/components/BaseLoading-create-component": function(e, n, t) {
        t("543d").createComponent(t("b454"));
    }
}, [ [ "subPackages/pageLayout/pages/components/BaseLoading-create-component" ] ] ]);