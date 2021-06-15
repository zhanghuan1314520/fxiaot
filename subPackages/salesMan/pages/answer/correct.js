(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/answer/correct" ], {
    "0b61": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("febc"), c = n("48a4");
        for (var o in c) "default" !== o && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        n("c2f2");
        var a = n("f0c5"), u = Object(a.a)(c.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    },
    1658: function(e, t, n) {},
    "48a4": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("4df6"), c = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = c.a;
    },
    "4df6": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("ca00");
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var u = {
                1: "selectSingle",
                2: "selectMulti"
            }, s = {
                name: "Correct",
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    answerSelect: function() {
                        n.e("subPackages/salesMan/components/answer/topic-types/answerSelect").then(function() {
                            return resolve(n("ca89"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    subject: function() {
                        n.e("subPackages/salesMan/components/answer/topic-types/subject").then(function() {
                            return resolve(n("61b2"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        projectName: "杭州房小团",
                        imageSrcTitle: "https://imgcdn.huanjutang.com/assets/img/20213291757598081.png",
                        imageSrcBegin: "https://imgcdn.huanjutang.com/assets/img/2021319151588081.png",
                        wrongImageSrc: "https://imgcdn.huanjutang.com/assets/img/20213232323388081.png",
                        detail: {
                            theme: {},
                            name: ""
                        },
                        result: null,
                        question: [],
                        contentHeight: 0
                    };
                },
                onLoad: function() {
                    this.$refs.busiNavHeader.setTransparentMode();
                    var t = e.getSystemInfoSync(), n = (0, r.transformRpx)(84), c = (0, r.transformRpx)(92), o = (0, 
                    r.transformRpx)(66);
                    this.contentHeight = t.windowHeight - t.statusBarHeight - n - c - 44 - o;
                },
                onShow: function() {
                    var t = e.getStorageSync("answerResult");
                    t && (this.result = t, this.question = this.result.question.map(function(e) {
                        return o(o({}, e), {}, {
                            type: u[e.type]
                        });
                    }));
                },
                methods: {}
            };
            t.default = s;
        }).call(this, n("543d").default);
    },
    "509b": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("0b61")).default);
        }).call(this, n("543d").createPage);
    },
    c2f2: function(e, t, n) {
        "use strict";
        var r = n("1658");
        n.n(r).a;
    },
    febc: function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
    }
}, [ [ "509b", "common/runtime", "common/vendor" ] ] ]);