(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/BusiNews" ], {
    "4d44": function(n, t, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
    },
    "87bf": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("b3f7"), a = e.n(o);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = a.a;
    },
    "993d": function(n, t, e) {
        "use strict";
        var o = e("cea7");
        e.n(o).a;
    },
    b3f7: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                props: {
                    dataApi: {
                        type: Array,
                        default: function() {
                            return [ {} ];
                        }
                    }
                },
                data: function() {
                    return {};
                },
                methods: {
                    stopMoveHandle: function() {
                        return !1;
                    },
                    goToUrlHandle: function(t, e) {
                        this.isShow = !1, 1 === parseInt(e, 10) ? n.switchTab({
                            url: t
                        }) : n.navigateTo({
                            url: t
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    cea7: function(n, t, e) {},
    f11a: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("4d44"), a = e("87bf");
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        e("993d");
        var c = e("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/BusiNews-create-component", {
    "pages/components/BusiNews-create-component": function(n, t, e) {
        e("543d").createComponent(e("f11a"));
    }
}, [ [ "pages/components/BusiNews-create-component" ] ] ]);