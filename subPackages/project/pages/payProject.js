require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/payProject" ], {
    "04b0": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("1c79"), i = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    "1c79": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = c(n("a34a")), i = n("b628"), r = c(n("4ec3")), o = c(n("8da8")), s = n("ca00");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
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
            function d(t, e, n, a, i, r, o) {
                try {
                    var s = t[r](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, i);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function o(t) {
                            d(r, a, i, o, s, "next", t);
                        }
                        function s(t) {
                            d(r, a, i, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var p = [ "即将预售", "最新摇号", "摇号剩余", "最新取证", "最新销许", "正在公示", "正在登记" ], b = [ "willLottery", "lastestYao", "remanentYao", "lastestQZ", "lastestXX", "nowQS", "nowDJ" ], m = {
                "即将预售": "home_pay_project"
            }, g = {
                "即将预售": "payProject"
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
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ o.default ],
                data: function() {
                    return this.observeInstance = null, {
                        type: "",
                        title: "",
                        buttonType: "share",
                        showMapEntry: !1,
                        baseParam: {
                            type: "isNear"
                        },
                        searchType: "即将预售",
                        adType: "order",
                        adSource: "payProject",
                        searchParam: "/subPackages/search/pages/index?searchType=".concat((0, s.filterPageType)(this.searchType)),
                        filterFixed: !1,
                        activeTab: 1,
                        noSearch: !0,
                        showSelect: !1,
                        midInputPlace: "",
                        searchData: "",
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
                            0: !1
                        },
                        bannerType: 0,
                        content: "",
                        source: "",
                        hotSearchList: {
                            list: [],
                            config: {}
                        },
                        bannerLoading: !0,
                        status: 0,
                        statusMap: {
                            0: {
                                text: "上新及时通知我",
                                image: "https://imgcdn.huanjutang.com/assets/img/2021331114348081.png",
                                tip: "上新提醒开启"
                            },
                            1: {
                                text: "已开启上新提醒",
                                image: "https://imgcdn.huanjutang.com/assets/img/20213311142318081.png",
                                tip: "上新提醒关闭"
                            }
                        },
                        defaultSort: ""
                    };
                },
                computed: {
                    iShowIntro: function() {
                        var t = this, e = p.findIndex(function(e) {
                            return e === t.title;
                        });
                        return -1 !== e && this.iShowIntroObj[e];
                    },
                    bannerContent: function() {
                        return (0, s.bannerContentType)(this.bannerType);
                    },
                    inputPlace: function() {
                        return this.midInputPlace;
                    }
                },
                watch: {
                    "sortsList.data": {
                        handler: function() {
                            this.defaultSort && this.setSort(this.defaultSort);
                        }
                    }
                },
                created: function() {
                    this.searchData = "/subPackages/search/pages/index?searchType=".concat((0, s.filterPageType)(this.searchType));
                },
                beforeDestroy: function() {
                    this.observeInstance && (this.observeInstance.disconnect(), this.observeInstance = null);
                },
                onShareAppMessage: function() {
                    return i.share.share("这里有所有【 ".concat(this.title || "", " 】的楼盘详情，再也不用到处去找啦,快来看看吧！"));
                },
                onReachBottom: function() {
                    this.handleReachBottom();
                },
                onPullDownRefresh: function() {
                    this.stopRefresh();
                },
                onLoad: function() {
                    var t = f(a.default.mark(function t(e) {
                        var n, i;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n = e.type, i = decodeURIComponent(e.title) || "即将预售", this.title = i, this.type = n, 
                                e.order && (this.params.order = e.order, this.defaultSort = e.order), this.initPage(), 
                                this.setProjectItemContent(), this.setProjectItemSource();

                              case 9:
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
                        var e = this.title, n = this.type;
                        t.setNavigationBarTitle({
                            title: "杭州房小团-".concat(e)
                        }), this.title = e, this.type = n, this.getShowIntro(), this.reload(!0, !1);
                    },
                    setProjectItemContent: function() {
                        this.content = m[this.title] || "home_not_defined";
                    },
                    setProjectItemSource: function() {
                        this.source = g[this.title] || "";
                    },
                    setSort: function(t) {
                        this.defaultSort = "";
                        var e = this.sortsList.data.findIndex(function(e) {
                            return e.value === t;
                        });
                        e < 0 || (this.$set(this.tabbarList[4], "isSelected", !0), this.$set(this.tabbarList[4], "selectedLen", 1), 
                        this.$refs.baseFilters.setParams("sortFilter", {
                            order: t
                        }), this.setSortsListIndexHandler(e));
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
                        (0, s.pageJump)(t);
                    },
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
                            var a = t.getStorageSync("show-intro-".concat(b[n]));
                            "boolean" == typeof a ? this.$set(this.iShowIntroObj, n, a) : (this.$set(this.iShowIntroObj, n, !0), 
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
                    getContentIntroTxt: function() {
                        var t = this, e = p.findIndex(function(e) {
                            return e === t.title;
                        });
                        -1 !== e && (this.contentIntroTxt = {
                            0: "即将预售：近期将会取得预售许可证的楼盘，取证后进入公示期"
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
                        this.page = 1, e && (this.params = {}), this.loading = !0, this.lotteries = v, this.more = !0, 
                        this.loadNext(t), this.bannerList = [ {
                            list: [ {} ],
                            config: {}
                        } ], this.queryBanner(this.title), this.querySearchAd(), this.querySubscribeStatus();
                    },
                    querySubscribeStatus: function() {
                        var t = this;
                        r.default.preSaleStatus().then(function(e) {
                            0 === e.code && (e.data && 0 === e.data.length && (t.status = 0), e.data && e.data.length > 0 && (t.status = 1));
                        });
                    },
                    subscribe: function() {
                        var e = this;
                        t.showLoading(), r.default.subscribePreSale(0 === this.status ? 1 : 0).then(function(n) {
                            t.hideLoading(), 0 === n.code && (t.showToast({
                                title: "".concat(e.statusMap[e.status].tip),
                                icon: "none"
                            }), e.querySubscribeStatus());
                        });
                    },
                    querySearchAd: function() {
                        var t = this;
                        r.default.getBanner("search--search").then(function(e) {
                            e && e.data && e.data.list && (t.midInputPlace = e.data.list.length > 0 && e.data.list[0].text || "", 
                            t.hotSearchList = e.data);
                        });
                    },
                    mapListMethod: function(t) {
                        var e = {
                            hotRecommend: {
                                func: r.default.getBannerProjectList,
                                params: {
                                    page: this.page
                                }
                            },
                            default: {
                                func: r.default.search.projectSearch,
                                params: h(h(h(h(h({}, this.params), this.baseParam), this.tabParam), this.params), {}, {
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
                        var t = f(a.default.mark(function t(e) {
                            var n, i, o = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = (0, s.filterBannerType)(e), i = (0, s.filterNewBannerCode)(e), this.bannerType = n, 
                                    0 !== n || "最新销许" === this.title) {
                                        t.next = 7;
                                        break;
                                    }
                                    return this.filterFixed = !0, this.bannerLoading = !1, t.abrupt("return");

                                  case 7:
                                    if (i) {
                                        t.next = 10;
                                        break;
                                    }
                                    return this.bannerLoading = !1, t.abrupt("return");

                                  case 10:
                                    this.bannerLoading = !0, r.default.getBanner(i).then(function(t) {
                                        o.bannerLoading = !1, 0 === t.code && (o.bannerList = t.data || {}, t.data && 0 !== t.data.list.length || o.iShowIntro || (o.filterFixed = !0), 
                                        (o.bannerList.list && o.bannerList.list.length > 0 || o.iShowIntro) && o.observeNode());
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
            e.default = y;
        }).call(this, n("543d").default);
    },
    "6e13": function(t, e, n) {
        "use strict";
        var a = n("d7e0");
        n.n(a).a;
    },
    "7ac1": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ca4f"), i = n("04b0");
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("6e13"), n("fe18");
        var o = n("f0c5"), s = Object(o.a)(i.default, a.b, a.c, !1, null, "67ce5494", null, !1, a.a, void 0);
        e.default = s.exports;
    },
    bdf0: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7ac1")).default);
        }).call(this, n("543d").createPage);
    },
    ca4f: function(t, e, n) {
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
    d7e0: function(t, e, n) {},
    f373: function(t, e, n) {},
    fe18: function(t, e, n) {
        "use strict";
        var a = n("f373");
        n.n(a).a;
    }
}, [ [ "bdf0", "common/runtime", "common/vendor", "subPackages/project/common/vendor" ] ] ]);