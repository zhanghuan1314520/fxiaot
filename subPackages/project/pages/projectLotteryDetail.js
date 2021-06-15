require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/projectLotteryDetail" ], {
    "11ae": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = c(n("a34a")), i = c(n("c909")), r = c(n("60e4")), s = n("ca00"), a = c(n("4ec3")), l = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            function h(t, e, n, o, i, r, s) {
                try {
                    var a = t[r](s), l = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(l) : Promise.resolve(l).then(o, i);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, i) {
                        var r = t.apply(e, n);
                        function s(t) {
                            h(r, o, i, s, a, "next", t);
                        }
                        function a(t) {
                            h(r, o, i, s, a, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var d = {
                components: {
                    TimeAxis: function() {
                        n.e("components/TimeAxis").then(function() {
                            return resolve(n("2ec0f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ContactSalesman: function() {
                        n.e("components/ContactSalesman").then(function() {
                            return resolve(n("bf9f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CallSalesman: function() {
                        n.e("components/CallSalesman").then(function() {
                            return resolve(n("f845"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FollowSuccess: function() {
                        n.e("components/FollowSuccess").then(function() {
                            return resolve(n("ef03"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Trend: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/components/lotteryDetail/UnsuccessfulTrend") ]).then(function() {
                            return resolve(n("c99cc"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    LotteryExcel: function() {
                        n.e("components/lotteryExcel").then(function() {
                            return resolve(n("de37"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r.default ],
                data: function() {
                    return {
                        cityName: "hangzhou",
                        activeIndex: 0,
                        historyDate: [],
                        lotteryList: [],
                        historyList: [],
                        project_id: "",
                        lottery_id: "",
                        title: "",
                        scrollwidth: 250,
                        scrollLeft: 0,
                        phone: "",
                        btnStatus: [],
                        baseDetail: {},
                        isNotLottery: "",
                        closeLottery: !0,
                        autoCloseLotteryResultTip: !1,
                        autoCloseLotteryResultTipTimer: null,
                        hasResutBtn: null,
                        commentsCount: 0,
                        alertShow: "",
                        toastMsg: "",
                        alertShowFlag: !1,
                        followSuccessed: !1,
                        erTrendData: {},
                        swiperHeight: 0,
                        canvasToImage: !1
                    };
                },
                onUnload: function() {
                    this.autoCloseLotteryResultTipTimer && (clearTimeout(this.autoCloseLotteryResultTipTimer), 
                    this.autoCloseLotteryResultTipTimer = null);
                },
                onShareAppMessage: function() {
                    return l.share.share("".concat(this.title, "的历史摇号"));
                },
                onPullDownRefresh: function() {
                    t.stopPullDownRefresh();
                },
                onPageScroll: function(t) {
                    this.$refs.share.pageScroll(t);
                },
                onLoad: function() {
                    var t = f(o.default.mark(function t(e) {
                        var n, r;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e.scene ? (n = decodeURIComponent(e.scene), r = (0, i.default)(n.indexOf("?") > -1 ? "" : "?".concat(n)).search(!0), 
                                this.lottery_id = r.lottery_id, this.project_id = r.project_id) : (this.lottery_id = e.lottery_id || "", 
                                this.project_id = e.project_id || "", this.activeIndex = e.key || 0, this.title = decodeURIComponent(e.name)), 
                                t.next = 3, this.loadNext();

                              case 3:
                                return t.next = 5, this.changeType(this.activeIndex);

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
                computed: {
                    bottomHeight: function() {
                        return s.isIPhoneX ? 292 : 238;
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    toLocation: function() {
                        this.baseDetail && this.baseDetail.x_axis && t.openLocation({
                            latitude: parseFloat(this.baseDetail.y_axis),
                            longitude: parseFloat(this.baseDetail.x_axis),
                            name: this.baseDetail.project_location
                        });
                    },
                    contactSalesEvent: function(t) {
                        this.toUrl.call(this, t.hasPhone);
                    },
                    toUrl: function(e) {
                        var n = "/pages/salesMan/index?id=".concat(this.project_id, "&title=").concat(this.title);
                        if (e) t.navigateTo({
                            url: n
                        }); else {
                            var o = "/subPackages/tools/pages/telLogin?direct=".concat(encodeURIComponent(n));
                            t.navigateTo({
                                url: o
                            });
                        }
                    },
                    changeAttention: function() {
                        var t = this;
                        a.default.getBtnStatus(this.lottery_id, this.project_id).then(function(e) {
                            t.btnStatus = e.data;
                        });
                    },
                    lotteryRemindHandle: function() {
                        var t = this;
                        this.baseDetail.remind = "1" === this.baseDetail.remind.toString() ? 2 : 1, a.default.getlotteryRemind(this.project_id).then(function(e) {
                            0 === Math.floor(e.code) && (t.baseDetail.remind = e.data.status, 1 === Math.floor(e.data.status) ? (t.alertShow = "1", 
                            t.toastMsg = 0 !== t.baseDetail.type ? "关注成功" : "摇号提醒设置成功", t.btnStatus.attention = 1, 
                            t.followModelShow = !0, t.followSuccessed = !0) : (t.alertShowFlag = !0, t.toastMsg = 0 !== t.baseDetail.type ? "取消关注成功" : "摇号提醒取消成功", 
                            t.btnStatus.attention = 2, t.alertShow = "2"), setTimeout(function() {
                                t.alertShowFlag = !1, t.alertShow = "";
                            }, 2e3), t.btnEventTrack.call(t, "历史摇号-楼盘摇号提醒"));
                        });
                    },
                    getDetail: function() {
                        var t = f(o.default.mark(function t() {
                            var e;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.lotteryDetail.getDetails(this.project_id, this.id, this.is_not_lottery);

                                  case 2:
                                    e = t.sent, 0 === Math.floor(e.code) && (this.baseDetail = e.data, this.title = this.baseDetail.name);

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
                    closeLotteryResult: function() {
                        this.closeLottery = !1, this.autoCloseLotteryResultTipTimer && (clearTimeout(this.autoCloseLotteryResultTipTimer), 
                        this.autoCloseLotteryResultTipTimer = null);
                    },
                    btnEventTrack: function(t, e, n) {
                        var o = {
                            name: this.baseDetail.name,
                            project_id: this.baseDetail.project_id
                        };
                        return "object" === u(n) && null !== n && "string" == typeof e && "" !== e && (o = Object.assign(o, JSON.parse(e))), 
                        o;
                    },
                    preview: function(e) {
                        t.previewImage({
                            current: e,
                            urls: [ e ]
                        });
                    },
                    phoneModalChange: function(t) {
                        this.canvasToImage = t;
                    },
                    onSlideChangeEnd: function() {
                        var t = f(o.default.mark(function t(e) {
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.activeIndex = e.detail.current, t.next = 3, this.changeType(this.activeIndex);

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    changeType: function() {
                        var t = f(o.default.mark(function t(e) {
                            var n, i;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!this.lotteryList[e]) {
                                        t.next = 13;
                                        break;
                                    }
                                    if (this.activeIndex = e, this.lotteryList[e].length) {
                                        t.next = 12;
                                        break;
                                    }
                                    return this.lottery_id = this.historyList[e] && this.historyList[e].id, t.next = 6, 
                                    a.default.lotteryInfo(this.historyList[e].id);

                                  case 6:
                                    n = t.sent, this.lotteryList[e] = n.data, this.isNotLottery = this.lotteryList[e] && this.lotteryList[e].is_resulted, 
                                    i = this.lotteryList[e].button_list, this.hasResutBtn = i.results, this.commentsCount = this.lotteryList[e].comment_num;

                                  case 12:
                                    this.swiperHeight = this.computedSwiperHeight(this.lotteryList[e]);

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    computedSwiperHeight: function(t) {
                        var e = 100;
                        t.price.length > 0 && (e += t.price.reduce(function(t) {
                            return t + 42;
                        }, 0));
                        var n = t.rows.reduce(function(t) {
                            return t + 52;
                        }, 0);
                        return e += n, e += Math.max(n, 136), e += 30 + (t.lottery_rate.length > 0 ? t.lottery_rate.reduce(function(t) {
                            return t + 72;
                        }, 0) : 0 === t.room_num_info.lt_triple_info.length && t.room_num_info.gte_triple_info.title ? 236 : 0 !== t.room_num_info.lt_triple_info.length || t.room_num_info.gte_triple_info.title ? 484 : 162), 
                        e += 580, e += 50;
                    },
                    shake: function(e, n) {
                        var o = this.lotteryList[e], i = o && o.button_list && o.button_list[n];
                        if (i) switch (Math.floor(i.type)) {
                          case 0:
                            break;

                          case 1:
                            i.url && t.navigateTo({
                                url: i.url
                            });
                            break;

                          case 2:
                            t.showLoading({
                                title: "加载中..."
                            });
                            var r = i.url;
                            if ([ ".doc", ".xls", ".pdf", ".docx", ".xlsx" ].every(function(t) {
                                return r.indexOf(t) < 0;
                            })) return l.tip.toast("格式不支持", "", "none"), void t.hideLoading();
                            t.downloadFile({
                                url: i.url,
                                success: function(e) {
                                    if (200 === e.statusCode) {
                                        var n = e.tempFilePath;
                                        t.openDocument({
                                            filePath: n
                                        });
                                    }
                                },
                                complete: function() {
                                    t.hideLoading();
                                }
                            });
                            break;

                          case 3:
                            i.url && t.navigateTo({
                                url: i.url
                            });
                            break;

                          case 4:
                            i.url.length > 1 ? t.navigateTo({
                                url: "/subPackages/project/pages/sourceList?project_id=".concat(this.project_id, "&lottery_id=").concat(this.lottery_id, "&name=").concat(this.title)
                            }) : t.previewImage({
                                urls: i.url
                            });
                        }
                    },
                    loadNext: function() {
                        var e = f(o.default.mark(function e() {
                            var n, i, r, s = this;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, a.default.historyTrend(this.project_id);

                                  case 3:
                                    return n = e.sent, this.erTrendData = n.data, e.next = 7, a.default.historyLottery(this.project_id, this.lottery_id);

                                  case 7:
                                    for (i = e.sent, r = 0; r < i.data.length; r += 1) this.historyDate.push(i.data[r].pre_order_time.substr(0, 10)), 
                                    this.lotteryList.push({});
                                    this.historyList = i.data, this.historyDate.length > 1 ? (this.scrollwidth = 90 * Math.floor(this.historyDate.length) + 6 * (Math.floor(this.historyDate.length) - 1), 
                                    this.scrollLeft = 90 * (Math.floor(this.activeIndex) - 1) + 6 * (Math.floor(this.activeIndex) - 2)) : this.scrollwidth = 250, 
                                    t.hideLoading(), this.changeAttention.call(this), this.getDetail.call(this), this.closeLottery && 0 !== this.isNotLottery && (this.autoCloseLotteryResultTipTimer = setTimeout(function() {
                                        s.autoCloseLotteryResultTip = !0, clearTimeout(s.autoCloseLotteryResultTipTimer), 
                                        s.autoCloseLotteryResultTipTimer = null;
                                    }, 5e3));

                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    "69c8": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ebc4")).default);
        }).call(this, n("543d").createPage);
    },
    "7b4b": function(t, e, n) {},
    "830e": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("11ae"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    9489: function(t, e, n) {
        "use strict";
        var o = n("7b4b");
        n.n(o).a;
    },
    bc4f: function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    ebc4: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("bc4f"), i = n("830e");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("9489");
        var s = n("f0c5"), a = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    }
}, [ [ "69c8", "common/runtime", "common/vendor", "subPackages/project/common/vendor" ] ] ]);