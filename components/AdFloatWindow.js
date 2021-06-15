(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/AdFloatWindow" ], {
    "0f4d": function(n, t, o) {
        "use strict";
        var e = function() {
            this.$createElement, this._self._c;
        }, a = [];
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {});
    },
    "36b6": function(n, t, o) {
        "use strict";
        o.r(t);
        var e = o("b043"), a = o.n(e);
        for (var r in e) "default" !== r && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(r);
        t.default = a.a;
    },
    7332: function(n, t, o) {},
    "840d": function(n, t, o) {
        "use strict";
        o.r(t);
        var e = o("0f4d"), a = o("36b6");
        for (var r in a) "default" !== r && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(r);
        o("9a0d");
        var u = o("f0c5"), c = Object(u.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = c.exports;
    },
    "9a0d": function(n, t, o) {
        "use strict";
        var e = o("7332");
        o.n(e).a;
    },
    b043: function(n, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var e = {
            components: {
                ImageLoader: function() {
                    o.e("components/ImageLoader").then(function() {
                        return resolve(o("24e0"));
                    }.bind(null, o)).catch(o.oe);
                },
                Authorization: function() {
                    o.e("components/Authorization").then(function() {
                        return resolve(o("5326"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            props: {
                adFloatWindowUrl: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                adFloatWindowImg: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                bottom: {
                    type: String,
                    default: function() {
                        return "132rpx";
                    }
                }
            },
            methods: {
                gotoTargetUrl: function() {
                    wx.navigateTo({
                        url: this.adFloatWindowUrl
                    });
                }
            }
        };
        t.default = e;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/AdFloatWindow-create-component", {
    "components/AdFloatWindow-create-component": function(n, t, o) {
        o("543d").createComponent(o("840d"));
    }
}, [ [ "components/AdFloatWindow-create-component" ] ] ]);