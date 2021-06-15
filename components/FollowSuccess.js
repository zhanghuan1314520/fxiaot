(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/FollowSuccess" ], {
    "1e34": function(t, e, n) {},
    "2f3c": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("4ec3")), a = {
            props: {
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    followData: []
                };
            },
            created: function() {
                var t = this;
                o.default.lotteryDetail.getFollowText(2).then(function(e) {
                    t.followData = e && e.data || [];
                });
            },
            methods: {
                closeSaleManCallDialog: function(t) {
                    t.target.dataset.id && this.$emit("update:show", !1);
                },
                hideSaleManCallDialog: function() {
                    this.$emit("update:show", !1);
                },
                comfirm: function() {
                    this.$emit("update:show", !1);
                }
            }
        };
        e.default = a;
    },
    "540d": function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    6627: function(t, e, n) {
        "use strict";
        var o = n("1e34");
        n.n(o).a;
    },
    9651: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("2f3c"), a = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = a.a;
    },
    ef03: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("540d"), a = n("9651");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("6627");
        var u = n("f0c5"), l = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = l.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/FollowSuccess-create-component", {
    "components/FollowSuccess-create-component": function(t, e, n) {
        n("543d").createComponent(n("ef03"));
    }
}, [ [ "components/FollowSuccess-create-component" ] ] ]);