(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/answer/start" ], {
    "15c5": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("7caf"), i = n.n(a);
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        t.default = i.a;
    },
    "33d4": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("bc52")).default);
        }).call(this, n("543d").createPage);
    },
    "7caf": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("4ec3")), i = n("b628").share, s = "未知错误", c = "抱歉，仅支持置业顾问参与", r = "当前时间不能参与答题", o = "您已闯关成功", u = "答题者必须入驻满3天或总积分达200分，方可作答", l = {
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
                        projectName: "杭州房小团",
                        imageSrcTitle: "https://imgcdn.huanjutang.com/assets/img/2021319152488081.png",
                        imageSrcBegin: "https://imgcdn.huanjutang.com/assets/img/2021319151588081.png",
                        detail: {
                            theme: {},
                            name: ""
                        }
                    };
                },
                onLoad: function() {
                    this.getDetail(), this.$refs.busiNavHeader.setTransparentMode();
                },
                computed: {
                    hasQualification: function() {
                        return Math.random() > .2;
                    }
                },
                onPullDownRefresh: function() {
                    this.getDetail();
                },
                onShareAppMessage: function() {
                    var e = "快来参与「答题闯关」，我刚赚取了100积分！", t = "/subPackages/salesMan/pages/answer/start", n = "";
                    return i.share(e, t, n);
                },
                methods: {
                    getDetail: function() {
                        var t = this;
                        a.default.sales.answerGetDetail().then(function(n) {
                            e.stopPullDownRefresh(), n && n.data && (e.setStorageSync("answerThemeInfo", n.data), 
                            t.detail = n.data);
                        });
                    },
                    qualificationCheck: function() {
                        var e = this.detail.theme.end_time.replace(/-/g, "/");
                        return this.detail ? this.detail.is_sales_man ? !this.detail.time_limit || new Date(e).getTime() < new Date().getTime() ? Promise.reject(r) : this.detail.is_pass ? Promise.reject(o) : this.detail.register_credit ? Promise.resolve() : Promise.reject(u) : Promise.reject(c) : Promise.reject(s);
                    },
                    begin: function() {
                        var t = this;
                        this.qualificationCheck().then(function() {
                            e.navigateTo({
                                url: "/subPackages/salesMan/pages/answer/process?theme_id=".concat(t.detail.theme.id)
                            });
                        }).catch(function(t) {
                            e.showModal({
                                title: t,
                                showCancel: !1,
                                confirmText: "我知道了",
                                complete: function() {
                                    t === c && e.switchTab({
                                        url: "/pages/index"
                                    });
                                }
                            });
                        });
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    },
    "88c5": function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    9725: function(e, t, n) {},
    ad08: function(e, t, n) {
        "use strict";
        var a = n("9725");
        n.n(a).a;
    },
    bc52: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("88c5"), i = n("15c5");
        for (var s in i) "default" !== s && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        n("ad08");
        var c = n("f0c5"), r = Object(c.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    }
}, [ [ "33d4", "common/runtime", "common/vendor" ] ] ]);