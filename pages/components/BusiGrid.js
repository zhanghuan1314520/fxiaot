(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/BusiGrid" ], {
    "2c49": function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("c909")), o = e("ca00"), c = {
                name: "BusiGrid",
                components: {
                    Authorization: function() {
                        e.e("components/Authorization").then(function() {
                            return resolve(e("5326"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {
                    dataApi: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    topApi: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        partOne: [],
                        partOther: [],
                        column: 5,
                        lines: 1,
                        selIndex: 0
                    };
                },
                watch: {
                    dataApi: {
                        handler: function(n) {
                            var t = this;
                            this.partOne = n.slice(0, 5);
                            var e = n.slice(5);
                            this.partOther = e.length && e.reduce(function(n, e, a) {
                                return a % (t.column * t.lines) == 0 ? n.push([ e ]) : n[n.length - 1].push(e), 
                                n;
                            }, []);
                        },
                        immediate: !0
                    }
                },
                methods: {
                    swiperChange: function(n) {
                        this.selIndex = n.detail.current;
                    },
                    emptyFunction: function() {},
                    jumpUrlHandle: function(t, e, c) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                        if (t) {
                            var r = {
                                chengdu: "最新取证",
                                hangzhou: "正在公示",
                                nanjing: "最新销许",
                                wuhan: "交资料中"
                            };
                            if (n.showLoading({
                                title: "",
                                mask: !0
                            }), "热门文章" === e) if ("more" === c) n.switchTab({
                                url: t,
                                complete: function() {
                                    f();
                                }
                            }); else {
                                var l = "".concat(i, "?article_id=").concat(u), s = i ? "/pages/webview2?redirect=".concat(a.default.encode(l)) : t;
                                n.navigateTo({
                                    url: s,
                                    complete: function() {
                                        f();
                                    }
                                });
                            } else e.indexOf(r.wuhan) > -1 ? n.navigateTo({
                                url: "/subPackages/project/pages/inDataProject?title=".concat(r.wuhan),
                                complete: function() {
                                    f();
                                }
                            }) : t.indexOf("/pages/consult/index") > -1 ? n.switchTab({
                                url: t,
                                complete: function() {
                                    f();
                                }
                            }) : (0, o.pageJump)(t, function() {
                                f();
                            });
                        }
                        function f() {
                            setTimeout(function() {
                                n.hideLoading();
                            }, 500);
                        }
                    }
                }
            };
            t.default = c;
        }).call(this, e("543d").default);
    },
    "827d": function(n, t, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
    },
    c5a3: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("827d"), o = e("f7a0");
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("f334");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    e4a6: function(n, t, e) {},
    f334: function(n, t, e) {
        "use strict";
        var a = e("e4a6");
        e.n(a).a;
    },
    f7a0: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("2c49"), o = e.n(a);
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/BusiGrid-create-component", {
    "pages/components/BusiGrid-create-component": function(n, t, e) {
        e("543d").createComponent(e("c5a3"));
    }
}, [ [ "pages/components/BusiGrid-create-component" ] ] ]);