(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/lotteryDetail" ], {
    "5d33": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("5f3e")).default);
        }).call(this, n("543d").createPage);
    },
    "5f3e": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("b767"), o = n("7583");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("c538"), n("de93");
        var s = n("f0c5"), r = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "68f5": function(t, e, n) {},
    7583: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("fe64"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    },
    "7e49": function(t, e, n) {},
    b767: function(t, e, n) {
        "use strict";
        var i = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.showSunshine ? {
                width: "100%",
                "min-height": "130rpx"
            } : null), n = t.buildingArticles.list.length > 0 || t.articles.list.length > 0 ? t.__map("project" === t.articlesIndex ? t.articles.list : t.buildingArticles.list, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    a1: {
                        width: "240rpx",
                        height: "160rpx",
                        "border-radius": "6rpx"
                    },
                    a2: {
                        width: "34rpx",
                        height: "34rpx",
                        "border-radius": "100%"
                    }
                };
            }) : null;
            t._isMounted || (t.e0 = function(e) {
                t.showCouponDialog = !0;
            }, t.e1 = function(e) {
                t.showCouponDialog = !0;
            }, t.e2 = function(e) {
                t.isShowGroupTips = !0;
            }, t.e3 = function(e) {
                t.isShowGroupTips = !0;
            }, t.e4 = function(e) {
                t.followModelShow = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    l0: n
                }
            });
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return i;
        });
    },
    c538: function(t, e, n) {
        "use strict";
        var i = n("68f5");
        n.n(i).a;
    },
    de93: function(t, e, n) {
        "use strict";
        var i = n("7e49");
        n.n(i).a;
    },
    fe64: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = f(n("a34a")), o = f(n("c909")), a = n("2f62"), s = f(n("4ec3")), r = n("b628"), c = n("ca00"), l = f(n("dcf6")), u = f(n("f210")), h = f(n("4919")), d = f(n("e5e9"));
            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            function m(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], i = !0, o = !1, a = void 0;
                        try {
                            for (var s, r = t[Symbol.iterator](); !(i = (s = r.next()).done) && (n.push(s.value), 
                            !e || n.length !== e); i = !0) ;
                        } catch (t) {
                            o = !0, a = t;
                        } finally {
                            try {
                                i || null == r.return || r.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return g(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, i);
                }
                return n;
            }
            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach(function(e) {
                        v(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function v(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function b(t, e, n, i, o, a, s) {
                try {
                    var r = t[a](s), c = r.value;
                } catch (t) {
                    return void n(t);
                }
                r.done ? e(c) : Promise.resolve(c).then(i, o);
            }
            function w(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, o) {
                        var a = t.apply(e, n);
                        function s(t) {
                            b(a, i, o, s, r, "next", t);
                        }
                        function r(t) {
                            b(a, i, o, s, r, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var S = n("f4fd").getGlobalConfig, T = n("79b9"), L = !0, j = 0, I = {
                components: {
                    Maker: function() {
                        n.e("components/maker").then(function() {
                            return resolve(n("a7b8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SwiperList: function() {
                        n.e("pages/components/lotteryDetail/SwiperList").then(function() {
                            return resolve(n("6c0f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    LotteryInfo: function() {
                        n.e("pages/components/hangzhou/lotteryDetail/LotteryInfo").then(function() {
                            return resolve(n("559c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    lotteryCode: function() {
                        n.e("pages/components/hangzhou/lotteryDetail/lotteryCode").then(function() {
                            return resolve(n("33f1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    salesMan: function() {
                        n.e("pages/components/lotteryDetail/salesMan").then(function() {
                            return resolve(n("20d9"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    LotteryTab: function() {
                        n.e("pages/components/lotteryDetail/LotteryTab").then(function() {
                            return resolve(n("a07a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseAddMiniApp: function() {
                        n.e("components/BaseAddMiniApp").then(function() {
                            return resolve(n("a388"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ProjectItem: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HorizontalTabs: function() {
                        n.e("pages/components/HorizontalTabs/Index").then(function() {
                            return resolve(n("40d4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FollowSuccess: function() {
                        n.e("components/FollowSuccess").then(function() {
                            return resolve(n("ef03"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    OfficialDrainage: function() {
                        n.e("components/CommonSmallCompont").then(function() {
                            return resolve(n("1525"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RegisterEntry: function() {
                        n.e("pages/components/lotteryDetail/registerEntry").then(function() {
                            return resolve(n("5a86"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    attentionServiceNumber: function() {
                        n.e("pages/components/lotteryDetail/attentionServiceNumber").then(function() {
                            return resolve(n("066d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    GuideImg: function() {
                        n.e("components/GuideImg/Index").then(function() {
                            return resolve(n("6c14"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CouponDialog: function() {
                        n.e("pages/components/CouponDialog").then(function() {
                            return resolve(n("7649"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SignTimer: function() {
                        n.e("pages/components/lotteryDetail/SignTimer").then(function() {
                            return resolve(n("97ce"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    StatementList: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/components/lotteryDetail/StatementList") ]).then(function() {
                            return resolve(n("56b2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    StatementListNotCD: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/components/lotteryDetail/StatementListNotCD") ]).then(function() {
                            return resolve(n("024c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CommentItem: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/components/lotteryDetail/CommentItem") ]).then(function() {
                            return resolve(n("1db0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiFooter: function() {
                        n.e("components/UILayout/BusiFooter").then(function() {
                            return resolve(n("dff1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiButton: function() {
                        n.e("components/UILayout/BusiButton").then(function() {
                            return resolve(n("3f66"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    CallSalesman: function() {
                        n.e("components/CallSalesman").then(function() {
                            return resolve(n("f845"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ContactSalesman: function() {
                        n.e("components/ContactSalesman").then(function() {
                            return resolve(n("bf9f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ShareTimelineLayout: function() {
                        n.e("components/ShareTimelineLayout").then(function() {
                            return resolve(n("0bd0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ImageLoader: function() {
                        n.e("components/ImageLoader").then(function() {
                            return resolve(n("24e0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    LayoutImg: function() {
                        n.e("pages/components/lotteryDetail/LayoutImage").then(function() {
                            return resolve(n("8360a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    FloorPlan: function() {
                        n.e("pages/components/lotteryDetail/HousePlan").then(function() {
                            return resolve(n("8b65"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiRedPaper: function() {
                        n.e("pages/components/lotteryDetail/BusiRedPaper").then(function() {
                            return resolve(n("998d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiMaskFocus: function() {
                        n.e("pages/components/lotteryDetail/BusiMaskFocus").then(function() {
                            return resolve(n("5023"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    RedEnvelopesState: function() {
                        n.e("pages/components/lotteryDetail/RedEnvelopesState").then(function() {
                            return resolve(n("f6c2"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    JumpGroupCode: function() {
                        n.e("pages/components/lotteryDetail/JumpGroupCode").then(function() {
                            return resolve(n("5bb7"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ u.default, d.default, h.default ],
                data: function() {
                    var e = r.cache.get("followTips"), n = t.getSystemInfoSync();
                    return {
                        projectHasCoupon: !1,
                        showCouponDialog: !1,
                        is_today_evidence: !1,
                        showSignTimer: !1,
                        sign_end_time: 0,
                        serviceQrCode: "",
                        u_id: 0,
                        s_id: 0,
                        project_id: 0,
                        id: 0,
                        sales_man_id: 0,
                        reportHideTip: !1,
                        is_not_lottery: "",
                        baseDetail: {
                            skeleton: !0
                        },
                        baseDetailLinks: new Array(4).fill({
                            skeleton: !0
                        }),
                        projectInfo: {},
                        projectInfoTags: new Array(5).fill({
                            skeleton: !0
                        }),
                        projectInfoRows: new Array(10).fill({
                            skeleton: !0
                        }),
                        swiperList: {
                            skeleton: !0
                        },
                        shareMessage: null,
                        houseList: [],
                        lotteryInfo: {},
                        dynamics: {
                            count: 0,
                            list: []
                        },
                        historyLottery: [],
                        comments: {
                            list: [],
                            count: 0,
                            comment: ""
                        },
                        articles: {
                            list: [],
                            count: 0
                        },
                        buildingArticles: {
                            list: [],
                            count: 0
                        },
                        youLikeList: [],
                        guideImageData: [],
                        activityList: [],
                        btnStatus: [],
                        historyLotteryShow: !1,
                        followModelShow: !1,
                        articlesIndex: "project",
                        showCommentInput: !1,
                        commentInput: {
                            val: "",
                            place: "我来说两句…",
                            pid: "",
                            focus: !0
                        },
                        fixedCommentBottom: 0,
                        recommendSalesMan: [],
                        thisProjectSalesman: 2,
                        lotteryNum: [],
                        lotteryIndex: "",
                        scrollIndex: "",
                        subwayList: [],
                        isSaleMan: !1,
                        projectName: "",
                        alertShow: "",
                        closeLottery: !0,
                        toastMsg: "",
                        alertShowFlag: !1,
                        autoCloseLotteryResultTip: !1,
                        closeLotteryResultTipShowed: !1,
                        autoCloseLotteryResultTipTimer: null,
                        iShowRegisterBg: !1,
                        registerBgSrc: "",
                        registerBgSrcArr: [],
                        tempSalesManId: 0,
                        recommendComment: {},
                        followSuccessed: !1,
                        followTips: !!e,
                        followTipsTimer: null,
                        attentionServiceFlag: !1,
                        showSunshine: !1,
                        showAd: null,
                        dynamicsList: [],
                        salesManId: 0,
                        signType: 0,
                        entryType: "",
                        entryCover: "",
                        marginTop: "".concat(44 + n.statusBarHeight, "px"),
                        showMarker: !0,
                        isFromSalesUnion: "0",
                        optionList: [],
                        statusStyles: {
                            "待售": "info__tips__item--jjys",
                            "今日取证": "info__tips__item--jjys",
                            "复合中": "info__tips__item--jjys",
                            "已摇号": "info__tips__item--jjys",
                            "在售": "info__tips__item--zs",
                            "即将登记": "info__tips__item--zs",
                            "正在登记": "info__tips__item--zs",
                            "等待摇号": "info__tips__item--zs",
                            "初核名单": "info__tips__item--zs",
                            "等待加推": "info__tips__item--zzgs",
                            "交资料中": "info__tips__item--zzgs",
                            "自主选房": "info__tips__item--zzgs",
                            "复核名单": "info__tips__item--zzgs",
                            "已清盘": "info__tips__item--yqp"
                        },
                        smallBanner: [],
                        pageScroll: !1,
                        isShowCommentBtn: !0,
                        shareTimelineParam: {},
                        backTopShow: !1,
                        horizontalTabs: [],
                        actionViewName: "",
                        redEnvelopesAttention: !1,
                        redpackInfo: {},
                        redpackDetail: {},
                        redpackType: -1,
                        showRedpack: !1,
                        redPackId: 6,
                        navigateBack: "",
                        btnStatusLoading: !0,
                        unionSalesmanInfo: {},
                        union_sales_man_id: "",
                        isShowGroupTips: !1
                    };
                },
                computed: {
                    bottomHeight: function() {
                        return c.isIPhoneX ? 292 : 238;
                    },
                    layoutHeight: function() {
                        return c.isIPhoneX ? 198 : 132;
                    },
                    baseDetailName: function() {
                        var t = this.baseDetail.name;
                        return t && "string" == typeof t && t.length > 10 ? "".concat(t.slice(0, 9), "…") : t || "楼盘详情";
                    },
                    contactSalemanBtnText: function() {
                        var t = this.btnStatus.result_url && 2 === this.btnStatus.result_url.type, e = this.btnStatus.result_url && 3 === this.btnStatus.result_url.type;
                        return t || e ? "置业顾问" : "联系置业顾问";
                    },
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    },
                    isNotLottery: function() {
                        return this.baseDetail.is_resulted;
                    },
                    notLotteryTotal: function() {
                        return this.baseDetail.not_lottery && this.baseDetail.not_lottery.reduce(function(t, e) {
                            return t + (e.surplus_count ? Math.floor(e.surplus_count) : 0);
                        }, 0);
                    },
                    showGeneralLayout: function() {
                        return 1 === Number(this.baseDetail.plan_status);
                    },
                    isResultedFlag: function() {
                        return 3 === this.lotteryInfo.is_resulted && !1;
                    },
                    iShowRegisterEntry: function() {
                        return this.lotteryInfo.sign_entrance || !1;
                    },
                    computedFocusWidth: function() {
                        return !this.btnStatus.result_url || 2 !== Number(this.btnStatus.result_url.type) && 3 !== Number(this.btnStatus.result_url.type) ? "296" : "196";
                    }
                },
                watch: {
                    baseDetail: function(t) {
                        var e = this;
                        if (t && t.is_today_evidence && (this.is_today_evidence = 1 === t.is_today_evidence), 
                        t && t.sign_end_time && this.showSign) {
                            var n = new Date(t.sign_end_time.replace(/-/g, "/")).getTime();
                            new Date().getTime() < n ? (this.sign_end_time = n, this.showSignTimer = !0) : this.showSignTimer = !1;
                        }
                        t.skeleton || (this.autoCloseLotteryResultTipTimer && (clearTimeout(this.autoCloseLotteryResultTipTimer), 
                        this.autoCloseLotteryResultTipTimer = null, this.autoCloseLotteryResultTip = !1), 
                        this.closeLottery && 0 !== this.isNotLottery && (this.autoCloseLotteryResultTip = !0, 
                        this.autoCloseLotteryResultTipTimer = setTimeout(function() {
                            e.autoCloseLotteryResultTip = !1, e.closeLotteryResultTipShowed = !0, clearTimeout(e.autoCloseLotteryResultTipTimer), 
                            e.autoCloseLotteryResultTipTimer = null;
                        }, 3e3)), this.followTipsTimer = setTimeout(function() {
                            e.closeFollowTips(), clearTimeout(e.followTipsTimer);
                        }, 3e3));
                    }
                },
                onShareAppMessage: function() {
                    var t = {
                        title: "",
                        path: "",
                        imageUrl: ""
                    };
                    return this.shareMessage && (t.title = this.shareMessage.title, t.path = this.shareMessage.url, 
                    t.imageUrl = this.shareMessage.image), r.share.share(t.title, t.path, t.imageUrl);
                },
                onShareTimeline: function() {
                    var t = this.shareMessage.title || this.shareTimelineParam.title, e = this.shareMessage.image || this.shareTimelineParam.share_image;
                    return r.share.shareTimeline(t, {
                        shareTimeline: this.shareTimelineParam.content_image
                    }, e);
                },
                onPullDownRefresh: function() {
                    var e = this;
                    this.backTopShow = !1, t.showLoading({
                        title: "加载中"
                    }), this.firstPageLoad().then(function() {
                        e.secondPageLoad(), t.hideLoading(), t.stopPullDownRefresh();
                    }).then(function() {
                        return e.threePageLoad();
                    }).then(function() {
                        return e.fovrPageLoad();
                    }).then(function() {
                        return e.fivePageLoad();
                    }).then(function() {
                        return e.lastPageLoad();
                    });
                },
                onUnload: function() {
                    L = !1, this.autoCloseLotteryResultTipTimer && (clearTimeout(this.autoCloseLotteryResultTipTimer), 
                    this.autoCloseLotteryResultTipTimer = null);
                },
                onHide: function() {
                    var t = this;
                    this.reportHideTip = !0, this.$nextTick(function() {
                        t.reportHideTip = !1;
                    });
                },
                onShow: function() {
                    var e = this;
                    L = !0;
                    var n = r.redis.get("refreshPkIconStatus");
                    if (s.default.getBtnStatus(this.id, this.project_id).then(function(t) {
                        t.data && (e.btnStatus = t.data);
                    }), n && this.baseDetail && this.baseDetail.project_id) {
                        t.setNavigationBarTitle({
                            title: "杭州房小团-".concat(this.baseDetail.name)
                        });
                        var i = n.split(",");
                        i.indexOf(this.project_id) > -1 && s.default.lotteryDetail.getDetails(this.project_id, this.id).then(function(t) {
                            t.data && (e.baseDetail = t.data, i.splice(i.indexOf(e.project_id), 1), r.redis.set("refreshPkIconStatus", i.toString(), 60));
                        });
                    }
                    r.redis.get("refreshAttentionStatus") && (this.changeAttention(), s.default.lotteryDetail.getDetails(this.project_id, this.id).then(function(t) {
                        t.data && (e.baseDetail = t.data);
                    }), r.redis.remove("refreshAttentionStatus")), r.redis.get("refreshLotteryDetail") && s.default.lotteryDetail.getDetails(this.project_id, this.id, this.is_not_lottery).then(function(t) {
                        t.data && (e.baseDetail = t.data);
                    }), this.$nextTick(function() {
                        "1" !== String(e.is_not_lottery) && e.queryLotteryNum();
                    });
                },
                onLoad: function() {
                    var t = w(i.default.mark(function t(e) {
                        var n, a, c, u = this;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.$refs.busiNavHeader.setTransparentMode(), n = {}, !e.hid) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 5, s.default.getDecodeHashParams(e.hid);

                              case 5:
                                a = t.sent, n = a && a.data && a.data ? (0, o.default)("?".concat(decodeURIComponent(a.data.path))).search(!0) : e, 
                                t.next = 10;
                                break;

                              case 9:
                                n = e;

                              case 10:
                                this.pageInit(n), this.firstPageLoad().then(function() {
                                    return u.secondPageLoad();
                                }).then(function() {
                                    return u.threePageLoad();
                                }).then(function() {
                                    return u.fovrPageLoad();
                                }).then(function() {
                                    return u.fivePageLoad();
                                }).then(function() {
                                    return u.lastPageLoad();
                                }).then(function() {
                                    u.horizontalTabs = [ {
                                        actionView: "open-quotation",
                                        name: "开盘信息",
                                        iShow: !!u.lotteryInfo.lottery_rate
                                    }, {
                                        actionView: "lottery-result",
                                        name: "摇号结果",
                                        iShow: !!u.id
                                    }, {
                                        actionView: "lottery-code-down-recommend-sales-man",
                                        name: "置业顾问",
                                        iShow: u.id && u.recommendSalesMan.length > 0
                                    }, {
                                        actionView: "project-detail",
                                        name: "详细信息",
                                        iShow: !0
                                    }, {
                                        actionView: "house-type",
                                        name: "户型图",
                                        iShow: u.houseList && u.houseList.length > 0
                                    }, {
                                        actionView: "general-layout",
                                        name: "总平图",
                                        iShow: !!u.showGeneralLayout
                                    }, {
                                        actionView: "recommend-sales-man",
                                        name: "置业顾问",
                                        iShow: !u.id && u.recommendSalesMan.length > 0
                                    }, {
                                        actionView: "start-sell-detail",
                                        name: "预开盘",
                                        iShow: u.baseDetail.start_sell_detail && u.baseDetail.start_sell_detail.sale_area
                                    }, {
                                        actionView: "dynamic-info",
                                        name: "楼盘动态",
                                        iShow: u.dynamics.list.length > 0
                                    }, {
                                        actionView: "history-lottery",
                                        name: "历史摇号",
                                        iShow: u.historyLottery.length > 0
                                    }, {
                                        actionView: "comment",
                                        name: "用户评论",
                                        iShow: !0
                                    }, {
                                        actionView: "join-group",
                                        name: "加群",
                                        iShow: !0
                                    }, {
                                        actionView: "project-article",
                                        name: "楼盘文章",
                                        iShow: u.buildingArticles.list.length > 0 || u.articles.list.length > 0
                                    }, {
                                        actionView: "youlike",
                                        name: "猜你喜欢",
                                        iShow: u.youLikeList && u.youLikeList.length > 0
                                    } ].filter(function(t) {
                                        return t.iShow;
                                    }).map(function(t) {
                                        return {
                                            actionView: t.actionView,
                                            name: t.name
                                        };
                                    }), u.runHorizontalTabs(u.horizontalTabs, "actionViewName");
                                }), e.redirect && ((c = new o.default(e.redirect)).search(!0).share_salesman_id || c.setSearch("share_salesman_id", e.s_id), 
                                new l.default(_(_({}, e), {}, {
                                    redirect: c.toString()
                                })).check()), s.default.activity.redpackInfo(this.redPackId, this.project_id).then(function(t) {
                                    var e = t.data;
                                    e && (u.showRedpack = 0 === Number(e.code), u.redpackInfo = e.data || {});
                                }), this.$nextTick(function() {
                                    u.$sa && u.$sa.registerApp && (u.$sa.registerApp({
                                        lastVisitProjectId: n.project_id
                                    }), r.cache.set("lastVisitProjectId", n.project_id)), s.default.getShareInfo({
                                        page_name: "/pages/lotteryDetail",
                                        lottery_id: u.id,
                                        project_id: u.project_id,
                                        isFromSalesUnion: u.isFromSalesUnion,
                                        union_sales_man_id: u.union_sales_man_id
                                    }).then(function(t) {
                                        u.shareMessage = t.data;
                                    }), s.default.getShareTimelineParam("project_detail").then(function(t) {
                                        t.data && (u.shareTimelineParam = t.data);
                                    }), u.getProjectHasCoupon();
                                    var t = getCurrentPages();
                                    s.default.pageViewHook({
                                        page: t[t.length - 1].route,
                                        projectId: e.project_id
                                    });
                                });

                              case 15:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: _(_(_({
                    onMaskClick: function() {
                        this.redEnvelopesAttention = !1;
                    },
                    onFocusClick: function() {
                        this.redEnvelopesAttention = !1, this.$refs.contactSalesman.onSuccess(), this.$sa && this.$sa.track("$MPClick", {
                            $element_content: "底部按钮",
                            $element_name: "联系置业顾问",
                            $element_type: "button"
                        });
                    },
                    contactHandle: function(t) {
                        this.redEnvelopesAttention = t;
                    },
                    clickGetOut: function() {
                        this.showRedpack = !1, 1 === Number(this.redpackInfo.finish) ? this.redpackType = -4 : 2 === Number(this.redpackInfo.finish) ? this.redpackType = -5 : this.redpackType = 0;
                    },
                    clickGet: function() {
                        var t = this;
                        this.showRedpack = !1, s.default.activity.respackReceive(this.redPackId, this.redpackInfo.id).then(function(e) {
                            var n = e.data;
                            if (n) {
                                t.redpackType = n.code;
                                var i = {
                                    per_amount: n.data.per_amount,
                                    id: n.data.id,
                                    activity_id: n.data.activity_id
                                };
                                t.redpackDetail = i;
                            }
                        });
                    }
                }, (0, a.mapActions)({
                    setUserInfo: "setUserInfo"
                })), (0, a.mapMutations)({
                    setEventHandler: "SET_EVENTHANDLER"
                })), {}, {
                    firstPageLoad: function() {
                        var e = w(i.default.mark(function e() {
                            var n, o, a, r, c, l, u = this;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, Promise.all([ s.default.lotteryDetail.getDetails(this.project_id, this.id, this.is_not_lottery), s.default.lotteryDetail.getProjectInfo(this.project_id) ]);

                                  case 2:
                                    n = e.sent, o = m(n, 2), a = o[0], r = o[1], a.data && (c = a.data, this.baseDetail = c, 
                                    this.projectName = c.name, this.id = c.lottery_id || this.id, this.baseDetailLinks = c.links, 
                                    13 === Math.floor(j) && (t.navigateTo({
                                        url: "/subPackages/project/pages/projectLotteryDetail?project_id=".concat(this.project_id, "&lottery_id=").concat(this.id, "&key=0&name=").concat(c.name)
                                    }), j = 0), L && t.setNavigationBarTitle({
                                        title: "杭州房小团-".concat(this.baseDetail.name)
                                    })), l = r.data || {}, this.projectInfoTags = l.tags || [], this.projectInfoRows = l.rows || [], 
                                    this.$nextTick(function() {
                                        if (u.projectInfo = l, u.projectInfo.periphery) {
                                            var t = u.projectInfo.periphery;
                                            u.subwayList = Object.keys(t).map(function(e) {
                                                return t[e];
                                            }).sort(function(t, e) {
                                                return t.status - e.status;
                                            });
                                        }
                                        s.default.lotteryDetail.getSwiperImage(u.project_id).then(function(t) {
                                            t.data && (u.swiperList = t.data || {});
                                        }), u.btnStatusLoading = !0, s.default.getBtnStatus(u.id, u.project_id).then(function(t) {
                                            t.data && (u.btnStatus = t.data);
                                        }).catch(function() {}).finally(function() {
                                            u.btnStatusLoading = !1;
                                        });
                                    });

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    tabHousePlan: function() {
                        var t = w(i.default.mark(function t(e) {
                            var n;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.houseTypePhotos(this.project_id, this.id, e.type, "");

                                  case 2:
                                    (n = t.sent).data && (this.houseList = n.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    secondPageLoad: function() {
                        var t = w(i.default.mark(function t() {
                            var e, n, o, a, r, c, l, u, h, d = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = s.default.houseTypePhotos(this.project_id, this.id, 0, 0), t.next = 3, 
                                    Promise.all([ s.default.lotteryDetail.getLotteryInfo(this.id), e, s.default.getLotsalesMan(this.project_id) ]);

                                  case 3:
                                    n = t.sent, o = m(n, 3), a = o[0], r = o[1], c = o[2], l = function() {
                                        var t = a.data || {};
                                        d.lotteryInfo = _(_({}, t), {}, {
                                            id: d.id,
                                            project_id: d.project_id,
                                            qr_code: d.baseDetail.qr_code_new
                                        }), d.registerBgSrc = d.lotteryInfo.sign_entrance, d.registerBgSrcArr = d.lotteryInfo.sign_entrance_nj, 
                                        d.signType = d.lotteryInfo.sign_type;
                                    }, u = function() {
                                        d.recommendSalesMan = c.data || [];
                                    }, h = function() {
                                        r.data && (d.houseList = r.data);
                                    }, this.id > 0 ? (l(), this.$nextTick(function() {
                                        return u();
                                    }), this.$nextTick(function() {
                                        return h();
                                    })) : (h(), this.$nextTick(function() {
                                        l(), u();
                                    }));

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    threePageLoad: function() {
                        var t = this;
                        Promise.all([ s.default.getBannerList(38, this.project_id), s.default.lottery.lotteryBannerSettings(this.project_id), s.default.hasSunshine(this.project_id) ]).then(function(e) {
                            var n = m(e, 3), i = n[0], o = n[1], a = n[2];
                            t.smallBanner = o.data || [], t.showSunshine = a.data && a.data.isShow;
                            var s = i.data || [];
                            if (s.length > 0) {
                                var r = 0;
                                s.length > 1 && (r = Math.floor(Math.random() * (t.adList.length - 1 + 1) + 1), 
                                r -= 1), t.showAd = s[r];
                            }
                        }), s.default.isSaleMan(this.project_id).then(function(e) {
                            t.isSaleMan = t.userInfo.sales_man_id > 0, t.salesManId = t.userInfo.sales_man_id || 0, 
                            t.thisProjectSalesman = 1 === Math.floor(e.isSaleMan);
                        });
                    },
                    fovrPageLoad: function() {
                        var t = w(i.default.mark(function t() {
                            var e, n, o, a, r, c, l, u = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, Promise.all([ s.default.getDynamic(this.project_id, "", "1", 1), s.default.historyLottery(this.project_id, this.id), s.default.getProjectCommentList(this.project_id) ]);

                                  case 2:
                                    e = t.sent, n = m(e, 3), o = n[0], a = n[1], r = n[2], o && o.data && (this.dynamics = {
                                        list: o.data.data,
                                        count: o.data.count
                                    }, this.dynamicsList = o.data.data, this.dynamicsList.forEach(function(t) {
                                        if (t.is_toggle = !1, u.getLength(t.content) > 67) t.show_toggle = !0; else {
                                            var e = t.content.split("\n");
                                            (e = e.filter(function(t) {
                                                return t;
                                            })).length > 3 || e.length > 1 && e[e.length - 1].length > 23 ? t.show_toggle = !0 : t.show_toggle = !1;
                                        }
                                    })), Array.isArray(a.data) && (this.historyLottery = a.data), c = r.data && r.data.data || [], 
                                    l = (l = (l = (l = (l = r.data && r.data.comment || "").replace(/<\/?br\/?>/g, "\n")).replace(/<[^/>]+>/g, "")).replace(/<\/p>/g, "\n")).replace(/<[^>]+>/g, ""), 
                                    this.comments = {
                                        list: c.map(function(t) {
                                            return _(_({}, t), {}, {
                                                is_toggle: !1
                                            });
                                        }),
                                        count: r.data && r.data.num,
                                        comment: l
                                    };

                                  case 16:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    fivePageLoad: function() {
                        var t = w(i.default.mark(function t() {
                            var e, n, o, a, r, l, u, h;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, Promise.all([ s.default.projectArticles(this.project_id), s.default.officialAccountsArticles(this.project_id), s.default.guessYouLike(this.project_id, 1), s.default.recommendComment(this.project_id) ]);

                                  case 2:
                                    e = t.sent, n = m(e, 4), o = n[0], a = n[1], r = n[2], l = n[3], o.data && o.data.data && (u = (0, 
                                    c.distinguishUrl)(o.data.data), this.articles = {
                                        list: u,
                                        count: o.data.count
                                    }), this.articles && this.articles.list && this.articles.list.length < 1 && (this.articlesIndex = "building"), 
                                    a.data && a.data.data && (h = (0, c.distinguishUrl)(a.data.data), this.buildingArticles = {
                                        list: h,
                                        count: a.data.count
                                    }), l && (this.recommendComment = l.data || {}), this.youLikeList = r.data && r.data.data;

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    lastPageLoad: function() {
                        var t = this;
                        Promise.all([ s.default.getGuideImage("lottery_detail"), S(), s.default.uploadPermission(this.project_id) ]).then(function(e) {
                            var n = m(e, 3), i = n[0], o = n[1], a = n[2];
                            t.isShowCommentBtn = a.data.project_comment, t.guideImageData = i.data, t.serviceQrCode = o.serviceQrCode;
                        }), "1" === this.isFromSalesUnion && s.default.getSalesManOnce(this.union_sales_man_id).then(function(e) {
                            t.unionSalesmanInfo = e.data || {};
                        });
                    },
                    gonOnViewPage: function() {
                        this.baseDetail.sale_status = "";
                    },
                    handlerShowMaker: function(t) {
                        this.showMarker = t;
                    },
                    toTagsPageHandle: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    getProjectHasCoupon: function() {
                        var t = this;
                        s.default.activity.hasCoupon(this.project_id).then(function(e) {
                            e.data && (t.projectHasCoupon = e.data.available);
                        });
                    },
                    emptyFunction: function() {},
                    lotteryDataLoad: function(t) {
                        var e = this;
                        this.closeLotteryResultTipShowed ? (this.closeLottery = !1, this.autoCloseLotteryResultTip = !1) : (this.autoCloseLotteryResultTipTimer && (clearTimeout(this.autoCloseLotteryResultTipTimer), 
                        this.autoCloseLotteryResultTipTimer = null, this.autoCloseLotteryResultTip = !1), 
                        this.autoCloseLotteryResultTipTimer = setTimeout(function() {
                            e.autoCloseLotteryResultTip = !0, e.closeLotteryResultTipShowed = !0, clearTimeout(e.autoCloseLotteryResultTipTimer), 
                            e.autoCloseLotteryResultTipTimer = null;
                        }, 3e3)), this.id = t, this.firstPageLoad().then(function() {
                            return e.secondPageLoad();
                        }).then(function() {
                            return e.threePageLoad();
                        }).then(function() {
                            return e.fovrPageLoad();
                        }).then(function() {
                            return e.fivePageLoad();
                        }).then(function() {
                            return e.lastPageLoad();
                        });
                    },
                    toViewClickEvent: function(t) {
                        this.toViewClick(t);
                    },
                    adTapHandle: function() {
                        t.navigateTo({
                            url: this.showAd.url
                        });
                    },
                    sendRankEvent: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/projectRank?type=hot&area_id=".concat(this.baseDetail.area_id, "&area_name=").concat(this.baseDetail.area)
                        });
                    },
                    handleViewSunshine: function() {
                        var e = "".concat(T.webviewHost, "/project/sunshine?id=").concat(this.project_id, "&platform=杭州房小团&cover=").concat(this.baseDetail.sunshine_cover, "&title=").concat(this.baseDetail.sunshine_title);
                        t.navigateTo({
                            url: "/pages/webview2?redirect=".concat(encodeURIComponent(e))
                        });
                    },
                    showRegisterEntry: function() {
                        if (2 === Number(this.signType) && (this.iShowRegisterBg = !0), 1 === Number(this.signType) && this.registerBgSrc) {
                            var e = "/pages/webview2?redirect=".concat(encodeURIComponent(this.registerBgSrc));
                            t.navigateTo({
                                url: e
                            });
                        }
                    },
                    closeFollowTips: function() {
                        this.followTips = !0, r.cache.set("followTips", !0);
                    },
                    loseFocus: function() {
                        this.userInfo.nickName && this.toggleCommentInput("hide");
                    },
                    toLinksPage: function(e) {
                        if (!e.skeleton) if (1 === e.status || 1 === this.thisProjectSalesman) switch (e.text) {
                          case "户型图":
                            this.houseList && this.houseList.length > 0 || 1 === this.thisProjectSalesman ? t.navigateTo({
                                url: e.url
                            }) : r.tip.toast("暂无户型图", "", "none");
                            break;

                          case "楼盘动态":
                            this.jumpToStatementList();
                            break;

                          default:
                            t.navigateTo({
                                url: e.url
                            });
                        } else r.tip.toast("暂无".concat(e.text), "", "none");
                    },
                    closeLotteryResult: function() {
                        this.closeLottery = !1, this.autoCloseLotteryResultTip = !1, this.closeLotteryResultTipShowed = !1, 
                        this.autoCloseLotteryResultTipTimer && (clearTimeout(this.autoCloseLotteryResultTipTimer), 
                        this.autoCloseLotteryResultTipTimer = null);
                    },
                    gotoLocationHandle: function() {
                        t.openLocation({
                            latitude: parseFloat(this.baseDetail.y_axis),
                            longitude: parseFloat(this.baseDetail.x_axis),
                            name: this.baseDetail.name,
                            address: this.baseDetail.project_location || ""
                        });
                    },
                    gotoSubwayHandle: function(e) {
                        var n = this.subwayList[e];
                        n && t.openLocation({
                            latitude: parseFloat(n.y_axis),
                            longitude: parseFloat(n.x_axis),
                            name: "".concat(n.type, "号线").concat(n.station, "站")
                        });
                    },
                    changePkColor: function() {
                        this.baseDetail.pk || "object" === p(this.baseDetail.pk) ? this.baseDetail.pk = r.common.merge(this.baseDetail.pk, {
                            bg: "linear-gradient(52deg,rgba(255,142,92,1) 0%,rgba(255,84,49,1) 100%)"
                        }) : this.baseDetail.pk = {
                            bg: "linear-gradient(52deg,rgba(255,142,92,1) 0%,rgba(255,84,49,1) 100%)"
                        };
                    },
                    lotteryRemindHandle: function() {
                        var t = w(i.default.mark(function t() {
                            var e, n, o = this;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.baseDetail.remind = "1" === "".concat(this.baseDetail.remind) ? 2 : 1, 
                                    t.next = 3, s.default.getlotteryRemind(this.project_id);

                                  case 3:
                                    if (e = t.sent, 0 !== Math.floor(e.code)) {
                                        t.next = 22;
                                        break;
                                    }
                                    if (this.baseDetail.remind = e.data.status, 1 !== Math.floor(e.data.status)) {
                                        t.next = 19;
                                        break;
                                    }
                                    return t.next = 10, s.default.attentionServiceNumber();

                                  case 10:
                                    t.t0 = t.sent, t.next = 14;
                                    break;

                                  case 13:
                                    t.t0 = {
                                        data: !0
                                    };

                                  case 14:
                                    n = t.t0, this.btnStatus.attention = 1, n.data ? this.isResultedFlag ? r.tip.toast("设置成功", "", "none") : (this.alertShow = "1", 
                                    this.toastMsg = 0 !== this.baseDetail.type ? "关注成功" : "摇号提醒设置成功", this.followModelShow = !0, 
                                    this.followSuccessed = !0) : this.attentionServiceFlag = !0, t.next = 21;
                                    break;

                                  case 19:
                                    this.btnStatus.attention = 2, this.isResultedFlag ? r.tip.toast("取消成功", "", "none") : (this.alertShowFlag = !0, 
                                    this.toastMsg = 0 !== this.baseDetail.type ? "取消关注成功" : "摇号提醒取消成功", this.alertShow = "2");

                                  case 21:
                                    setTimeout(function() {
                                        o.alertShowFlag = !1, o.alertShow = "";
                                    }, 3e3);

                                  case 22:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    historyYaoToggleHandle: function() {
                        this.historyLotteryShow = !this.historyLotteryShow;
                    },
                    callPhoneSuccess: function() {
                        var t = w(i.default.mark(function t(e) {
                            var n;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.uiLayout.getAutoPhone(this.project_id, "");

                                  case 2:
                                    0 === (n = t.sent).code && e(n.data.phone);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    jumpToStatementList: function() {
                        this.isChengduCity ? t.navigateTo({
                            url: "/subPackages/news/pages/statement?lottery_id=".concat(this.id, "&project_id=").concat(this.project_id, "&title=").concat(this.baseDetail.name)
                        }) : t.navigateTo({
                            url: "/subPackages/news/pages/statement-not-cd?lottery_id=".concat(this.id, "&project_id=").concat(this.project_id, "&title=").concat(this.baseDetail.name)
                        });
                    },
                    gotoDynamicsHandle: function() {
                        this.dynamics.list.length > 0 ? this.jumpToStatementList() : t.navigateTo({
                            url: "/subPackages/news/pages/createStatement?lottery_id=".concat(this.id, "&project_id=").concat(this.project_id, "&project_name=").concat(this.baseDetail.name)
                        });
                    },
                    gotoPhotosHandle: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/photos?project_id=".concat(this.project_id, "&project_name=").concat(this.baseDetail.name)
                        });
                    },
                    toggleShareHandle: function(e) {
                        var n = e.currentTarget.dataset.toggle;
                        this.shareShow = "open" === n, t.navigateTo({
                            url: "/subPackages/tools/pages/canvasLotteryDetail?project_id=".concat(this.project_id, "&id=").concat(this.id, "&is_not_lottery=").concat(this.is_not_lottery, "&sales_man_id=").concat(this.salesManId)
                        });
                    },
                    saveQrcodeHandle: function() {
                        var e = w(i.default.mark(function e() {
                            var n = this;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.downloadFile({
                                        url: this.serviceQrCode,
                                        success: function(e) {
                                            t.saveImageToPhotosAlbum({
                                                filePath: e.tempFilePath,
                                                success: function() {
                                                    n.followModelShow = !1, r.tip.toast("保存成功");
                                                },
                                                fail: function() {
                                                    n.followModelShow = !1, r.tip.toast("保存失败");
                                                }
                                            });
                                        },
                                        fail: function() {
                                            n.followModelShow = !1;
                                        }
                                    });

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    previewImg: function(e) {
                        "string" == typeof e && "" !== e && t.previewImage({
                            urls: [ e ]
                        });
                    },
                    inputCommentVal: function(t) {
                        var e = t.detail.value;
                        this.commentInput.val = e.trim();
                    },
                    inputCommentFocus: function(t) {
                        this.fixedCommentBottom = t.detail && t.detail.height;
                    },
                    gotoSalesmanIM: function(t) {
                        var e = this.recommendSalesMan[t];
                        e && this.goChatPage(e.session_id);
                    },
                    goChatPage: function(e) {
                        e && t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(e, "&project_id=").concat(this.project_id, "&project_name=").concat(this.baseDetail.name, "&project_img=").concat(this.baseDetail.cover)
                        });
                    },
                    commentLike: function(t, e) {
                        s.default.projectCommentLike(t, e);
                    },
                    toggleCommentInput: function(t) {
                        this.showCommentInput = "display" === t, this.commentInput.val = "", this.commentInput.pid = "", 
                        this.commentInput.focus = "display" === t, this.fixedCommentBottom = 0;
                    },
                    submitComment: function() {
                        var e = w(i.default.mark(function e() {
                            var n, o, a, c;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (this.commentInput.val) {
                                        e.next = 6;
                                        break;
                                    }
                                    return this.commentInput.focus = !1, this.fixedCommentBottom = 0, this.showCommentInput = !1, 
                                    r.tip.toast("请输入评论内容", "", "none"), e.abrupt("return");

                                  case 6:
                                    return t.showLoading({
                                        title: "评论中..."
                                    }), e.next = 9, s.default.sendProjectComment({
                                        project_id: this.project_id,
                                        content: this.commentInput.val,
                                        pid: this.commentInput.pid,
                                        lottery_id: this.id
                                    });

                                  case 9:
                                    return n = e.sent, this.toggleCommentInput("hidden"), n && n.data && r.tip.toast("评论成功"), 
                                    e.next = 14, s.default.getProjectCommentList(this.project_id);

                                  case 14:
                                    o = e.sent, (a = o.data && o.data.data || []).forEach(function(t) {
                                        t.is_toggle = !1;
                                    }), c = (c = (c = (c = (c = o.data.comment).replace(/<\/?br\/?>/g, "\n")).replace(/<[^/>]+>/g, "")).replace(/<\/p>/g, "\n")).replace(/<[^>]+>/g, ""), 
                                    this.comments = {
                                        list: a,
                                        count: o.data.num,
                                        comment: c
                                    }, t.hideLoading();

                                  case 24:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    changeArticlesIndex: function() {
                        var t = w(i.default.mark(function t(e) {
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.articlesIndex = e;

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    discussionGroups: function(e, n, i) {
                        4 === Math.floor(n) ? t.navigateToMiniProgram({
                            appId: i,
                            path: e,
                            envVersion: "release",
                            fail: function() {}
                        }) : 1 === Math.floor(n) ? t.switchTab({
                            url: e
                        }) : t.navigateTo({
                            url: e
                        });
                    },
                    getLength: function(t) {
                        for (var e = 0, n = 0; n < t.length; n += 1) {
                            var i = t.substr(n, 1);
                            "%u" === escape(i).substring(0, 2) ? e += 2 : e += 1;
                        }
                        return e / 2;
                    },
                    queryLotteryNum: function() {
                        var t = this;
                        s.default.lotteryNum(this.project_id).then(function(e) {
                            if (e && Array.isArray(e.data) && e.data.length > 0) if (t.lotteryNum = e.data, 
                            t.id) {
                                for (var n = !1, i = 0; i < t.lotteryNum.length; i += 1) if (t.lotteryNum[i].id.toString() === t.id.toString()) {
                                    t.lotteryIndex = i, t.scrollIndex = "scroll".concat(i), n = !0;
                                    break;
                                }
                                n || (t.lotteryIndex = 0, t.scrollIndex = "scroll".concat(0), t.id = t.lotteryNum[0].id, 
                                t.lotteryDataLoad(t.id));
                            } else t.lotteryIndex = 0, t.scrollIndex = "scroll".concat(0), t.id = t.lotteryNum[0].id, 
                            t.lotteryDataLoad(t.id);
                        });
                    },
                    onPageScroll: function(t) {
                        var e = t.scrollTop;
                        e > 32 ? (this.pageScroll = !0, this.$refs.busiNavHeader.setWhiteMode()) : (this.pageScroll = !1, 
                        this.$refs.busiNavHeader.setTransparentMode()), this.backTopShow = e > 300, this.$refs.busiShareIcon.pageScroll(t);
                    },
                    changeAttention: function() {
                        var t = this;
                        s.default.getBtnStatus(this.id, this.project_id).then(function(e) {
                            e && e.data && (t.btnStatus = e.data);
                        });
                    },
                    pageInit: function(t) {
                        this.u_id = t.u_id || "", this.s_id = t.s_id || 0, this.project_id = t.project_id, 
                        this.id = this.id || ("0" === t.id ? 0 : t.id), this.sales_man_id = t.sales_man_id || "", 
                        this.union_sales_man_id = t.union_sales_man_id || "", this.is_not_lottery = t.is_not_lottery || "", 
                        j = t.type || 0, this.isFromSalesUnion = String(t.isFromSalesUnion) || "0", this.navigateBack = t.navigateBack || "";
                    },
                    goUserPage: function() {
                        var e = w(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (Math.floor(this.union_sales_man_id) && this.unionSalesmanInfo.session_id) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 2:
                                    t.navigateTo({
                                        url: "".concat(this.jumpUrl).concat(this.unionSalesmanInfo.session_id)
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    hideReportTip: function() {
                        var t = this;
                        this.reportHideTip = !0, this.$nextTick(function() {
                            t.reportHideTip = !1;
                        });
                    },
                    navigateToAerialPage: function() {
                        var e = encodeURIComponent(this.swiperList.aerial_view_url), n = "/pages/webview2?redirect=".concat(e);
                        t.navigateTo({
                            url: n
                        });
                    },
                    handleComment: function() {
                        var e = this.project_id, n = this.baseDetail, i = this.id, o = this.isSaleMan, a = this.comments;
                        t.navigateTo({
                            url: "/subPackages/tools/pages/commentInp?project_id=".concat(e, "&title=").concat(n.name, "&lottery_id").concat(i, "&isSalesMan=").concat(o ? "1" : "0", "&comment=").concat(a.comment)
                        });
                    },
                    toReport: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/reportType?type=5&id=".concat(this.project_id)
                        });
                    }
                })
            };
            e.default = I;
        }).call(this, n("543d").default);
    }
}, [ [ "5d33", "common/runtime", "common/vendor" ] ] ]);