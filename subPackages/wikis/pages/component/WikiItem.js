(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/wikis/pages/component/WikiItem" ], {
    "9c15": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("b0e0"), i = n("f308");
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        n("b17e");
        var o = n("f0c5"), u = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    b0e0: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    b17e: function(e, t, n) {
        "use strict";
        var a = n("b573");
        n.n(a).a;
    },
    b573: function(e, t, n) {},
    f2ae: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                name: "WikiItem",
                props: {
                    item: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    dataContent: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                methods: {
                    goDetailPage: function(t) {
                        e.navigateTo({
                            url: "/subPackages/wikis/pages/detail?id=".concat(t)
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    f308: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("f2ae"), i = n.n(a);
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/wikis/pages/component/WikiItem-create-component", {
    "subPackages/wikis/pages/component/WikiItem-create-component": function(e, t, n) {
        n("543d").createComponent(n("9c15"));
    }
}, [ [ "subPackages/wikis/pages/component/WikiItem-create-component" ] ] ]);