require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/recommendSaleMan" ], {
    "36a2": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("aea8"), c = e.n(a);
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        n.default = c.a;
    },
    3785: function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, c = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {});
    },
    "72ff": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("3785"), c = e("36a2");
        for (var u in c) "default" !== u && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(u);
        var o = e("f0c5"), i = Object(o.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    },
    aea8: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(e("4ec3")), c = {
                onLoad: function(n) {
                    var e = n.project_id;
                    t.showLoading(), a.default.chat.chatChangeSalesman(0, e).then(function(n) {
                        n.data && n.data.session_id && t.redirectTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(n.data.session_id, "&project_id=").concat(n.data.project_id)
                        });
                    }).catch(function() {}).finally(function() {
                        t.hideLoading();
                    });
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    fa56: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("72ff")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "fa56", "common/runtime", "common/vendor" ] ] ]);