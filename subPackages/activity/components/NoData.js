require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/components/NoData" ], {
    "1b4b": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("8bea"), c = e.n(a);
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        n.default = c.a;
    },
    "8bea": function(t, n, e) {
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
                props: {
                    show: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        backSwitch: !1
                    };
                },
                mounted: function() {
                    this.getBackBtnSwitch();
                },
                methods: {
                    goBack: function() {
                        t.navigateBack();
                    },
                    getBackBtnSwitch: function() {
                        var t = this;
                        a.default.activity.backBtnSwitch().then(function(n) {
                            var e = n.data;
                            t.backSwitch = e && e.switch;
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    "9e51f": function(t, n, e) {},
    be2d: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("d030"), c = e("1b4b");
        for (var o in c) "default" !== o && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(o);
        e("ea7d");
        var u = e("f0c5"), i = Object(u.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    },
    d030: function(t, n, e) {
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
    ea7d: function(t, n, e) {
        "use strict";
        var a = e("9e51f");
        e.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/activity/components/NoData-create-component", {
    "subPackages/activity/components/NoData-create-component": function(t, n, e) {
        e("543d").createComponent(e("be2d"));
    }
}, [ [ "subPackages/activity/components/NoData-create-component" ] ] ]);