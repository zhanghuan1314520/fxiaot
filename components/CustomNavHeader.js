(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/CustomNavHeader" ], {
    "5ca7": function(t, e, n) {},
    "7ec9c": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("f5e9"), c = n("ab91");
        for (var o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        n("a6c3");
        var u = n("f0c5"), r = Object(u.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    8619: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    title: {
                        type: String,
                        default: "杭州房小团"
                    },
                    bgcolor: {
                        type: String,
                        default: "white"
                    },
                    color: {
                        type: String,
                        default: "rgba(0,0,0,0.85)"
                    }
                },
                data: function() {
                    return {
                        statusBarHeight: t.getSystemInfoSync().statusBarHeight
                    };
                },
                methods: {
                    backPage: function() {
                        1 === getCurrentPages().length ? t.switchTab({
                            url: "/pages/index"
                        }) : t.navigateBack({
                            delta: 1
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    a6c3: function(t, e, n) {
        "use strict";
        var a = n("5ca7");
        n.n(a).a;
    },
    ab91: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8619"), c = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = c.a;
    },
    f5e9: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/CustomNavHeader-create-component", {
    "components/CustomNavHeader-create-component": function(t, e, n) {
        n("543d").createComponent(n("7ec9c"));
    }
}, [ [ "components/CustomNavHeader-create-component" ] ] ]);