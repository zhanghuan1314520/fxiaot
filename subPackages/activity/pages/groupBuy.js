require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/groupBuy" ], {
    "00dce": function(t, e, n) {
        "use strict";
        var i = n("f4f6");
        n.n(i).a;
    },
    "03874": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("95c8")).default);
        }).call(this, n("543d").createPage);
    },
    "35d6": function(t, e, n) {
        "use strict";
        var i = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "95c8": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("35d6"), r = n("9e63");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("00dce");
        var a = n("f0c5"), c = Object(a.a)(r.default, i.b, i.c, !1, null, "0ea87298", null, !1, i.a, void 0);
        e.default = c.exports;
    },
    "9e63": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("f8ef"), r = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = r.a;
    },
    f4f6: function(t, e, n) {},
    f8ef: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s(n("a34a")), r = s(n("4ec3")), o = s(n("c909")), a = n("ca00"), c = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], i = !0, r = !1, o = void 0;
                        try {
                            for (var a, c = t[Symbol.iterator](); !(i = (a = c.next()).done) && (n.push(a.value), 
                            !e || n.length !== e); i = !0) ;
                        } catch (t) {
                            r = !0, o = t;
                        } finally {
                            try {
                                i || null == c.return || c.return();
                            } finally {
                                if (r) throw o;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return h(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function v(t, e, n, i, r, o, a) {
                try {
                    var c = t[o](a), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(i, r);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, r) {
                        var o = t.apply(e, n);
                        function a(t) {
                            v(o, i, r, a, c, "next", t);
                        }
                        function c(t) {
                            v(o, i, r, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var y = {
                components: {
                    RuleModal: function() {
                        Promise.all([ n.e("subPackages/activity/common/vendor"), n.e("subPackages/activity/components/RuleModal") ]).then(function() {
                            return resolve(n("13ac"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    JoinSwiper: function() {
                        n.e("subPackages/activity/components/JoinSwiper").then(function() {
                            return resolve(n("d7f3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    PrizeContent: function() {
                        Promise.all([ n.e("subPackages/activity/common/vendor"), n.e("subPackages/activity/components/PrizeContent") ]).then(function() {
                            return resolve(n("4776"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OnLineItem: function() {
                        n.e("subPackages/activity/components/HomeOnlineItem").then(function() {
                            return resolve(n("2a70"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    GroupItem: function() {
                        n.e("subPackages/activity/components/HomeGroupItem").then(function() {
                            return resolve(n("b2f5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    LiverItem: function() {
                        n.e("subPackages/activity/components/HomeLiverItem").then(function() {
                            return resolve(n("697b"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    JoinModal: function() {
                        Promise.all([ n.e("subPackages/activity/common/vendor"), n.e("subPackages/activity/components/JoinModal") ]).then(function() {
                            return resolve(n("cb5e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    PosterModal: function() {
                        Promise.all([ n.e("subPackages/activity/common/vendor"), n.e("subPackages/activity/components/PosterModal") ]).then(function() {
                            return resolve(n("44f6"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ s(n("73a2")).default ],
                data: function() {
                    return {
                        joinNumber: 0,
                        joinList: [],
                        activeIndex: 0,
                        activePrize: {},
                        prizeStatus: 0,
                        prizeList: [],
                        joinLoading: !1,
                        subscribeLoading: !1,
                        qrcode: "",
                        onlineList: [],
                        groupList: [],
                        liverList: [],
                        activityCode: "",
                        scrollLeft: 0,
                        ruleContent: "",
                        codeMap: {
                            1: "立即参与",
                            2: "提醒我",
                            3: "取消订阅",
                            4: "分享活动"
                        },
                        singleday_home_headimg: "",
                        singleday_share_text: "",
                        singleday_share_img: ""
                    };
                },
                computed: {
                    scrollViewMargin: function() {
                        return this.prizeList.length < 3;
                    }
                },
                onLoad: function() {
                    var t = p(i.default.mark(function t(e) {
                        var n = this;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e.hid ? r.default.getDecodeHashParams(e.hid).then(function(t) {
                                    t && t.data && (e = t ? (0, o.default)("?".concat(decodeURIComponent(t.data.path))).search(!0) : e, 
                                    n.checkJoinCode(e));
                                }) : this.checkJoinCode(e), this.loadImage("singleday_home_headimg"), this.loadImage("singleday_share_text"), 
                                this.loadImage("singleday_share_img"), this.loadData();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var e = p(i.default.mark(function e() {
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.loadData(), t.stopPullDownRefresh();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onShareAppMessage: function(t) {
                    return "button" !== t.from && (this.activityCode = ""), c.share.share("我在这里查摇号结果，好方便哦", "/subPackages/activity/pages/groupBuy?id=".concat(this.activityCode));
                },
                methods: {
                    emptyFunction: function() {},
                    loadImage: function(t) {
                        var e = this;
                        r.default.activity.banner({
                            type: t
                        }).then(function(n) {
                            e.responseVerify(n) && (e[t] = n.data);
                        });
                    },
                    responseVerify: function(t) {
                        return !!t && 0 === t.code && void 0 !== t.data;
                    },
                    showLoading: function() {
                        t.showLoading({
                            title: "请等待",
                            mask: !0
                        });
                    },
                    hideLoading: function() {
                        t.hideLoading();
                    },
                    handleNext: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    handleGoDetail: function() {
                        this.activePrize && this.activePrize.project_id && this.handleNext("/pages/lotteryDetail?project_id=".concat(this.activePrize.project_id));
                    },
                    getPrizeStatus: function(t) {
                        var e = t.start_time, n = t.end_time, i = t.lottery_time, r = t.is_lottery, o = (0, 
                        a.dayjs)(e, "YYYY-MM-DD HH:mm:ss").valueOf(), c = (0, a.dayjs)(n, "YYYY-MM-DD HH:mm:ss").valueOf(), s = ((0, 
                        a.dayjs)(i, "YYYY-MM-DD HH:mm:ss").valueOf(), (0, a.dayjs)().valueOf()), u = {};
                        return 1 === r ? (u.text = "已开奖", u.code = 3) : s < o ? (u.text = "待开始", u.code = 0, 
                        u.buttonCode = t.is_notice ? 3 : 2) : s < c && s > o ? (u.text = "已开始", u.code = 1, 
                        u.buttonCode = t.is_join ? 4 : 1) : s >= c && (u.text = "待开奖", u.code = 2), u;
                    },
                    showRuleModal: function() {
                        this.ruleContent && t.navigateTo({
                            url: this.ruleContent
                        });
                    },
                    changePrize: function(t, e) {
                        this.activeIndex = e, this.activePrize = t, this.scrollLeft = "".concat(227 * e + 8 - 30, "rpx");
                    },
                    checkJoinCode: function(t) {
                        var e = this;
                        t.id && r.default.activity.decodeLotteryKey({
                            id: t.id
                        }).then(function(t) {
                            e.responseVerify(t);
                        });
                    },
                    getQrcode: function(t) {
                        var e = this;
                        this.showLoading(), r.default.getQrCode("/subPackages/activity/pages/groupBuy?id=".concat(t)).then(function(t) {
                            if (!e.responseVerify(t)) return e.joinLoading = !1, void e.hideLoading();
                            e.qrcode = t.data.qrcode, e.$nextTick(function() {
                                e.joinLoading = !1, e.hideLoading(), e.$refs.posterModal.open(), e.$refs.posterModal.createPoster();
                            });
                        }).catch(function() {
                            e.hideLoading(), e.joinLoading = !1;
                        });
                    },
                    createRecord: function(t) {
                        var e = this;
                        r.default.activity.joinRecord({
                            subject_id: t,
                            promotion_id: 1
                        }).then(function(t) {
                            e.responseVerify(t) ? e.loadHeaderData() : e.joinLoading = !1;
                        }).catch(function() {
                            e.joinLoading = !1;
                        });
                    },
                    joinActivity: function() {
                        var t = p(i.default.mark(function t(e) {
                            var n;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!this.joinLoading) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return this.joinLoading = !0, this.createRecord(e.id), t.prev = 4, t.next = 7, r.default.activity.lotteryKey({
                                        win_prize_every_day_id: e.id
                                    });

                                  case 7:
                                    if (n = t.sent, this.responseVerify(n)) {
                                        t.next = 11;
                                        break;
                                    }
                                    return this.joinLoading = !1, t.abrupt("return");

                                  case 11:
                                    this.activityCode = n.data, this.getQrcode(n.data), t.next = 18;
                                    break;

                                  case 15:
                                    t.prev = 15, t.t0 = t.catch(4), this.joinLoading = !1;

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 4, 15 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    subscribe: function(t, e) {
                        var n = this;
                        this.subscribeLoading || (this.subscribeLoading = !0, this.showLoading(), r.default.activity.activityRemind({
                            activity_id: t.id,
                            promotion_id: 1,
                            inform_time: t.start_time,
                            type: e
                        }).then(function(t) {
                            if (!n.responseVerify(t)) return n.subscribeLoading = !1, void n.hideLoading();
                            n.hideLoading(), n.subscribeLoading = !1, n.loadPrizeList();
                        }).catch(function() {
                            n.subscribeLoading = !1, n.hideLoading();
                        }));
                    },
                    sharePoster: function() {
                        var t = p(i.default.mark(function t() {
                            var e;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getQrCode("/subPackages/activity/page/groupBuy");

                                  case 2:
                                    return e = t.sent, this.responseVerify(e) && (this.qrcode = e.data.qrcode), t.next = 6, 
                                    this.$nextTick();

                                  case 6:
                                    return this.$refs.posterModal.open(), t.next = 9, this.$nextTick();

                                  case 9:
                                    this.$refs.posterModal.createPoster();

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    handleJoinButtonClick: function() {
                        var t = this, e = this.activePrize;
                        if (e.status) {
                            var n = e.status.buttonCode;
                            n && {
                                1: function() {
                                    return t.joinActivity(e);
                                },
                                2: function() {
                                    return t.subscribe(e, 1);
                                },
                                3: function() {
                                    return t.subscribe(e, 2);
                                },
                                4: function() {
                                    return t.sharePoster(e);
                                }
                            }[n]();
                        }
                    },
                    substringTime: function(t) {
                        var e = l(t.split(" "), 2), n = e[0], i = e[1], r = l(n.split("-"), 3)[2], o = l(i.split(":"), 2), a = o[0], c = o[1];
                        return "".concat(r, "日 ").concat(a, ":").concat(c);
                    },
                    loadHeaderData: function() {
                        var t = this;
                        r.default.activity.groupBuyHeader().then(function(e) {
                            if (t.responseVerify(e)) {
                                var n = e.data, i = n.num, r = n.list;
                                t.joinNumber = i || 0, Array.isArray(r) && (t.joinList = r);
                            }
                        });
                    },
                    loadPrizeList: function() {
                        var t = this;
                        r.default.activity.winPrizeList().then(function(e) {
                            t.responseVerify(e) && Array.isArray(e.data) && e.data.length > 0 && (t.prizeList = e.data.map(function(e) {
                                return d(d({}, e), {}, {
                                    lotteryShowTime: t.substringTime(e.lottery_time),
                                    startShowTime: t.substringTime(e.start_time),
                                    status: t.getPrizeStatus(e)
                                });
                            }), t.$nextTick(function() {
                                if (t.activePrize && t.activePrize.id) {
                                    var e = t.activePrize.id, n = t.prizeList.findIndex(function(t) {
                                        return t.id === e;
                                    });
                                    t.activeIndex = n || 0, t.activePrize = t.prizeList[n];
                                } else {
                                    var i = t.prizeList.findIndex(function(t) {
                                        return 1 === t.status.code;
                                    }), r = t.prizeList.findIndex(function(t) {
                                        return 0 === t.status.code;
                                    }), o = 0;
                                    i > -1 ? o = i : r > -1 && (o = r);
                                    var a = t.prizeList[o];
                                    t.changePrize(a, o);
                                }
                                t.$forceUpdate();
                            }));
                        });
                    },
                    loadOnlineList: function() {
                        var t = this;
                        r.default.activity.groupBuyOnlineList({
                            page: 1,
                            size: 3,
                            promotion_id: 4
                        }).then(function(e) {
                            t.responseVerify(e) && (t.onlineList = e.data.list || []);
                        });
                    },
                    loadProjectList: function() {
                        var t = this;
                        r.default.activity.groupBuyList({
                            route: "/couponForActivity",
                            data: {
                                activityPromotionId: 3,
                                page: 1
                            }
                        }).then(function(e) {
                            if (t.responseVerify(e)) {
                                var n = e && e.data && e.data.data || [];
                                t.groupList = n.slice(0, 4);
                            }
                        });
                    },
                    loadLiverList: function() {
                        var t = this;
                        r.default.activity.liverList({
                            page: 1,
                            size: 2,
                            activity_promotion_id: 2
                        }).then(function(e) {
                            t.responseVerify(e) && (t.liverList = e.data || []);
                        });
                    },
                    loadRule: function() {
                        var t = this;
                        r.default.activity.banner({
                            type: "single_day_win_prize_rule"
                        }).then(function(e) {
                            t.responseVerify(e) && (t.ruleContent = e.data);
                        });
                    },
                    loadData: function() {
                        this.loadHeaderData(), this.loadPrizeList(), this.loadOnlineList(), this.loadProjectList(), 
                        this.loadLiverList(), this.loadRule();
                    }
                }
            };
            e.default = y;
        }).call(this, n("543d").default);
    }
}, [ [ "03874", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);