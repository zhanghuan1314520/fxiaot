require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/component/NoData" ], {
    "8bd5": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            props: {
                text: {
                    type: String,
                    default: "暂无数据"
                },
                image: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                imgUrl: function() {
                    return this.image || "https://imgcdn.huanjutang.com/image/2020/06/01/c2e52b08670ade21b2f9127a51438820.png";
                }
            }
        };
        e.default = a;
    },
    9713: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    acd2: function(t, e, n) {},
    d817: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8bd5"), c = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = c.a;
    },
    f2d8: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("9713"), c = n("d817");
        for (var o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        n("fc4c");
        var u = n("f0c5"), r = Object(u.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    fc4c: function(t, e, n) {
        "use strict";
        var a = n("acd2");
        n.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/pages/component/NoData-create-component", {
    "subPackages/project/pages/component/NoData-create-component": function(t, e, n) {
        n("543d").createComponent(n("f2d8"));
    }
}, [ [ "subPackages/project/pages/component/NoData-create-component" ] ] ]);