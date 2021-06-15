require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/component/customNavHeader" ], {
    "12fd": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("ab6f"), a = o("3d7f");
        for (var r in a) "default" !== r && function(e) {
            o.d(t, e, function() {
                return a[e];
            });
        }(r);
        o("5482");
        var c = o("f0c5"), u = Object(c.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = u.exports;
    },
    "2dd9": function(e, t, o) {
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
                    },
                    arrowColor: {
                        type: String,
                        default: ""
                    },
                    wrapFixed: {
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
                        return this.arrowColor ? this.arrowColor : this.scrolled ? "rgba(0,0,0,0.85)" : "#fff";
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
    "3d7f": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("2dd9"), a = o.n(n);
        for (var r in n) "default" !== r && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(r);
        t.default = a.a;
    },
    5482: function(e, t, o) {
        "use strict";
        var n = o("f7fa");
        o.n(n).a;
    },
    ab6f: function(e, t, o) {
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
    f7fa: function(e, t, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/pages/component/customNavHeader-create-component", {
    "subPackages/project/pages/component/customNavHeader-create-component": function(e, t, o) {
        o("543d").createComponent(o("12fd"));
    }
}, [ [ "subPackages/project/pages/component/customNavHeader-create-component" ] ] ]);