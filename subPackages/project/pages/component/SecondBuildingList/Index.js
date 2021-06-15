require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/component/SecondBuildingList/Index" ], {
    "1b24": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = s(n("a34a")), i = s(n("4ec3")), r = s(n("2a36")), o = n("ca00");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        l(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function h(t, e, n, a, i, r, o) {
                try {
                    var s = t[r](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, i);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function o(t) {
                            h(r, a, i, o, s, "next", t);
                        }
                        function s(t) {
                            h(r, a, i, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = [ "即将预售", "最新摇号", "摇号剩余", "最新取证", "最新销许", "正在公示", "正在登记" ], p = [ "willLottery", "lastestYao", "remanentYao", "lastestQZ", "lastestXX", "nowQS", "nowDJ" ], b = {
                "即将预售": "home_pay_project",
                "最新摇号": "home_will_lottery",
                "摇号剩余": "home_remanent_yao",
                "最新取证": "home_lastest_qz",
                "最新销许": "home_lastest_xx",
                "正在公示": "home_new_gs",
                "正在登记": "home_new_dj",
                "热门楼盘": "home_hot_project",
                "已摇号": "home_end_lottery"
            }, g = {
                "即将预售": "payProject",
                "最新摇号": "willLottery",
                "摇号剩余": "noNeedLottery",
                "最新取证": "latestRegular",
                "最新销许": "latestRegular",
                "正在公示": "latestOpening",
                "正在登记": "registering",
                "热门楼盘": "popularProject",
                "已摇号": ""
            }, m = new Array(4).fill({
                skeletons: !0
            }), v = {
                components: {
                    BusiSearch: function() {
                        n.e("components/UILayout/BusiSearch").then(function() {
                            return resolve(n("5f00"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Loading: function() {
                        n.e("subPackages/project/pages/component/SecondBuildingList/Loading").then(function() {
                            return resolve(n("ab15"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ProjectItem: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseFilters: function() {
                        n.e("components/BaseFilters/Index").then(function() {
                            return resolve(n("9a4c"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseBanner: function() {
                        n.e("components/BaseBanner").then(function() {
                            return resolve(n("01c8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSearchSwiper: function() {
                        n.e("pages/components/BusiSearchSwiper").then(function() {
                            return resolve(n("ef31"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r.default ],
                props: {
                    hideFilter: {
                        type: Boolean,
                        default: !1
                    },
                    buttonType: {
                        type: String,
                        default: "search"
                    },
                    tabList: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    showIndex: {
                        type: Boolean,
                        default: !1
                    },
                    searchType: {
                        type: String,
                        default: ""
                    },
                    baseParam: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    showMapEntry: {
                        type: Boolean,
                        default: !1
                    },
                    rankFlag: {
                        type: Boolean,
                        default: !1
                    },
                    sourcePosition: {
                        type: String,
                        default: ""
                    },
                    adSource: {
                        type: String,
                        default: ""
                    },
                    adType: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return this.observeInstance = null, {
                        searchParam: "/subPackages/search/pages/index?searchType=".concat((0, o.filterPageType)(this.searchType)),
                        filterFixed: !1,
                        activeTab: 1,
                        noSearch: !0,
                        showSelect: !1,
                        midInputPlace: "",
                        searchData: "",
                        type: "",
                        title: "",
                        bannerList: {
                            list: [ {} ],
                            config: {}
                        },
                        lotteries: m,
                        page: 1,
                        more: !0,
                        loading: !0,
                        squareSpecialShow: !0,
                        tabParam: {},
                        params: {},
                        updating: !1,
                        contentIntroTxt: "",
                        iShowIntroObj: {
                            0: !1,
                            1: !1,
                            2: !1,
                            3: !1,
                            4: !1,
                            5: !1,
                            6: !1
                        },
                        bannerType: 0,
                        content: "",
                        source: "",
                        hotSearchList: {
                            list: [],
                            config: {}
                        },
                        bannerLoading: !0
                    };
                },
                computed: {
                    iShowIntro: function() {
                        var t = this, e = f.findIndex(function(e) {
                            return e === t.title;
                        });
                        return -1 !== e && this.iShowIntroObj[e];
                    },
                    bannerContent: function() {
                        return (0, o.bannerContentType)(this.bannerType);
                    },
                    inputPlace: function() {
                        return this.midInputPlace;
                    }
                },
                created: function() {
                    this.searchData = "/subPackages/search/pages/index?searchType=".concat((0, o.filterPageType)(this.searchType));
                },
                beforeDestroy: function() {
                    this.observeInstance && (this.observeInstance.disconnect(), this.observeInstance = null);
                },
                mounted: function() {
                    this.initPage(), this.setProjectItemContent(), this.setProjectItemSource();
                },
                methods: {
                    stopHandle: function() {},
                    hiddenFilterHandle: function() {
                        this.tabbarListIndex = -1;
                    },
                    initPage: function() {
                        var e = this.$parent, n = e.title, a = e.type;
                        t.setNavigationBarTitle({
                            title: "杭州房小团-".concat(n)
                        }), this.title = n, this.type = a, this.getShowIntro(), this.reload(!0);
                    },
                    setProjectItemContent: function() {
                        this.content = b[this.title] || "home_not_defined";
                    },
                    setProjectItemSource: function() {
                        this.source = g[this.title] || "";
                    },
                    filterOutput: function(t) {
                        this.submitFilters(), this.hiddenFilterHandle(), this.showSelect = !1, this.paramMeddle(t), 
                        this.loadNext();
                    },
                    handleReachBottom: function() {
                        this.more && !this.loading && this.loadNext();
                    },
                    stopRefresh: function() {
                        this.observeInstance && (this.observeInstance.disconnect(), this.observeInstance = null), 
                        this.reload(!0, !1), t.stopPullDownRefresh(), (this.bannerList.list && this.bannerList.list.length > 0 || this.iShowIntro) && this.observeNode();
                    },
                    swiperNavHandle: function(t) {
                        (0, o.pageJump)(t);
                    },
                    sharePage: function() {},
                    clickHook: function() {
                        this.showSelect = !0;
                    },
                    hideHook: function() {
                        this.showSelect = !1;
                    },
                    resetOutput: function() {
                        this.resetFilters(), this.initFilterData(), this.reload();
                    },
                    getShowIntro: function() {
                        var e = this, n = f.findIndex(function(t) {
                            return t === e.title;
                        });
                        if (-1 !== n) try {
                            var a = t.getStorageSync("show-intro-".concat(p[n]));
                            "boolean" == typeof a ? this.$set(this.iShowIntroObj, n, a) : (this.$set(this.iShowIntroObj, n, !0), 
                            t.setStorage({
                                key: "show-intro-".concat(p[n]),
                                data: !0
                            }));
                        } catch (t) {
                            this.$set(this.iShowIntroObj, n, !0);
                        }
                    },
                    closedIntro: function() {
                        var e = this, n = f.findIndex(function(t) {
                            return t === e.title;
                        });
                        this.$set(this.iShowIntroObj, n, !1), t.setStorage({
                            key: "show-intro-".concat(p[n]),
                            data: !1
                        });
                    },
                    handleJumpToMap: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/mapLookHouse?tabType=".concat(this.baseParam.type)
                        });
                    },
                    handleTabChange: function() {
                        var t = d(a.default.mark(function t(e) {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.activeTab = this.tabList[e] && this.tabList[e].id, this.tabParam = {}, this.tabList[e].param && (this.tabParam = u({}, this.tabList[e].param)), 
                                    this.page = 1, this.more = !0, this.lotteries = [], this.loadNext();

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getContentIntroTxt: function() {
                        var t = this, e = f.findIndex(function(e) {
                            return e === t.title;
                        });
                        -1 !== e && (this.contentIntroTxt = {
                            0: "即将预售：近期将会取得预售许可证的楼盘，取证后进入公示期",
                            1: "最新摇号：已摇号完成或报名结束后等待摇号的楼盘",
                            5: "正在公示：正处于公示期的楼盘，公示结束后才可登记报名",
                            6: "正在登记：今日可登记楼盘，每天上午9点数据更新"
                        }[e]);
                    },
                    paramMeddle: function(t) {
                        var e = this;
                        this.page = 1, this.more = !0, this.loading = !1, this.lotteries = [], this.params = {}, 
                        Object.keys(t).forEach(function(n) {
                            t[n] && (e.params[n] = t[n]);
                        }), t.priceSort && (this.params.order = "desc" === t.priceSort ? "price_desc" : "price_asc"), 
                        t.circle_id && (delete this.params.circle_id, this.params.biz_circle_id = t.circle_id);
                    },
                    reload: function(t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.page = 1, e && (this.params = {}), this.loading = !0, this.lotteries = m, this.more = !0, 
                        this.loadNext(t), this.bannerList = [ {
                            list: [ {} ],
                            config: {}
                        } ], this.queryBanner(this.title), this.querySearchAd();
                    },
                    querySearchAd: function() {
                        var t = this;
                        i.default.getBanner("search--search").then(function(e) {
                            e && e.data && e.data.list && (t.midInputPlace = e.data.list.length > 0 && e.data.list[0].text || "", 
                            t.hotSearchList = e.data);
                        });
                    },
                    mapListMethod: function(t) {
                        var e = {
                            hotRecommend: {
                                func: i.default.getBannerProjectList,
                                params: {
                                    page: this.page
                                }
                            },
                            default: {
                                func: i.default.search.projectSearch,
                                params: u(u(u(u(u({}, this.params), this.baseParam), this.tabParam), this.params), {}, {
                                    page: this.page,
                                    keyword: ""
                                })
                            }
                        };
                        return e[t] || e.default;
                    },
                    loadNext: function() {
                        var t = this;
                        this.getContentIntroTxt(), this.loading = !0;
                        var e = this.baseParam.type, n = {}, a = this.mapListMethod(e);
                        (0, a.func)(a.params).then(function(a) {
                            if (t.loading = !1, n = a, "hotRecommend" === e && n.data && (n.data.data = n.data.list || []), 
                            n.data) {
                                var i = n.data ? n.data.data : [];
                                t.lotteries = t.lotteries.concat(i).filter(function(t) {
                                    return !t.skeletons;
                                }), t.page >= n.data.last_page || !n.data.last_page ? t.more = !1 : t.page += 1;
                            }
                        });
                    },
                    queryBanner: function() {
                        var t = d(a.default.mark(function t(e) {
                            var n, r, s = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = (0, o.filterBannerType)(e), r = (0, o.filterNewBannerCode)(e), this.bannerType = n, 
                                    0 !== n || "最新销许" === this.title) {
                                        t.next = 7;
                                        break;
                                    }
                                    return this.filterFixed = !0, this.bannerLoading = !1, t.abrupt("return");

                                  case 7:
                                    if (r) {
                                        t.next = 10;
                                        break;
                                    }
                                    return this.bannerLoading = !1, t.abrupt("return");

                                  case 10:
                                    this.bannerLoading = !0, i.default.getBanner(r).then(function(t) {
                                        s.bannerLoading = !1, 0 === t.code && (s.bannerList = t.data || {}, t.data && 0 !== t.data.list.length || s.iShowIntro || (s.filterFixed = !0), 
                                        (s.bannerList.list && s.bannerList.list.length > 0 || s.iShowIntro) && s.observeNode());
                                    });

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    observeNode: function() {
                        var t = this;
                        this.observeInstance = this.createIntersectionObserver(), this.observeInstance.relativeToViewport({
                            top: -50
                        }).observe("#observe-node", function(e) {
                            t.filterFixed = 0 === e.intersectionRatio;
                        });
                    }
                }
            };
            e.default = v;
        }).call(this, n("543d").default);
    },
    "3bed": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("d145"), i = n("7a36");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("7fb6");
        var o = n("f0c5"), s = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "7a36": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("1b24"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    "7fb6": function(t, e, n) {
        "use strict";
        var a = n("f69d");
        n.n(a).a;
    },
    d145: function(t, e, n) {
        "use strict";
        var a = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, i = function() {
            var t = this, e = (t.$createElement, t._self._c, {
                dataName: t.title + "-搜索框"
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e
                }
            });
        }, r = [];
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
    },
    f69d: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "subPackages/project/pages/component/SecondBuildingList/Index-create-component", {
    "subPackages/project/pages/component/SecondBuildingList/Index-create-component": function(t, e, n) {
        n("543d").createComponent(n("3bed"));
    }
}, [ [ "subPackages/project/pages/component/SecondBuildingList/Index-create-component" ] ] ]);