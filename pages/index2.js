(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index2" ], {
    1178: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("a22e"), a = e("3a28");
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        var o = e("f0c5"), i = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = i.exports;
    },
    "3a28": function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("be46"), a = e.n(u);
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        t.default = a.a;
    },
    "4a08": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("1178")).default);
        }).call(this, e("543d").createPage);
    },
    a22e: function(n, t, e) {
        "use strict";
        var u = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
    },
    be46: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = e("ca00"), a = {
                onLoad: function(t) {
                    n.redirectTo({
                        url: "/subPackages/project/pages/index2?".concat((0, u.serialization)(t))
                    });
                }
            };
            t.default = a;
        }).call(this, e("543d").default);
    }
}, [ [ "4a08", "common/runtime", "common/vendor" ] ] ]);