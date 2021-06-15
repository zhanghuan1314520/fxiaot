(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/answer/result" ], {
    1878: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, a, r, u, s) {
                try {
                    var i = t[u](s), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(o) : Promise.resolve(o).then(a, r);
            }
            var i = n("b628").share, o = n("b628").tip, c = {
                name: "Start",
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        imageSrcAward: "https://imgcdn.huanjutang.com/assets/img/20213221649118081.png",
                        theme_id: "",
                        projectName: "杭州房小团",
                        imageSrcTitle: "https://imgcdn.huanjutang.com/assets/img/2021319152488081.png",
                        detail: {},
                        result: {}
                    };
                },
                onLoad: function(t) {
                    this.theme_id = t.theme_id, this.getDetail(), this.$refs.busiNavHeader.setTransparentMode();
                },
                onShow: function() {
                    var e = t.getStorageSync("answerResult");
                    e && (this.result = e);
                },
                onShareAppMessage: function() {
                    var t = "快来参与「答题闯关」，我刚赚取了100积分！", e = "/subPackages/salesMan/pages/answer/start", n = "";
                    return i.share(t, e, n);
                },
                computed: {
                    showAgain: function() {
                        return !this.result || !this.result.is_all_right;
                    },
                    rightNum: function() {
                        return this.result && this.result.question && this.result.question.length ? this.result.question.filter(function(t) {
                            return t.right;
                        }).length : 0;
                    },
                    wrongNum: function() {
                        return this.result && this.result.question && this.result.question.length ? this.result.question.filter(function(t) {
                            return !t.right;
                        }).length : 0;
                    }
                },
                methods: {
                    shareHandle: function() {},
                    getDetail: function() {
                        var e = t.getStorageSync("answerThemeInfo");
                        this.detail = e || {};
                    },
                    againHandler: function() {
                        var e = function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(a, r) {
                                    var u = t.apply(e, n);
                                    function i(t) {
                                        s(u, a, r, i, o, "next", t);
                                    }
                                    function o(t) {
                                        s(u, a, r, i, o, "throw", t);
                                    }
                                    i(void 0);
                                });
                            };
                        }(a.default.mark(function e() {
                            var n, u, s, i, c;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.sales.answerGetDetail();

                                  case 2:
                                    n = e.sent, u = n.data, s = (void 0 === u ? {} : u).theme, i = (void 0 === s ? {} : s).end_time, 
                                    c = i.replace(/-/g, "/"), i && new Date(c).getTime() > new Date().getTime() ? t.redirectTo({
                                        url: "/subPackages/salesMan/pages/answer/process?theme_id=".concat(this.theme_id)
                                    }) : o.toast("答题闯关已到截止时间，无法再次闯关", "", "none");

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    viewAnswer: function() {
                        t.navigateTo({
                            url: "/subPackages/salesMan/pages/answer/correct"
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    "5b1a": function(t, e, n) {},
    "8a46": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "8bdd": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8a46"), r = n("a0d8");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("c2a0");
        var s = n("f0c5"), i = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    a0d8: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("1878"), r = n.n(a);
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        e.default = r.a;
    },
    c2a0: function(t, e, n) {
        "use strict";
        var a = n("5b1a");
        n.n(a).a;
    },
    f721: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("8bdd")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f721", "common/runtime", "common/vendor" ] ] ]);