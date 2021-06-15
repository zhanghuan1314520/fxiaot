require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/taskCenter/BaseInfo" ], {
    "087d": function(e, n, t) {
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
    "1df5": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("087d"), o = t("a0a7");
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("4dc8");
        var s = t("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "4dc8": function(e, n, t) {
        "use strict";
        var a = t("649c");
        t.n(a).a;
    },
    "649c": function(e, n, t) {},
    a0a7: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("b1cc"), o = t.n(a);
        for (var c in a) "default" !== c && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    b1cc: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = t("ca00"), o = {
                props: {
                    points: {
                        type: Number,
                        default: 0
                    },
                    liveness: {
                        type: Number,
                        default: 0
                    }
                },
                methods: {
                    goCommonProblem: function() {
                        e.navigateTo({
                            url: (0, a.webviewUrl)("/salesMan/CommonProblem", {
                                qualificationShare: !0
                            })
                        });
                    },
                    goToPage: function(n) {
                        e.navigateTo({
                            url: n
                        });
                    }
                }
            };
            n.default = o;
        }).call(this, t("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/taskCenter/BaseInfo-create-component", {
    "subPackages/me/pages/components/taskCenter/BaseInfo-create-component": function(e, n, t) {
        t("543d").createComponent(t("1df5"));
    }
}, [ [ "subPackages/me/pages/components/taskCenter/BaseInfo-create-component" ] ] ]);