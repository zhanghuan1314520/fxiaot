require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/popularProject" ], {
    "21af": function(t, e, n) {},
    4479: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("9bdb"), a = n("7427");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("e207");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    7427: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("bbca"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    "9bdb": function(t, e, n) {
        "use strict";
        var r = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, a = function() {
            var t = this, e = (t.$createElement, t._self._c, {
                dataName: t.title + "-搜索框"
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e
                }
            });
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
    },
    bbca: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = c(n("a34a")), a = c(n("4ec3")), i = c(n("6298")), o = n("ca00"), s = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        l(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
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
            function d(t, e, n, r, a, i, o) {
                try {
                    var s = t[i](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            d(i, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            d(i, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var p = [ "即将预售", "最新摇号", "摇号剩余", "最新取证", "最新销许", "正在公示", "正在登记" ], b = [ "willLottery", "lastestYao", "remanentYao", "lastestQZ", "lastestXX", "nowQS", "nowDJ" ], m = {
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
            }, v = new Array(4).fill({
                skeletons: !0
            }), y = {
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
                mixins: [ i.default ],
                data: function() {
                    return {
                        type: "",
                        title: "",
                        showIndex: !0,
                        buttonType: "share",
                        baseParam: {
                            type: "hotNum",
                            areaId: ""
                        },
                        tabList: [ {
                            id: 1,
                            content: "热门榜",
                            desc: "根据楼盘实时热度数据进行排序",
                            param: {
                                type: "hotNum"
                            }
                        }, {
                            id: 2,
                            content: "人气榜",
                            desc: "根据30内楼盘活跃度排序",
                            param: {
                                type: "popularity"
                            }
                        }, {
                            id: 3,
                            content: "访问榜",
                            desc: "根据楼盘30天内的浏览量排序",
                            param: {
                                type: "views"
                            }
                        }, {
                            id: 4,
                            content: "热评榜",
                            desc: "根据楼盘30天内的评论量排序",
                            param: {
                                type: "commentNum"
                            }
                        } ],
                        searchStyle: {
                            background: "#F5F5F5"
                        },
                        filterFixed: !1,
                        activeTab: 1,
                        noSearch: !0,
                        showSelect: !1,
                        midInputPlace: "",
                        inputVal: "",
                        bannerList: {
                            list: [ {} ],
                            config: {}
                        },
                        lotteries: v,
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
                        searchType: "热门楼盘",
                        source: "",
                        hotSearchList: {
                            list: [],
                            config: {}
                        },
                        bannerLoading: !0
                    };
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    },
                    searchParam: function() {
                        return "/subPackages/search/pages/index?searchType=".concat((0, o.filterPageType)(this.searchType));
                    },
                    iShowIntro: function() {
                        var t = this, e = p.findIndex(function(e) {
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
                beforeDestroy: function() {
                    this.observeInstance && (this.observeInstance.disconnect(), this.observeInstance = null);
                },
                mounted: function() {
                    this.initPage(), this.setProjectItemContent(), this.setProjectItemSource();
                },
                created: function() {
                    this.searchData = "/subPackages/search/pages/index?searchType=".concat((0, o.filterPageType)(this.searchType));
                },
                onShareAppMessage: function() {
                    return s.share.share("这里有所有【 ".concat(this.title || "", " 】的楼盘详情，再也不用到处去找啦,快来看看吧！"));
                },
                onReachBottom: function() {
                    this.handleReachBottom();
                },
                onPullDownRefresh: function() {
                    this.stopRefresh();
                },
                onLoad: function() {
                    var t = f(r.default.mark(function t(e) {
                        var n, a, i;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n = e.type, a = e.area_id, i = decodeURIComponent(e.title) || "热门楼盘", this.title = i, 
                                this.type = n, this.rankFlag = !!a, this.baseParam.areaId = a;

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    stopHandle: function() {},
                    hiddenFilterHandle: function() {
                        this.tabbarListIndex = -1;
                    },
                    initPage: function() {
                        var e = this.title;
                        t.setNavigationBarTitle({
                            title: "杭州房小团-".concat(e)
                        }), this.getShowIntro(), this.reload(!0);
                    },
                    setProjectItemContent: function() {
                        this.content = m[this.title] || "home_not_defined";
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
                        var e = this, n = p.findIndex(function(t) {
                            return t === e.title;
                        });
                        if (-1 !== n) try {
                            var r = t.getStorageSync("show-intro-".concat(b[n]));
                            "boolean" == typeof r ? this.$set(this.iShowIntroObj, n, r) : (this.$set(this.iShowIntroObj, n, !0), 
                            t.setStorage({
                                key: "show-intro-".concat(b[n]),
                                data: !0
                            }));
                        } catch (t) {
                            this.$set(this.iShowIntroObj, n, !0);
                        }
                    },
                    closedIntro: function() {
                        var e = this, n = p.findIndex(function(t) {
                            return t === e.title;
                        });
                        this.$set(this.iShowIntroObj, n, !1), t.setStorage({
                            key: "show-intro-".concat(b[n]),
                            data: !1
                        });
                    },
                    handleJumpToMap: function() {
                        t.navigateTo({
                            url: "/subPackages/project/pages/mapLookHouse?tabType=".concat(this.baseParam.type)
                        });
                    },
                    handleTabChange: function() {
                        var t = f(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.activeTab = this.tabList[e] && this.tabList[e].id, this.tabParam = {}, this.tabList[e].param && (this.tabParam = h({}, this.tabList[e].param)), 
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
                        var t = this, e = p.findIndex(function(e) {
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
                    reload: function() {
                        var t = f(r.default.mark(function t(e) {
                            var n, a = arguments;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n = !(a.length > 1 && void 0 !== a[1]) || a[1], this.page = 1, n && (this.params = {}), 
                                    this.inputVal = "", this.loading = !0, this.lotteries = v, this.more = !0, this.loadNext(e), 
                                    this.bannerList = [ {
                                        list: [],
                                        config: {}
                                    } ], this.queryBanner(this.title), this.querySearchAd();

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    querySearchAd: function() {
                        var t = this;
                        a.default.getBanner("search--search").then(function(e) {
                            e && e.data && e.data.list && (t.midInputPlace = e.data.list.length > 0 && e.data.list[0].text || "", 
                            t.hotSearchList = e.data);
                        });
                    },
                    loadNext: function() {
                        var t = this;
                        this.getContentIntroTxt(), this.loading = !0, a.default.search.projectSearch(h(h(h(h(h({}, this.params), this.baseParam), this.tabParam), this.params), {}, {
                            page: this.page,
                            keyword: ""
                        })).then(function(e) {
                            if (t.loading = !1, e.data) {
                                var n = e.data ? e.data.data : [];
                                t.lotteries = t.lotteries.concat(n).filter(function(t) {
                                    return !t.skeletons;
                                }), t.page >= e.data.last_page || !e.data.last_page ? t.more = !1 : t.page += 1;
                            }
                        });
                    },
                    queryBanner: function() {
                        var t = f(r.default.mark(function t(e) {
                            var n, i = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = (0, o.filterBannerType)(e), this.bannerType = n, 0 !== n || "最新销许" === this.title) {
                                        t.next = 6;
                                        break;
                                    }
                                    return this.filterFixed = !0, this.bannerLoading = !1, t.abrupt("return");

                                  case 6:
                                    this.bannerLoading = !0, a.default.getBanner("popularProject--banner").then(function(t) {
                                        i.bannerLoading = !1, 0 === t.code && (i.bannerList = t.data || {
                                            list: [],
                                            config: {}
                                        }, t.data && 0 !== t.data.list.length || i.iShowIntro || (i.filterFixed = !0), (i.bannerList.list && i.bannerList.list.length > 0 || i.iShowIntro) && i.observeNode());
                                    });

                                  case 8:
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
                        var e = this;
                        this.observeInstance = t.createIntersectionObserver(this), this.observeInstance.relativeToViewport({
                            top: -50
                        }).observe("#observe-node", function(t) {
                            e.filterFixed = 0 === t.intersectionRatio;
                        });
                    }
                }
            };
            e.default = y;
        }).call(this, n("543d").default);
    },
    e207: function(t, e, n) {
        "use strict";
        var r = n("21af");
        n.n(r).a;
    },
    f6aa: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("4479")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f6aa", "common/runtime", "common/vendor", "subPackages/project/common/vendor" ] ] ]);