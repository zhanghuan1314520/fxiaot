require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/customNavHeader" ], {
    3367: function(e, t, o) {},
    "3a63": function(e, t, o) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
        o.d(t, "b", function() {
            return n;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {});
    },
    "4c07": function(e, t, o) {
        "use strict";
        var n = o("3367");
        o.n(n).a;
    },
    8094: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("3a63"), a = o("fc55");
        for (var r in a) "default" !== r && function(e) {
            o.d(t, e, function() {
                return a[e];
            });
        }(r);
        o("4c07");
        var c = o("f0c5"), s = Object(c.a)(a.default, n.b, n.c, !1, null, "83d7e02c", null, !1, n.a, void 0);
        t.default = s.exports;
    },
    "9d8f": function(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o("b628"), a = {
                props: {
                    scrolled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        userPhoneInfo: {
                            statusBarHeight: 50
                        }
                    };
                },
                computed: {
                    navigatorColor: function() {
                        return this.scrolled ? "rgba(0,0,0,0.85)" : "#fff";
                    },
                    capsuleBarStyle: function() {
                        return this.scrolled ? "height: 88rpx" : "height: 88rpx; position: fixed; top: ".concat(this.userPhoneInfo.statusBarHeight, "px");
                    }
                },
                watch: {
                    scrolled: function() {
                        this.setHeaderColor();
                    }
                },
                mounted: function() {
                    this.userPhoneInfo = n.cache.get("user-phone-info"), this.setHeaderColor();
                },
                methods: {
                    backPage: function() {
                        1 === getCurrentPages().length ? e.switchTab({
                            url: "/pages/index"
                        }) : e.navigateBack({
                            delta: 1
                        });
                    },
                    setHeaderColor: function() {
                        this.scrolled ? e.setNavigationBarColor({
                            frontColor: "#000000",
                            backgroundColor: "#ffffff"
                        }) : e.setNavigationBarColor({
                            frontColor: "#ffffff",
                            backgroundColor: "#000000"
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, o("543d").default);
    },
    fc55: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("9d8f"), a = o.n(n);
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/customNavHeader-create-component", {
    "subPackages/me/pages/components/customNavHeader-create-component": function(e, t, o) {
        o("543d").createComponent(o("8094"));
    }
}, [ [ "subPackages/me/pages/components/customNavHeader-create-component" ] ] ]);