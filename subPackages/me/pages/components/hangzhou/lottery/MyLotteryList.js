require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/components/hangzhou/lottery/MyLotteryList" ], {
    "630d": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6f8d"), i = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = i.a;
    },
    "6f8d": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), i = o(n("4ec3")), s = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, e, n, a, i, s, o) {
                try {
                    var r = t[s](o), u = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var s = t.apply(e, n);
                        function o(t) {
                            r(s, a, i, o, u, "next", t);
                        }
                        function u(t) {
                            r(s, a, i, o, u, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var d = n("f4fd"), c = null, l = {
                name: "MyLotteryList",
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Toast: function() {
                        n.e("components/UILayout/BusiToast").then(function() {
                            return resolve(n("f094"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    saveInformation: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        myLotteries: [],
                        idCards: [],
                        cardIndex: 0,
                        loading: !0,
                        updateTime: "",
                        syncState: "close",
                        firstOpen: !0,
                        winWidth: 0,
                        winHeight: 0,
                        autofocus: !1,
                        valiCode: "",
                        valiCodeArr: [],
                        valiCodeEmptyArr: [ 1, 2, 3, 4, 5, 6 ],
                        showErr: !1,
                        seconds: 300,
                        showValidateDialog: !1,
                        status: !1
                    };
                },
                watch: {
                    valiCode: function(t) {
                        this.valiCodeArr = t.split(""), this.valiCodeEmpty = 6 - this.valiCodeArr.length, 
                        this.valiCodeEmptyArr = [];
                        for (var e = 0; e < this.valiCodeEmpty; e += 1) this.valiCodeEmptyArr.push(e);
                    }
                },
                destroyed: function() {
                    this.$eventBus.$off("on-pull-down-refresh");
                },
                mounted: function() {
                    var e = u(a.default.mark(function e() {
                        var n, i, s = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, d.refreshGlobalConfig();

                              case 2:
                                n = e.sent, this.status = n.lottery_code_switch || !1, i = t.getSystemInfoSync(), 
                                this.winWidth = i.windowWidth, this.winHeight = i.windowHeight, this.loadData().then(function() {
                                    s.loading = !1;
                                }), this.$eventBus.$on("on-pull-down-refresh", function() {
                                    s.status ? s.getValiCode() : s.updateHandle(), t.stopPullDownRefresh();
                                }), this.$eventBus.$on("load-next", function() {
                                    s.loadData().then();
                                });

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    emptyFunction: function() {},
                    enterResultPage: function(e) {
                        var n = this.myLotteries[e];
                        if (Array.isArray(n.results) && n.results.length > 0) {
                            var a = "/pages/lottery/showCode?id=".concat(n.lottery_id, "&code=").concat(n.reg_num || n.code, "&type=").concat(n.results[0].type);
                            t.navigateTo({
                                url: a
                            });
                        }
                    },
                    getVal: function(t) {
                        this.valiCode = t.detail.value, 6 === this.valiCode.length && (this.showErr = !1);
                    },
                    changeTabHandle: function() {
                        this.$eventBus.$emit("on-change-tab", "2");
                    },
                    gotoUrlHandle: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    changeShowCardHandle: function() {
                        var e = u(a.default.mark(function e(n) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return s.redis.set("updateHandle", ""), this.cardIndex = n, t.showNavigationBarLoading(), 
                                    e.next = 5, this.loadData();

                                  case 5:
                                    t.hideNavigationBarLoading();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    closeValiCodeDialog: function() {
                        this.showValidateDialog = !1;
                    },
                    initTimer: function() {
                        var t = this;
                        c = setInterval(function() {
                            t.seconds -= 1, t.seconds < 1 && (clearInterval(c), c = null);
                        }, 1e3);
                    },
                    getValiCode: function() {
                        var t = u(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = this.idCards[this.cardIndex] && this.idCards[this.cardIndex].id, t.next = 3, 
                                    i.default.lottery.getIdentifyCode(e);

                                  case 3:
                                    n = t.sent, 0 === parseInt(n.code, 10) && (this.showValidateDialog = !0, s.tip.toast("发送成功!", "", "none"), 
                                    this.valiCode = "", this.seconds = 300, this.showValidateDialog = !0, this.autofocus = !0, 
                                    this.initTimer.call(this));

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    updateHandle: function() {
                        if (this.status) {
                            if (!this.valiCode || 6 !== this.valiCode.length) return void (this.showErr = !0);
                            this.closeValiCodeDialog.call(this), this.doUpdate.call(this);
                        } else this.doUpdate.call(this);
                    },
                    doUpdate: function() {
                        var t = this;
                        this.syncState = "sync", this.firstOpen = !1;
                        var e = {
                            id: this.idCards.length > 0 ? this.idCards[this.cardIndex] && this.idCards[this.cardIndex].id : ""
                        };
                        this.status && (e.code = this.valiCode), e.id && i.default.syncData(e).then(function() {
                            setTimeout(function() {
                                i.default.getMyLotteries2(e).then(function(e) {
                                    if (e) {
                                        var n = {
                                            default: "",
                                            "复核通过": "jieguo",
                                            "撤销": "fuhe"
                                        };
                                        e.data && (t.myLotteries = e.data.map(function(t) {
                                            var e = t;
                                            return e.status_text_color = n[t.status_text] || n.default, e;
                                        })), t.updateTime = e.time;
                                    }
                                    t.syncState = "finish", setTimeout(function() {
                                        t.syncState = "close";
                                    }, 2e3);
                                });
                            }, 2e3);
                        });
                    },
                    loadData: function() {
                        var t = u(a.default.mark(function t() {
                            var e, n, o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, t.next = 3, i.default.getMyIdCards();

                                  case 3:
                                    if (e = t.sent, this.idCards = e.data || [], !(this.idCards.length > 0)) {
                                        t.next = 16;
                                        break;
                                    }
                                    if (!s.redis.get("updateHandle")) {
                                        t.next = 10;
                                        break;
                                    }
                                    return this.cardIndex = this.idCards.length - 1, t.next = 10, this.updateHandle.call(this);

                                  case 10:
                                    return t.next = 12, i.default.getMyLotteries2({
                                        id: this.idCards[this.cardIndex] && this.idCards[this.cardIndex].id
                                    });

                                  case 12:
                                    (n = t.sent) && (o = {
                                        default: "",
                                        "复核通过": "jieguo",
                                        "撤销": "fuhe"
                                    }, n.data && (this.myLotteries = n.data.map(function(t) {
                                        var e = t;
                                        return e.status_text_color = o[t.status_text] || o.default, e;
                                    })), this.updateTime = n.time, this.myLotteries.length > 0 && (this.firstOpen = !1)), 
                                    t.next = 17;
                                    break;

                                  case 16:
                                    this.$refs.toast.show();

                                  case 17:
                                    this.loading = !1;

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    "7b61": function(t, e, n) {},
    f544: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("fabf"), i = n("630d");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("facf");
        var o = n("f0c5"), r = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    fabf: function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    facf: function(t, e, n) {
        "use strict";
        var a = n("7b61");
        n.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/me/pages/components/hangzhou/lottery/MyLotteryList-create-component", {
    "subPackages/me/pages/components/hangzhou/lottery/MyLotteryList-create-component": function(t, e, n) {
        n("543d").createComponent(n("f544"));
    }
}, [ [ "subPackages/me/pages/components/hangzhou/lottery/MyLotteryList-create-component" ] ] ]);