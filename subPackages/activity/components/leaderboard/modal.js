require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/leaderboard/modal" ], {
    "17c6": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = {
            mixins: [ function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("ff28")).default ],
            props: {
                item: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                rest: {
                    type: Number,
                    default: function() {
                        return 0;
                    }
                }
            },
            data: function() {
                return {};
            },
            methods: {
                handleMaskClick: function() {
                    this.close();
                },
                confirm: function() {
                    this.$emit("confirm");
                }
            }
        };
        e.default = c;
    },
    "4b82": function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n("17c6"), a = n.n(c);
        for (var o in c) "default" !== o && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(o);
        e.default = a.a;
    },
    "9bb7": function(t, e, n) {},
    ad38: function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n("ec31"), a = n("4b82");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("c289");
        var u = n("f0c5"), r = Object(u.a)(a.default, c.b, c.c, !1, null, "57988acc", null, !1, c.a, void 0);
        e.default = r.exports;
    },
    c289: function(t, e, n) {
        "use strict";
        var c = n("9bb7");
        n.n(c).a;
    },
    ec31: function(t, e, n) {
        "use strict";
        var c = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return c;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/leaderboard/modal-create-component", {
    "subPackages/activity/components/leaderboard/modal-create-component": function(t, e, n) {
        n("543d").createComponent(n("ad38"));
    }
}, [ [ "subPackages/activity/components/leaderboard/modal-create-component" ] ] ]);