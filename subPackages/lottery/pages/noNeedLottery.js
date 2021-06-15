require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/noNeedLottery" ], {
    "074c": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("5bcd")).default);
        }).call(this, n("543d").createPage);
    },
    "40a4": function(e, t, n) {
        "use strict";
        var a = n("c41d");
        n.n(a).a;
    },
    "5bcd": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("da87"), r = n("f696");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("40a4");
        var o = n("f0c5"), c = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = c.exports;
    },
    "8b37": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = l(n("4766")), r = l(n("edfa")), i = l(n("619e")), o = n("ca00"), c = n("b628"), s = l(n("4ec3"));
            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        h(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var f = null, p = new Array(4).fill({
                skeletons: !0
            }), b = {
                components: {
                    BusiSearch: function() {
                        n.e("components/UILayout/BusiSearch").then(function() {
                            return resolve(n("5f00"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseBanner: function() {
                        n.e("components/BaseBanner").then(function() {
                            return resolve(n("01c8"));
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
                    BusiSearchSwiper: function() {
                        n.e("pages/components/BusiSearchSwiper").then(function() {
                            return resolve(n("ef31"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ a.default, r.default, i.default ],
                data: function() {
                    return {
                        searchData: "",
                        filterFixed: !1,
                        noSearch: !0,
                        menuIndex: 0,
                        showSelect: !1,
                        params: {},
                        inputVal: "",
                        midInputPlace: "",
                        page: 1,
                        more: !0,
                        loading: !1,
                        projects: p,
                        location: "",
                        bannerList: {
                            list: [ {} ],
                            config: {}
                        },
                        bannerFixedFlag: !1,
                        iShowIntro: !1,
                        introStr: "",
                        bannerType: 0,
                        hotSearchList: {
                            list: [],
                            config: {}
                        },
                        bannerLoading: !0
                    };
                },
                onUnload: function() {
                    f && (f.disconnect(), f = null);
                },
                onShareAppMessage: function() {
                    return c.share.share("这里有所有的摇号剩余的楼盘，再也不用到处去找啦");
                },
                onReachBottom: function() {
                    this.more && !this.loading && this.loadNext();
                },
                onPullDownRefresh: function() {
                    f && (f.disconnect(), f = null), this.reload(!1), e.stopPullDownRefresh(), (this.bannerList.list && this.bannerList.list.length > 0 || this.iShowIntro) && this.observeNode();
                },
                onLoad: function() {
                    this.introStr = "无需摇号：选房结束后有剩余可售房源的楼盘", this.searchData = "/subPackages/search/pages/index?searchType=".concat((0, 
                    o.filterPageType)(this.navBarTitle));
                    try {
                        var t = e.getStorageSync("show-intro-noNeedLottery");
                        "boolean" == typeof t ? this.iShowIntro = t : (this.iShowIntro = !0, e.setStorage({
                            key: "show-intro-noNeedLottery",
                            data: !0
                        }));
                    } catch (e) {
                        this.iShowIntro = !0;
                    }
                    e.setNavigationBarTitle({
                        title: "杭州房小团-".concat(this.navBarTitle)
                    }), this.reload();
                },
                computed: {
                    bannerContent: function() {
                        return (0, o.bannerContentType)(this.bannerType);
                    },
                    inputPlace: function() {
                        return this.midInputPlace;
                    }
                },
                methods: {
                    stopHandle: function() {},
                    hiddenFilterHandle: function() {
                        this.tabbarListIndex = -1;
                    },
                    sharePage: function() {},
                    closedIntro: function() {
                        this.iShowIntro = !1, e.setStorage({
                            key: "show-intro-noNeedLottery",
                            data: !1
                        });
                    },
                    handleJumpToMap: function() {
                        e.navigateTo({
                            url: "/subPackages/project/pages/mapLookHouse?tabType=".concat(this.baseParams.type)
                        });
                    },
                    toCommentHandle: function(t) {
                        var n = t.currentTarget.dataset.item;
                        e.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(n.project_id || n.id, "&project_name=").concat(n.name, "&lottery_id=").concat(n.id)
                        });
                    },
                    sendAnalysisHandle: function() {},
                    swiperNavHandle: function(e) {
                        (0, o.pageJump)(e);
                    },
                    filterReset: function(e) {
                        this.paramMeddle(e), this.loadNext();
                    },
                    filterClick: function() {
                        this.showSelect = !0;
                    },
                    filterHideClick: function() {
                        this.showSelect = !1;
                    },
                    submitHandle: function(e) {
                        this.submitFilters(), this.hiddenFilterHandle(), this.showSelect = !1, this.paramMeddle(e), 
                        this.loadNext();
                    },
                    onFilterReset: function() {
                        this.resetFilters(), this.initFilterData(), this.reload();
                    },
                    sendFromID: function(e) {
                        s.default.sendFromID(e).then(function() {});
                    },
                    filtersData: function() {},
                    paramMeddle: function(e) {
                        var t = this;
                        this.page = 1, this.more = !0, this.loading = !1, this.projects = [], this.params = {}, 
                        Object.keys(e).forEach(function(n) {
                            e[n] && (t.params[n] = e[n]);
                        }), e.priceSort && (this.params.order = "desc" === e.priceSort ? "price_desc" : "price_asc"), 
                        e.circle_id && (delete this.params.circle_id, this.params.biz_circle_id = e.circle_id);
                    },
                    reload: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.hiddenFilterHandle(), this.page = 1, this.more = !0, this.projects = p, this.bannerList = {
                            list: [ {} ],
                            config: {}
                        }, e && (this.params = {}), this.loadNext(), this.queryBanner(this.navBarTitle), 
                        this.querySearchAd();
                    },
                    querySearchAd: function() {
                        var e = this;
                        s.default.getBanner("search--search").then(function(t) {
                            t && t.data && t.data.list && (e.midInputPlace = t.data.list.length > 0 && t.data.list[0].text || "", 
                            e.hotSearchList = t.data);
                        });
                    },
                    loadNext: function() {
                        var e = this;
                        this.loading = !0, s.default.search.projectSearch(d(d(d({}, this.params), this.baseParams), {}, {
                            keyword: this.inputVal,
                            page: this.page
                        })).then(function(t) {
                            t.data && (e.page >= t.data.last_page || !t.data.last_page ? e.more = !1 : e.page += 1, 
                            e.projects = e.projects.concat(t.data.data ? t.data.data.map(function(e) {
                                return e.url ? e : d(d({}, e), {}, {
                                    url: "/pages/lotteryDetail?project_id=".concat(e.project_id, "&id=").concat(e.id, "&is_not_lottery=1")
                                });
                            }) : []), e.projects = e.projects.filter(function(e) {
                                return !e.skeletons;
                            })), e.loading = !1;
                        });
                    },
                    observeNode: function() {
                        var t = this;
                        (f = e.createIntersectionObserver()).relativeToViewport({
                            top: -50
                        }).observe("#observe-node", function(e) {
                            0 === e.intersectionRatio ? t.filterFixed = !0 : t.filterFixed = !1;
                        });
                    },
                    queryBanner: function(e) {
                        var t = this, n = (0, o.filterBannerType)(e), a = (0, o.filterNewBannerCode)(e);
                        this.bannerType = n, a ? (this.bannerLoading = !0, s.default.getBanner(a).then(function(e) {
                            t.bannerLoading = !1, 0 === e.code && (t.bannerList = e.data, 0 !== e.data.list.length || t.iShowIntro || (t.filterFixed = !0), 
                            (e.data.list.length > 0 || t.iShowIntro) && t.observeNode());
                        })) : this.bannerLoading = !1;
                    }
                }
            };
            t.default = b;
        }).call(this, n("543d").default);
    },
    c41d: function(e, t, n) {},
    da87: function(e, t, n) {
        "use strict";
        var a = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, r = function() {
            var e = this, t = (e.$createElement, e._self._c, {
                dataName: e.navBarTitle + "-搜索框"
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: t
                }
            });
        }, i = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return a;
        });
    },
    f696: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("8b37"), r = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = r.a;
    }
}, [ [ "074c", "common/runtime", "common/vendor", "subPackages/lottery/common/vendor" ] ] ]);