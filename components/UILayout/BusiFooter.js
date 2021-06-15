(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiFooter" ], {
    "03de": function(t, n, e) {
        "use strict";
        var o = e("20c6");
        e.n(o).a;
    },
    "10a0": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            props: {
                className: {
                    type: String,
                    default: ""
                },
                isIphonex: {
                    type: Boolean,
                    default: !0
                }
            }
        };
        n.default = o;
    },
    "20c6": function(t, n, e) {},
    "29b1": function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {});
    },
    "8bcc": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("10a0"), c = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = c.a;
    },
    dff1: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("29b1"), c = e("8bcc");
        for (var u in c) "default" !== u && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(u);
        e("03de");
        var a = e("f0c5"), r = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiFooter-create-component", {
    "components/UILayout/BusiFooter-create-component": function(t, n, e) {
        e("543d").createComponent(e("dff1"));
    }
}, [ [ "components/UILayout/BusiFooter-create-component" ] ] ]);