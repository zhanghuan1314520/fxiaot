require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/loginIndexDetail" ], {
    "03b3": function(t, i, n) {
        "use strict";
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), i(n("66fd")), t(i(n("e153")).default);
        }).call(this, n("543d").createPage);
    },
    "2e5f": function(t, i, n) {
        "use strict";
        n.r(i);
        var e = n("4705"), a = n.n(e);
        for (var o in e) "default" !== o && function(t) {
            n.d(i, t, function() {
                return e[t];
            });
        }(o);
        i.default = a.a;
    },
    4705: function(t, i, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var e = r(n("a34a")), a = r(n("4ec3")), o = n("b628"), s = n("ca00");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, i) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, i) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], e = !0, a = !1, o = void 0;
                        try {
                            for (var s, r = t[Symbol.iterator](); !(e = (s = r.next()).done) && (n.push(s.value), 
                            !i || n.length !== i); e = !0) ;
                        } catch (t) {
                            a = !0, o = t;
                        } finally {
                            try {
                                e || null == r.return || r.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return n;
                    }
                }(t, i) || function(t, i) {
                    if (t) {
                        if ("string" == typeof t) return l(t, i);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, i) : void 0;
                    }
                }(t, i) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var n = 0, e = new Array(i); n < i; n++) e[n] = t[n];
                return e;
            }
            function d(t, i, n, e, a, o, s) {
                try {
                    var r = t[o](s), u = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? i(u) : Promise.resolve(u).then(e, a);
            }
            function c(t) {
                return function() {
                    var i = this, n = arguments;
                    return new Promise(function(e, a) {
                        var o = t.apply(i, n);
                        function s(t) {
                            d(o, e, a, s, r, "next", t);
                        }
                        function r(t) {
                            d(o, e, a, s, r, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var h = null;
            function f(t) {
                var i = new Date(t);
                return "".concat(i.getFullYear(), "-") + "".concat(i.getMonth() + 1 < 10 ? "0".concat(i.getMonth() + 1) : i.getMonth() + 1, "-") + (i.getDate() < 10 ? "0".concat(i.getDate()) : i.getDate());
            }
            var g = {
                components: {
                    SwitchBtn: function() {
                        n.e("subPackages/lottery/components/SwitchBtn").then(function() {
                            return resolve(n("8e75"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Dialog: function() {
                        n.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(n("6bfa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        dialogFocus: !1,
                        time: "",
                        page: 1,
                        more: !0,
                        loading: !0,
                        salesmanId: "",
                        projectId: 0,
                        projectName: "",
                        tomorrow: "",
                        joinList: [],
                        configs: {},
                        commentShow: !1,
                        showAuctionMsg: !1,
                        showJoinInp: !1,
                        integral: "",
                        auctionResults: null,
                        points: 0,
                        disableSubmitBtn: !1,
                        explainDialogStatus: !1,
                        popupsData: null,
                        minProjectConic: 2,
                        minIndexConic: 5,
                        autoBiddingDetail: null,
                        autoBiddingDialog: !1,
                        autoBiddingStatus: !1,
                        autoBidding: !1,
                        showAutoBiddingAlert: !1,
                        settlementing: !1,
                        settlementTime: 3e5,
                        settlementEnd: !1,
                        settlementTimer: null
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("我在这里查看我要上首页", "/subPackages/lottery/pages/loginIndex");
                },
                onUnload: function() {
                    clearInterval(h), h = null, this.settlementTimer && (clearInterval(this.settlementTimer), 
                    this.settlementTimer = null);
                },
                onReachBottom: function() {
                    var t = c(e.default.mark(function t() {
                        return e.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var i = c(e.default.mark(function i() {
                        return e.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, this.reload();

                              case 2:
                                return i.next = 4, this.loadData();

                              case 4:
                                t.stopPullDownRefresh();

                              case 5:
                              case "end":
                                return i.stop();
                            }
                        }, i, this);
                    }));
                    return function() {
                        return i.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var i = c(e.default.mark(function i(n) {
                        var o;
                        return e.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return this.salesmanId = n.sales_man_id || "", this.projectId = Math.floor(n.project_id) || 0, 
                                this.projectName = n.project_name || "", t.setNavigationBarTitle({
                                    title: 0 === this.projectId ? "我要上首页" : "我要上楼盘"
                                }), this.computedTime(), this.tomorrow = f(Date.now() + 864e5), i.next = 8, this.reload();

                              case 8:
                                return i.next = 10, this.loadData();

                              case 10:
                                return i.next = 12, a.default.lottery.getPopups("bidding_alert");

                              case 12:
                                (o = i.sent).data && o.data.id ? (this.popupsData = o.data, this.explainDialogStatus = (0, 
                                s.formatDate)(this.popupsData.updated_at) < (0, s.formatDate)()) : this.explainDialogStatus = !0;

                              case 14:
                              case "end":
                                return i.stop();
                            }
                        }, i, this);
                    }));
                    return function(t) {
                        return i.apply(this, arguments);
                    };
                }(),
                watch: {
                    showJoinInp: function(t) {
                        !0 === t && (this.disableSubmitBtn = !0, this.settlementing = !0, this.settlementTimerHandler.call(this));
                    },
                    settlementEnd: function(t) {
                        var i = this;
                        !0 === t && this.getAuctionResults.call(this).then(function() {
                            return i.reload();
                        }).then();
                    }
                },
                methods: {
                    switchChangeEvent: function(i) {
                        var n = this;
                        i || (t.showLoading({
                            title: "切换中",
                            mask: !0
                        }), this.autoBidding = !1, this.autoBiddingStatus = !1, a.default.lottery.setAutoBidding({
                            salesman_id: this.salesmanId,
                            project_id: this.projectId,
                            integral: this.integral || 0,
                            switch: !1,
                            status: !1,
                            id: this.autoBiddingDetail ? this.autoBiddingDetail.id : "0"
                        }).then(function(i) {
                            t.hideLoading(), i.data && (n.autoBiddingDetail = i.data, n.integral = i.data.integral);
                        }));
                    },
                    settlementTimerHandler: function() {
                        var t = this;
                        t.settlementTimer = setInterval(function() {
                            (0, s.formatDate)() + 828e5 + t.settlementTime <= Date.now() && (t.settlementing = !1, 
                            t.settlementEnd = !0, clearInterval(t.settlementTimer), t.settlementTimer = null);
                        }, 1e3);
                    },
                    autoBiddingFocus: function() {
                        this.dialogFocus = !0;
                    },
                    autoBiddingBlur: function() {
                        this.dialogFocus = !1;
                    },
                    closeExplainDialog: function() {
                        this.explainDialogStatus = !1, this.popupsData && this.popupsData.id ? a.default.lottery.setPopups(this.popupsData.id, {
                            tag: "bidding_alert",
                            name: "自动竞价弹窗",
                            content: Date.now()
                        }).then() : a.default.lottery.addPopups({
                            tag: "bidding_alert",
                            name: "自动竞价弹窗",
                            content: Date.now()
                        }).then();
                    },
                    changeSwitch: function() {
                        0 !== this.integral ? (this.autoBidding = !this.autoBidding, t.vibrateShort(), this.switchChangeEvent.call(this, this.autoBidding)) : o.tip.toast("请填写最高出价", "", "none");
                    },
                    autoBiddingInputVal: function(t) {
                        if (this.integral = Math.floor(t.detail.value), this.showAutoBiddingAlert = this.integral > this.points, 
                        this.integral > this.points) o.tip.toast("金币不足", "", "none"); else {
                            if (this.joinList && this.joinList.length > 0) {
                                var i = this.joinList[0];
                                this.showAutoBiddingAlert = i.integral >= this.integral, this.showAutoBiddingAlert && o.tip.toast("不能小于等于当前最高出价", "", "none");
                            }
                            (this.projectId ? this.minProjectConic : this.minIndexConic) > this.integral && (this.showAutoBiddingAlert = !0, 
                            o.tip.toast("不能小于等于当前最低出价", "", "none"));
                        }
                    },
                    inputVal: function(t) {
                        if (this.integral = Math.floor(t.detail.value), this.showAuctionMsg = !1, this.integral && this.joinList.length > 0) {
                            var i = this.joinList[0];
                            this.showAuctionMsg = i.integral >= this.integral;
                        }
                    },
                    toggleComment: function() {
                        this.$refs.Dialog.dialog("竞价规则", "", {
                            showCancel: !1,
                            submitText: "知道了",
                            icon: "",
                            textAlign: "left",
                            isColumnBtn: !0,
                            onSuccess: function() {
                                this.commentShow = !0;
                            }
                        });
                    },
                    toggleBiddingDialog: function(t) {
                        this.dialogFocus = "open" === t;
                        var i = this;
                        this.$refs.DialogBidding.dialog("自动竞价设置", "", {
                            icon: "",
                            textAlign: "left",
                            onSuccess: function() {
                                i.saveAutoBidding();
                            }
                        });
                    },
                    stopMove: function() {
                        return !1;
                    },
                    getAuctionResults: function() {
                        var t = c(e.default.mark(function t() {
                            var i;
                            return e.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.auctionResults(this.salesmanId, this.projectId);

                                  case 2:
                                    i = t.sent, 0 === Math.floor(i.code) && (this.auctionResults = i.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    submitHandle: function() {
                        var i = this;
                        if (!this.disableSubmitBtn) if (this.autoBidding) {
                            var n = this.autoBiddingStatus ? "是否确定停止此次自动竞价" : "是否确定开始此次自动竞价";
                            this.autoBiddingDetail.integral ? o.tip.confirm(n, "提示").then(function(t) {
                                t && s.call(i);
                            }).catch(function() {}) : o.tip.toast("请先设置自动竞价", "", "none");
                        } else o.tip.confirm("是否确定进行此次手动竞价?", "提示").then(function(t) {
                            t && e.call(i);
                        }).catch(function() {});
                        function e() {
                            var i = this;
                            t.showLoading({
                                title: "出价中",
                                mask: !0
                            }), a.default.joinPrice(this.salesmanId, this.projectId, this.integral).then(function(n) {
                                t.hideLoading(), n && 0 === Math.floor(n.code) && (o.tip.toast("出价成功"), i.reload().then());
                            });
                        }
                        function s() {
                            var i = this;
                            if (t.showLoading({
                                title: "出价中",
                                mask: !0
                            }), !this.autoBiddingDetail) return this.toggleBiddingDialog.call(this, "open"), 
                            void o.tip.toast("请先设置自动竞价", "", "none");
                            this.autoBiddingStatus = !this.autoBiddingStatus, a.default.lottery.setAutoBidding({
                                salesman_id: this.salesmanId,
                                project_id: this.projectId,
                                integral: this.integral || 0,
                                switch: !0,
                                status: this.autoBiddingStatus,
                                id: this.autoBiddingDetail ? this.autoBiddingDetail.id : "0"
                            }).then(function(n) {
                                t.hideLoading(), n && (i.autoBiddingStatus ? o.tip.toast("开启自动竞价成功", "", "none") : o.tip.toast("关闭自动竞价成功", "", "none"), 
                                i.autoBiddingDetail = n.data);
                            });
                        }
                    },
                    saveAutoBidding: function() {
                        var i = this;
                        this.showAutoBiddingAlert = this.integral > this.points, this.showAutoBiddingAlert || (this.autoBidding = !0, 
                        t.showLoading({
                            title: "保存中",
                            mask: !0
                        }), a.default.lottery.setAutoBidding({
                            salesman_id: this.salesmanId,
                            project_id: this.projectId,
                            integral: this.integral || 0,
                            switch: !0,
                            status: !(!this.autoBiddingDetail || !this.autoBiddingDetail.status),
                            id: this.autoBiddingDetail ? this.autoBiddingDetail.id : "0"
                        }).then(function(n) {
                            t.hideLoading(), n && (i.autoBiddingDetail = n.data);
                        }));
                    },
                    gotoTransformGold: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/goldRecharge?type=".concat("ios" === (0, s.getPlatform)() ? "ios" : "android")
                        });
                    },
                    loadNext: function() {
                        var t = c(e.default.mark(function t() {
                            var i, n;
                            return e.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, t.next = 3, a.default.auctionLog(this.projectId, this.page);

                                  case 3:
                                    i = t.sent, n = 1, 0 === Math.floor(i.code) && i.data.total && (n = Math.ceil(i.data.total / 10)), 
                                    this.page >= n ? this.more = !1 : this.page += 1, this.joinList = this.joinList.concat(i.data && i.data.data), 
                                    this.loading = !1;

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadData: function() {
                        var t = c(e.default.mark(function t() {
                            var i = this;
                            return e.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!this.showJoinInp) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.next = 3, this.getAuctionResults.call(this);

                                  case 3:
                                    Promise.all([ a.default.auctionPoints(this.salesmanId, this.projectId), a.default.lottery.getAutoBiddingDetail(this.projectId), a.default.lottery.getBiddingDetailConfig() ]).then(function(t) {
                                        var n = u(t, 3), e = n[0], a = n[1], o = n[2];
                                        if (i.points = e.data.recommend, i.autoBiddingDetail = a.data, i.configs = o.data, 
                                        i.autoBiddingDetail && i.autoBiddingDetail.switch && !i.showJoinInp) i.integral = i.autoBiddingDetail && i.autoBiddingDetail.integral, 
                                        i.autoBiddingStatus = i.autoBiddingDetail.status, i.autoBidding = i.autoBiddingDetail.switch; else {
                                            var s = 0;
                                            if (i.joinList && i.joinList.length > 0) {
                                                var r = i.joinList[0];
                                                s += Math.floor(r.integral) + Math.floor(i.projectId ? i.configs.steps.project : i.configs.steps.index);
                                            } else s += Math.floor(i.projectId ? i.minProjectConic : i.minIndexConic);
                                            i.inputVal.call(i, {
                                                detail: {
                                                    value: s
                                                }
                                            });
                                        }
                                    });

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var i = c(e.default.mark(function i() {
                            return e.default.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), this.joinList = [], this.loading = !1, this.page = 1, i.next = 6, this.loadNext();

                                  case 6:
                                    t.hideLoading();

                                  case 7:
                                  case "end":
                                    return i.stop();
                                }
                            }, i, this);
                        }));
                        return function() {
                            return i.apply(this, arguments);
                        };
                    }(),
                    computedTime: function() {
                        var t = this;
                        function i() {
                            var i = (0, s.formatDate)() + 828e5, n = Date.now();
                            if (t.showJoinInp = n > i, n > i) {
                                var e = f(Date.now() + 864e5);
                                i = (0, s.formatDate)("".concat(e, " 00:00:00"));
                            }
                            var a = (i - n) / 1e3, o = Math.floor(a % 86400 / 3600), r = Math.floor(a % 3600 / 60), u = Math.floor(a % 60);
                            o < 10 && (o = "0".concat(o)), r < 10 && (r = "0".concat(r)), u < 10 && (u = "0".concat(u)), 
                            t.time = "".concat(o, ":").concat(r, ":").concat(u);
                        }
                        i(), h = setInterval(i, 1e3);
                    }
                }
            };
            i.default = g;
        }).call(this, n("543d").default);
    },
    ab0a: function(t, i, n) {},
    adaf: function(t, i, n) {
        "use strict";
        var e = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(i, "b", function() {
            return e;
        }), n.d(i, "c", function() {
            return a;
        }), n.d(i, "a", function() {});
    },
    cff8: function(t, i, n) {
        "use strict";
        var e = n("ab0a");
        n.n(e).a;
    },
    e153: function(t, i, n) {
        "use strict";
        n.r(i);
        var e = n("adaf"), a = n("2e5f");
        for (var o in a) "default" !== o && function(t) {
            n.d(i, t, function() {
                return a[t];
            });
        }(o);
        n("cff8");
        var s = n("f0c5"), r = Object(s.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        i.default = r.exports;
    }
}, [ [ "03b3", "common/runtime", "common/vendor" ] ] ]);