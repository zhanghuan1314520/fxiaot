require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/taskCenter/SignIn" ], {
    "0615": function(n, e, t) {
        "use strict";
        var a = t("4ad97");
        t.n(a).a;
    },
    "1138d": function(n, e, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return s;
        }), t.d(e, "a", function() {});
    },
    "47da": function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("69d3"), s = t.n(a);
        for (var i in a) "default" !== i && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        e.default = s.a;
    },
    "4ad97": function(n, e, t) {},
    "69d3": function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(t("a34a")), s = o(t("4ec3")), i = t("b628");
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function c(n, e, t, a, s, i, o) {
                try {
                    var c = n[i](o), r = c.value;
                } catch (n) {
                    return void t(n);
                }
                c.done ? e(r) : Promise.resolve(r).then(a, s);
            }
            function r(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(a, s) {
                        var i = n.apply(e, t);
                        function o(n) {
                            c(i, a, s, o, r, "next", n);
                        }
                        function r(n) {
                            c(i, a, s, o, r, "throw", n);
                        }
                        o(void 0);
                    });
                };
            }
            var u = {
                components: {
                    SignModal: function() {
                        t.e("subPackages/me/pages/components/taskCenter/SignModal").then(function() {
                            return resolve(t("5770"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {
                    baseInfo: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        formItems: [ {
                            score: 5,
                            label: "第一天"
                        }, {
                            score: 10,
                            label: "第二天"
                        }, {
                            score: 15,
                            label: "第三天"
                        }, {
                            score: 5,
                            label: "第四天"
                        }, {
                            score: 5,
                            label: "第五天"
                        }, {
                            score: 5,
                            label: "第六天"
                        }, {
                            score: 30,
                            label: "第七天"
                        } ],
                        current: 1,
                        isRemind: !1,
                        sumScore: 0,
                        sumDay: 0,
                        signedFlag: !0,
                        integral: 0,
                        coin: 0
                    };
                },
                computed: {
                    nextDayIntegral: function() {
                        return this.sumDay < 7 ? this.formItems[this.sumDay].score : 5;
                    }
                },
                methods: {
                    emptyFn: function() {},
                    signin: function() {
                        var n = r(a.default.mark(function n() {
                            var e, t, i, o;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.default.signLog();

                                  case 2:
                                    0 === (e = n.sent).code && (t = e.data, i = t.integral, o = t.coin, this.coin = o, 
                                    this.integral = i, this.$refs.signModal.open(), this.getSignInfo(), this.$emit("signInCallback"));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    getSignInfo: function() {
                        var n = r(a.default.mark(function n() {
                            var e, t, i, o, c, r;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.default.signShow();

                                  case 2:
                                    0 === (e = n.sent).code && e.data && (t = e.data, i = t.sum, o = t.status, c = t.days, 
                                    r = t.sign_notice, this.signedFlag = o, this.sumScore = i, this.sumDay = c, this.isRemind = !!r, 
                                    1 !== o && this.signin());

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    handleEditInfo: function() {
                        n.navigateTo({
                            url: "/subPackages/me/pages/salesPersonInfo?id=".concat(this.salesManData.id)
                        });
                    },
                    switchChange: function(e) {
                        var t = this;
                        e.detail.value ? t.subscribe() : n.showModal({
                            content: "关闭后可能会忘记签到，错失积分和福袋，是否确定关闭？",
                            confirmText: "考虑一下",
                            cancelText: "确认关闭",
                            success: function(n) {
                                n.confirm ? (t.isRemind = !1, t.$nextTick(function() {
                                    t.isRemind = !0;
                                })) : t.unsubscribe();
                            }
                        });
                    },
                    subscribe: function() {
                        var n = this;
                        s.default.sales.dailyNotice().then(function(e) {
                            0 === e.code && (i.tip.toast("设置成功", "", "none"), n.isRemind = !0);
                        });
                    },
                    unsubscribe: function() {
                        var n = this;
                        s.default.sales.dailyNotice().then(function(e) {
                            0 === e.code && (i.tip.toast("取消成功", "", "none"), n.isRemind = !1);
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, t("543d").default);
    },
    e173: function(n, e, t) {
        "use strict";
        t.r(e);
        var a = t("1138d"), s = t("47da");
        for (var i in s) "default" !== i && function(n) {
            t.d(e, n, function() {
                return s[n];
            });
        }(i);
        t("0615");
        var o = t("f0c5"), c = Object(o.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/taskCenter/SignIn-create-component", {
    "subPackages/me/pages/components/taskCenter/SignIn-create-component": function(n, e, t) {
        t("543d").createComponent(t("e173"));
    }
}, [ [ "subPackages/me/pages/components/taskCenter/SignIn-create-component" ] ] ]);