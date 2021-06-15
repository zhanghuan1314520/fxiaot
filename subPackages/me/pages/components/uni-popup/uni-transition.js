require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/uni-popup/uni-transition" ], {
    "431c": function(t, n, e) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    "5b6b": function(t, n, e) {
        "use strict";
        var o = e("cf9e");
        e.n(o).a;
    },
    "5b87": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("c371"), r = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = r.a;
    },
    "8ce4": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("431c"), r = e("5b87");
        for (var a in r) "default" !== a && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        e("5b6b");
        var c = e("f0c5"), i = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = i.exports;
    },
    c371: function(t, n, e) {
        "use strict";
        function o(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                n && (o = o.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                })), e.push.apply(e, o);
            }
            return e;
        }
        function r(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? o(Object(e), !0).forEach(function(n) {
                    a(t, n, e[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                });
            }
            return t;
        }
        function a(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = {
            name: "UniTransition",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                modeClass: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                duration: {
                    type: Number,
                    default: 300
                },
                styles: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    transform: "",
                    ani: {
                        in: "",
                        active: ""
                    }
                };
            },
            computed: {
                stylesObject: function() {
                    var t = this, n = r(r({}, this.styles), {}, {
                        "transition-duration": "".concat(this.duration / 1e3, "s")
                    }), e = "";
                    return Object.keys(n).forEach(function(o) {
                        var r = t.toLine(o);
                        e += "".concat(r, ":").concat(n[o], ";");
                    }), e;
                }
            },
            watch: {
                show: {
                    handler: function(t) {
                        t ? this.open() : this.close();
                    },
                    immediate: !0
                }
            },
            methods: {
                change: function() {
                    this.$emit("click", {
                        detail: this.isShow
                    });
                },
                open: function() {
                    var t = this;
                    clearTimeout(this.timer), this.isShow = !0, this.transform = "", this.ani.in = "", 
                    Object.keys(this.getTranfrom(!1)).forEach(function(n) {
                        "opacity" === n ? t.ani.in = "fade-in" : t.transform += "".concat(t.getTranfrom(!1)[n], " ");
                    }), this.$nextTick(function() {
                        setTimeout(function() {
                            t.animation(!0);
                        }, 50);
                    });
                },
                close: function() {
                    clearTimeout(this.timer), this.animation(!1);
                },
                animation: function(t) {
                    var n = this, e = this.getTranfrom(t);
                    this.transform = "", Object.keys(e).forEach(function(o) {
                        "opacity" === o ? n.ani.in = "fade-".concat(t ? "out" : "in") : n.transform += "".concat(e[o], " ");
                    }), this.timer = setTimeout(function() {
                        t || (n.isShow = !1), n.$emit("change", {
                            detail: n.isShow
                        });
                    }, this.duration);
                },
                getTranfrom: function(t) {
                    var n = {
                        transform: ""
                    };
                    return this.modeClass.forEach(function(e) {
                        switch (e) {
                          case "fade":
                            n.opacity = t ? 1 : 0;
                            break;

                          case "slide-top":
                            n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                            break;

                          case "slide-right":
                            n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                            break;

                          case "slide-bottom":
                            n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                            break;

                          case "slide-left":
                            n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                            break;

                          case "zoom-in":
                            n.transform += "scale(".concat(t ? 1 : .8, ") ");
                            break;

                          case "zoom-out":
                            n.transform += "scale(".concat(t ? 1 : 1.2, ") ");
                        }
                    }), n;
                },
                modeClassArr: function(t) {
                    var n = this.modeClass;
                    if ("string" != typeof n) {
                        var e = "";
                        return n.forEach(function(n) {
                            e += "".concat(n, "-").concat(t, ",");
                        }), e.substr(0, e.length - 1);
                    }
                    return "".concat(n, "-").concat(t);
                },
                toLine: function(t) {
                    return t.replace(/([A-Z])/g, "-$1").toLowerCase();
                }
            }
        };
        n.default = c;
    },
    cf9e: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/uni-popup/uni-transition-create-component", {
    "subPackages/me/pages/components/uni-popup/uni-transition-create-component": function(t, n, e) {
        e("543d").createComponent(e("8ce4"));
    }
}, [ [ "subPackages/me/pages/components/uni-popup/uni-transition-create-component" ] ] ]);