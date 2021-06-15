(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/components/CustomNavHeader" ], {
    "3ec3": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("b628"), o = {
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    bgcolor: {
                        type: String,
                        default: "white"
                    },
                    color: {
                        type: String,
                        default: "rgba(0,0,0,0.85)"
                    }
                },
                data: function() {
                    return {
                        userPhoneInfo: {
                            statusBarHeight: 20
                        },
                        blankHeight: ""
                    };
                },
                mounted: function() {
                    this.userPhoneInfo = a.cache.get("user-phone-info"), this.blankHeight = "".concat(this.userPhoneInfo.statusBarHeight + 44, "px");
                },
                methods: {
                    backPage: function() {
                        1 === getCurrentPages().length ? e.switchTab({
                            url: "/pages/index"
                        }) : e.navigateBack({
                            delta: 1
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, n("543d").default);
    },
    4442: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    5878: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("3ec3"), o = n.n(a);
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        t.default = o.a;
    },
    9838: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4442"), o = n("5878");
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        n("a59d");
        var c = n("f0c5"), s = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    a59d: function(e, t, n) {
        "use strict";
        var a = n("ed74");
        n.n(a).a;
    },
    ed74: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/salesMan/components/CustomNavHeader-create-component", {
    "subPackages/salesMan/components/CustomNavHeader-create-component": function(e, t, n) {
        n("543d").createComponent(n("9838"));
    }
}, [ [ "subPackages/salesMan/components/CustomNavHeader-create-component" ] ] ]);