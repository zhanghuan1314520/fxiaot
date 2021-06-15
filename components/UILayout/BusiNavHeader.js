(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/UILayout/BusiNavHeader" ], {
    "39b2": function(t, o, e) {
        "use strict";
        var n = e("46b7");
        e.n(n).a;
    },
    "46b7": function(t, o, e) {},
    "4e5b": function(t, o, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var e = {
                props: {
                    className: {
                        type: String,
                        default: ""
                    },
                    isSetNavColor: {
                        type: Boolean,
                        default: !0
                    },
                    hasHeight: {
                        type: Boolean,
                        default: !0
                    },
                    isTabbarPage: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        statusBarHeight: t.getSystemInfoSync().statusBarHeight,
                        iconColor: "",
                        titleColor: "",
                        backgroundColor: "",
                        styleMode: ""
                    };
                },
                computed: {
                    isFirstLevel: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                created: function() {
                    this.isSetNavColor && t.setNavigationBarColor({
                        frontColor: "#ffffff",
                        backgroundColor: "#000000"
                    });
                },
                methods: {
                    goBackHandle: function() {
                        this.isFirstLevel ? t.switchTab({
                            url: "/pages/index"
                        }) : t.navigateBack();
                    },
                    setNavbarStyle: function(t) {
                        var o = t.background, e = t.titleColor, n = t.iconColor;
                        this.setBackground(o), this.setIconColor(n), this.setTitleColor(e);
                    },
                    setWhiteMode: function() {
                        "white" !== this.styleMode && (this.setBackground("#fff"), this.setIconColor("rgba(0, 0, 0, 0.85)"), 
                        this.setTitleColor("rgba(0, 0, 0, 0.85)"), this.isSetNavColor && t.setNavigationBarColor({
                            frontColor: "#000000",
                            backgroundColor: "#ffffff"
                        }), this.styleMode = "white");
                    },
                    setTransparentMode: function() {
                        "transparent" !== this.styleMode && (this.backgroundColor = "", this.setIconColor("#fff"), 
                        this.setTitleColor("#fff"), this.isSetNavColor && t.setNavigationBarColor({
                            frontColor: "#ffffff",
                            backgroundColor: "#000000"
                        }), this.styleMode = "transparent");
                    },
                    setBackground: function(t) {
                        "string" == typeof t && (this.backgroundColor = t);
                    },
                    setIconColor: function(t) {
                        "string" == typeof t && (this.iconColor = t);
                    },
                    setTitleColor: function(t) {
                        "string" == typeof t && (this.titleColor = t);
                    }
                }
            };
            o.default = e;
        }).call(this, e("543d").default);
    },
    "5ed7": function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e("db60"), a = e("9dea");
        for (var r in a) "default" !== r && function(t) {
            e.d(o, t, function() {
                return a[t];
            });
        }(r);
        e("39b2");
        var i = e("f0c5"), s = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        o.default = s.exports;
    },
    "9dea": function(t, o, e) {
        "use strict";
        e.r(o);
        var n = e("4e5b"), a = e.n(n);
        for (var r in n) "default" !== r && function(t) {
            e.d(o, t, function() {
                return n[t];
            });
        }(r);
        o.default = a.a;
    },
    db60: function(t, o, e) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(o, "b", function() {
            return n;
        }), e.d(o, "c", function() {
            return a;
        }), e.d(o, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/UILayout/BusiNavHeader-create-component", {
    "components/UILayout/BusiNavHeader-create-component": function(t, o, e) {
        e("543d").createComponent(e("5ed7"));
    }
}, [ [ "components/UILayout/BusiNavHeader-create-component" ] ] ]);