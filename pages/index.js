(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index" ], {
    3441: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("9261")).default);
        }).call(this, n("543d").createPage);
    },
    "4c28": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = d(n("a34a")), o = d(n("c909")), i = n("2f62"), r = d(n("dcf6")), s = d(n("4ec3")), c = n("b628"), u = n("ca00");
            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [], a = !0, o = !1, i = void 0;
                        try {
                            for (var r, s = e[Symbol.iterator](); !(a = (r = s.next()).done) && (n.push(r.value), 
                            !t || n.length !== t); a = !0) ;
                        } catch (e) {
                            o = !0, i = e;
                        } finally {
                            try {
                                a || null == s.return || s.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return n;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return h(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a;
            }
            function f(e, t, n, a, o, i, r) {
                try {
                    var s = e[i](r), c = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(a, o);
            }
            function m(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, o) {
                        var i = e.apply(t, n);
                        function r(e) {
                            f(i, a, o, r, s, "next", e);
                        }
                        function s(e) {
                            f(i, a, o, r, s, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        v(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var y = n("f4fd"), b = "正在公示", w = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    MiniSalesCard: function() {
                        n.e("components/MiniSalesmanCard").then(function() {
                            return resolve(n("0ee0"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseAddMiniApp: function() {
                        n.e("components/BaseAddMiniApp").then(function() {
                            return resolve(n("a388"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AddDesktop: function() {
                        n.e("pages/components/AddDesktop").then(function() {
                            return resolve(n("8efc"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    AdFloatWindow: function() {
                        n.e("components/AdFloatWindow").then(function() {
                            return resolve(n("840d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiGrid: function() {
                        n.e("pages/components/BusiGrid").then(function() {
                            return resolve(n("c5a3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseBanner: function() {
                        n.e("components/BaseBanner").then(function() {
                            return resolve(n("01c8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiCube: function() {
                        n.e("pages/components/BusiCube").then(function() {
                            return resolve(n("3fee"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiColumn: function() {
                        n.e("pages/components/BusiColumn").then(function() {
                            return resolve(n("a092"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNews: function() {
                        n.e("pages/components/BusiNews").then(function() {
                            return resolve(n("f11a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ProjectItem: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiActivity: function() {
                        n.e("pages/components/BusiActivity").then(function() {
                            return resolve(n("3592"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HomeProjectItem: function() {
                        n.e("components/HomeProjectItem").then(function() {
                            return resolve(n("b01e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiShareIcon: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/UILayout/BusiShareIcon") ]).then(function() {
                            return resolve(n("6fc3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSearch: function() {
                        n.e("components/UILayout/BusiSearch").then(function() {
                            return resolve(n("5f00"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiSearchSwiper: function() {
                        n.e("pages/components/BusiSearchSwiper").then(function() {
                            return resolve(n("ef31"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ShareTimelineLayout: function() {
                        n.e("components/ShareTimelineLayout").then(function() {
                            return resolve(n("0bd0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    var t = e.getStorageSync("index_grids_cache"), n = e.getStorageSync("index_top_cache"), a = e.getStorageSync("index_theme_type"), o = e.getSystemInfoSync(), i = o.statusBarHeight + 44, r = o.statusBarHeight, s = o.windowHeight - i + 6, c = e.getStorageSync("index_cube_cache");
                    return {
                        customUrl: "/subPackages/project/pages/mapLookHouse",
                        hotSearchList: {
                            list: [],
                            config: {}
                        },
                        upDataCotent: "",
                        showUpdataView: !1,
                        inputShowed: !1,
                        midInputPlace: "",
                        type: 1,
                        banners: {
                            list: [ {} ],
                            config: {}
                        },
                        top: n || new Array(5).fill({
                            skeleton: !0
                        }),
                        grids: t || new Array(10).fill({
                            skeleton: !0
                        }),
                        isAdOpen: !1,
                        AdFloatWindowBottom: "24rpx",
                        adFloatWindowImg: "",
                        adFloatWindowUrl: "",
                        listData: [ {
                            skeleton: !0
                        } ],
                        sales_man_data: [],
                        recommend_rule: "",
                        recommendBanners: {
                            list: [ {
                                skeleton: !0
                            } ],
                            config: {}
                        },
                        tabIndex: 1,
                        recommendList: [],
                        tabContent: [],
                        tabContentNew: [],
                        isShow: !1,
                        second: "",
                        timer: null,
                        advertisingBanner: {},
                        hideTip: !0,
                        guideImg: [],
                        guideImgIndex: 0,
                        guideShow: !1,
                        is_sales_man_id: "",
                        upDataVersion: "",
                        controlModle: [],
                        showAddDesktop: !1,
                        showAddMyProgram: !1,
                        showedAddMyprogram: !1,
                        latestOpeningObj: {
                            titleStr: b,
                            url: "/pages/latestOpeningMore/index?type=10&title=".concat(b),
                            param: "".concat(b, "-更多")
                        },
                        sections: [],
                        sectionsUpdate: !0,
                        cube: c || {
                            code: "skeletons",
                            style_name: "penta_cube",
                            detail: new Array(5).fill({
                                skeleton: !0
                            })
                        },
                        activity: null,
                        isShowActivity: !1,
                        isLeave: !1,
                        isShareShow: !0,
                        shareHide: null,
                        shareShow: null,
                        marginTop: (0, u.transformDeviceUnit)(i),
                        adWrapHeight: s,
                        shareTimelineParam: {},
                        opacityTop: 0,
                        statusBarHeight: "".concat((0, u.transformDeviceUnit)(r)),
                        themeType: a || "default"
                    };
                },
                computed: g(g({
                    inputPlace: function() {
                        return this.midInputPlace;
                    }
                }, (0, i.mapState)({
                    enableShare: function(e) {
                        return e.system.enableShare;
                    }
                })), {}, {
                    isNewYearTheme: function() {
                        return "new_year" === this.themeType;
                    },
                    hasShowHotRecommend: function() {
                        return this.controlModle[1] && "hot_recommend" === this.controlModle[1].module && 1 === Math.floor(this.controlModle[1].is_show) && this.recommendList.length > 0;
                    }
                }),
                watch: {
                    "$store.state.system.searchPlaceholder": {
                        handler: function() {
                            this.midInputPlace = this.$store.state.system.searchPlaceholder;
                        },
                        immediate: !0
                    }
                },
                onShareAppMessage: function() {
                    return c.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onHide: function() {
                    this.isLeave = !0;
                },
                onShow: function() {
                    this.$store.dispatch("chat/getUnReadMessage"), this.$store.dispatch("chat/getUnReadCustomerMessage");
                },
                onPullDownRefresh: function() {
                    this.reload(), e.stopPullDownRefresh();
                },
                onReachBottom: function() {
                    this.$refs.column && this.$refs.column.reachBottom();
                },
                onPageScroll: function(e) {
                    var t = e.scrollTop;
                    this.isNewYearTheme && this.$refs.busiNavHeader && this.setNavHeader(t), this.$refs.column && (this.$refs.column.scrollTop = t), 
                    this.$refs.share && this.$refs.share.pageScroll(e);
                },
                onShareTimeline: function() {
                    return c.share.shareTimeline(this.shareTimelineParam.title, {
                        shareTimeline: this.shareTimelineParam.content_image
                    }, this.shareTimelineParam.share_image);
                },
                onTabItemTap: function() {
                    this.hideTip = y.isAddMyProgram(), this.isLeave ? this.isLeave = !1 : (e.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    }), this.reload());
                },
                onLoad: function() {
                    var e = m(a.default.mark(function e(t) {
                        var n, i = this;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.themeInit(), !t.hid) {
                                    e.next = 6;
                                    break;
                                }
                                return e.next = 4, s.default.getDecodeHashParams(t.hid);

                              case 4:
                                (n = e.sent) && n.data && (t = n ? (0, o.default)("?".concat(decodeURIComponent(n.data.path))).search(!0) : t);

                              case 6:
                                t.redirect && new r.default(t).check(), this.hideTip = y.isAddMyProgram(), this.firstPageLoad().then(function() {
                                    return i.secondPageLoad();
                                }).then(function() {
                                    return i.threePageLoad();
                                }).then(function() {
                                    return i.lastPageLoad();
                                }).then(function() {
                                    return i.$nextTick(function() {
                                        i.loadIsSalesMan(), i.loadUIActivity(), i.loadGuide(), i.showAD(), s.default.getShareTimelineParam("index").then(function(e) {
                                            e.data && (i.shareTimelineParam = e.data);
                                        });
                                    });
                                });

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    setNavHeader: function(e) {
                        this.isNewYearTheme && (this.opacityTop = e / 44 >= 1 ? 1 : (e / 44).toFixed(1));
                    },
                    themeInit: function() {
                        this.isNewYearTheme && this.$refs.busiNavHeader ? this.$refs.busiNavHeader.setTransparentMode() : this.$refs.busiNavHeader.setWhiteMode();
                    },
                    closeHandle: function() {
                        this.isShowActivity = !1;
                    },
                    addMyProgramHandle: function() {
                        var e = this;
                        setTimeout(function() {
                            e.showedAddMyprogram = !0;
                        }, 1500);
                    },
                    jumpUrlHandle: function(t) {
                        e.showLoading({
                            title: "",
                            mask: !0
                        });
                        var n = this;
                        e.navigateTo({
                            url: t,
                            complete: function() {
                                n.hideLoading();
                            }
                        });
                    },
                    closeUpdateHandle: function() {
                        this.showUpdataView = !1;
                    },
                    nextGuideImage: function() {
                        var e = this.guideImgIndex + 1;
                        this.guideImg[e] ? this.guideImgIndex += 1 : this.closeDirectHandle();
                    },
                    closeDirectHandle: function() {
                        this.guideImg = [];
                    },
                    hideLoading: function() {
                        setTimeout(function() {
                            e.hideLoading();
                        }, 500);
                    },
                    goToUrlHandle: function(e) {
                        this.isShow = !1, (0, u.pageJump)(e);
                    },
                    closeHideHandle: function() {
                        this.isShow = !1;
                    },
                    swiperNavHandle: function(e) {
                        (0, u.pageJump)(e);
                    },
                    firstPageLoad: function() {
                        var t = this;
                        return new Promise(function(n) {
                            Promise.all([ s.default.getBanner("home-top-banner"), s.default.indexPage.topGrids(), s.default.cubeDetail({
                                location: "home"
                            }) ]).then(function(a) {
                                var o = l(a, 3), i = o[0], r = o[1], c = o[2];
                                r && r.data && (t.top = r.data.top, t.grids = r.data.grids, e.setStorage({
                                    key: "index_grids_cache",
                                    data: t.grids
                                }), e.setStorage({
                                    key: "index_top_cache",
                                    data: t.top
                                })), c.data && (t.cube = c.data, e.setStorage({
                                    key: "index_cube_cache",
                                    data: t.cube
                                })), t.$nextTick(function() {
                                    t.banners = i.data, s.default.getBanner("search--search").then(function(e) {
                                        e && e.data && (t.hotSearchList = e.data);
                                    });
                                }), n();
                            }).catch(n);
                        });
                    },
                    secondPageLoad: function() {
                        var e = this;
                        return new Promise(function(t) {
                            Promise.all([ s.default.getBannerProjectList({
                                page: 1,
                                size: 4
                            }), s.default.indexPage.indexConfig() ]).then(function(n) {
                                var a = l(n, 2), o = a[0], i = a[1];
                                if (e.listData = i.data.announcement, o.data) {
                                    var r = o.data.list ? o.data.list : [];
                                    e.recommendList = r, e.tabContentNew = r.slice(0, 1), e.tabContent = r.slice(1);
                                }
                                e.$nextTick(function() {
                                    t(), e.sales_man_data = i.data.sales_man_data || [], e.recommend_rule = i.data.recommend_rule;
                                });
                            }).catch(t);
                        });
                    },
                    threePageLoad: function() {
                        var e = this;
                        return new Promise(function(t) {
                            Promise.all([ s.default.getBanner("home-tinny-banner"), s.default.section.section() ]).then(function(n) {
                                var a = l(n, 2), o = a[0], i = a[1];
                                e.sectionsUpdate = !1, e.sections = i.data, e.$nextTick(function() {
                                    t(), e.recommendBanners = o.data, e.sectionsUpdate = !0;
                                });
                            }).catch(t);
                        });
                    },
                    lastPageLoad: function() {
                        var t = this;
                        Promise.all([ s.default.getlotActivity(), s.default.mapSetting(), s.default.indexBoxIsShow() ]).then(function(n) {
                            var a = l(n, 3), o = a[0], i = a[1], r = a[2];
                            i.data && i.data.theme_type && (t.themeType = i.data.theme_type, e.setStorage({
                                key: "index_theme_type",
                                data: t.themeType
                            }), t.themeInit()), o.data && o.data.suspend_bottom && (t.isAdOpen = !Array.isArray(o.data), 
                            t.adFloatWindowImg = o.data.suspend_bottom.img[0] || "", t.adFloatWindowUrl = o.data.suspend_bottom.url), 
                            r && r.data && (t.controlModle = r.data || []);
                        });
                    },
                    reload: function() {
                        var t = m(a.default.mark(function t() {
                            var n = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e.showLoading({
                                        title: "加载中..."
                                    }), this.firstPageLoad().then(function() {
                                        return n.secondPageLoad();
                                    }).then(function() {
                                        return n.threePageLoad();
                                    }).then(function() {
                                        return n.lastPageLoad();
                                    }), e.hideLoading();

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadGuide: function() {
                        var e = this;
                        s.default.getGuideImage("app_index").then(function(t) {
                            e.guideImg = t.data;
                        });
                    },
                    loadIsSalesMan: function() {
                        var e = this;
                        s.default.isSaleMan().then(function(t) {
                            e.is_sales_man_id = t.sales_man_id || "";
                        });
                    },
                    loadUIActivity: function() {
                        var e = m(a.default.mark(function e() {
                            var t, n, o, i, r, c, u;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, Promise.all([ s.default.getBanner("home-middle-banner"), s.default.getBanner("home--hover") ]);

                                  case 2:
                                    t = e.sent, n = l(t, 2), o = n[0], i = n[1], r = o.data || {
                                        list: [],
                                        config: {}
                                    }, c = null, i.data && Array.isArray(i.data.list) && i.data.list.length > 0 && (u = l(i.data.list, 1), 
                                    c = u[0]), this.activity = {
                                        middleBanner: r,
                                        hoverBanner: c
                                    }, this.activity.hoverBanner && (this.isShowActivity = !0);

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
                    showAD: function() {
                        var t = this;
                        s.default.getBanner("home--mask").then(function(n) {
                            var a = t;
                            if (n.data && Array.isArray(n.data.list) && n.data.list.length > 0) {
                                var o = n.data.list[0];
                                e.downloadFile({
                                    url: o.image,
                                    success: function(e) {
                                        a.advertisingBanner = g(g({}, o), {}, {
                                            image: e.tempFilePath
                                        }), a.isShow = !0, n.data.config && n.data.config.stay_duration && (a.second = Math.round(n.data.config.stay_duration), 
                                        a.timer = setInterval(function() {
                                            0 === a.second && (clearInterval(a.timer), a.timer = null, a.isShow = !1), a.second -= 1;
                                        }, 1e3), a.$once("hook:beforeDestory", function() {
                                            a.timer = null;
                                        }));
                                    }
                                });
                            }
                        });
                    }
                }
            };
            t.default = w;
        }).call(this, n("543d").default);
    },
    "6fcd": function(e, t, n) {},
    "913d": function(e, t, n) {},
    9261: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("e3cd"), o = n("e6d3");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("bd5f"), n("b457");
        var r = n("f0c5"), s = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    b457: function(e, t, n) {
        "use strict";
        var a = n("913d");
        n.n(a).a;
    },
    bd5f: function(e, t, n) {
        "use strict";
        var a = n("6fcd");
        n.n(a).a;
    },
    e3cd: function(e, t, n) {
        "use strict";
        var a = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, o = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return a;
        });
    },
    e6d3: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4c28"), o = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    }
}, [ [ "3441", "common/runtime", "common/vendor" ] ] ]);