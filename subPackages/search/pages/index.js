require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/search/pages/index" ], {
    5686: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "7b95": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), i = n("b628"), c = n("ca00");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        h(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function h(t, e, n) {
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
                        var n = [], r = !0, a = !1, i = void 0;
                        try {
                            for (var c, s = t[Symbol.iterator](); !(r = (c = s.next()).done) && (n.push(c.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            a = !0, i = t;
                        } finally {
                            try {
                                r || null == s.return || s.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return d(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function f(t, e, n, r, a, i, c) {
                try {
                    var s = t[i](c), o = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(o) : Promise.resolve(o).then(r, a);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function c(t) {
                            f(i, r, a, c, s, "next", t);
                        }
                        function s(t) {
                            f(i, r, a, c, s, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var g = [ {
                name: {
                    text: "热门榜单",
                    bgImg: "https://imgcdn.huanjutang.com/assets/img/2020727104258081.png"
                },
                key: "hot",
                list: new Array(10).fill({
                    skeletons: !0
                })
            }, {
                name: {
                    text: "人气榜单",
                    bgImg: "https://imgcdn.huanjutang.com/assets/img/2020727104251847.png"
                },
                key: "popularity",
                list: new Array(10).fill({
                    skeletons: !0
                })
            }, {
                name: {
                    text: "访问榜单",
                    bgImg: "https://imgcdn.huanjutang.com/assets/img/2020727104257887.png"
                },
                key: "view",
                list: new Array(10).fill({
                    skeletons: !0
                })
            }, {
                name: {
                    text: "热评榜单",
                    bgImg: "https://imgcdn.huanjutang.com/assets/img/2020727104254059.png"
                },
                key: "comment",
                list: new Array(10).fill({
                    skeletons: !0
                })
            } ], y = 1, m = {
                components: {
                    BusiSearch: function() {
                        n.e("subPackages/search/components/BusiSearch").then(function() {
                            return resolve(n("30e5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SearchHome: function() {
                        n.e("subPackages/search/components/SearchHome").then(function() {
                            return resolve(n("93ad"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SuggestList: function() {
                        n.e("subPackages/search/components/SuggestList").then(function() {
                            return resolve(n("9389"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        connectionId: "",
                        type: "",
                        inputVal: "",
                        placeholder: "",
                        currentSearchAd: {},
                        searchType: "",
                        title: "",
                        showCancelBtn: !0,
                        keywordSearch: function() {},
                        showSearchProjectList: !1,
                        searchProjectList: [],
                        bannerList: {
                            list: [],
                            config: {}
                        },
                        hotSearchList: new Array(5).fill({
                            skeletons: !0
                        }),
                        hotlist: g,
                        brandData: [],
                        scrollViewHeight: 0,
                        triggered: !1,
                        loading: !0,
                        searchTypeIndex: 0,
                        optionVisible: !1,
                        searchTypeList: [ {
                            text: "全部",
                            value: ""
                        } ],
                        groupData: []
                    };
                },
                computed: {
                    isShowCancelBtn: function() {
                        return getCurrentPages().length > 1;
                    },
                    selectedText: function() {
                        return 0 === this.searchTypeList.length && this.searchType ? this.searchType : this.searchTypeList[this.searchTypeIndex] ? this.searchTypeList[this.searchTypeIndex].text : "";
                    }
                },
                watch: {
                    inputVal: function() {
                        this.inputVal ? this.keywordSearch() : this.showSearchProjectList = !1;
                    },
                    showSearchProjectList: function() {
                        this.showSearchProjectList && this.$refs.searchHome.saveHistory();
                    }
                },
                onLoad: function(e) {
                    var n = e.type, r = e.s_t, a = e.searchType, i = e.title, s = e.connection_id, o = e.from;
                    this.type = n, this.connectionId = s, this.inputVal = r || "", this.searchType = a, 
                    this.title = i, "home" === o && t.setNavigationBarTitle({
                        title: "搜索"
                    });
                    var u = t.getSystemInfoSync();
                    this.scrollViewHeight = (0, c.transformDeviceUnit)(u.screenHeight - u.statusBarHeight) - 128, 
                    this.pageInit();
                },
                methods: {
                    stopHandle: function() {},
                    pagePullDownRestore: function() {},
                    pagePullDownRefresh: function() {
                        this.triggered = !0, this.showSearchProjectList = !1, this.searchProjectList = [], 
                        this.getBanner(), this.loadData();
                    },
                    pageInit: function() {
                        var t = p(r.default.mark(function t() {
                            var e = this;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.$refs.busiSearch.onFocus(), this.keywordSearch = i.common.debounce(function() {
                                        if (e.searchProjectList = [], e.inputVal) {
                                            var t = {
                                                keyword: e.inputVal,
                                                search_type: "project_associate"
                                            };
                                            1 === y ? (e.searchType && (t.type = e.searchType), e.connectionId && (t.connectionId = e.connectionId), 
                                            Promise.all([ a.default.brandPavilionList(1, e.inputVal), a.default.newSearchProject(t), a.default.search.groupSearch({
                                                keyword: e.inputVal
                                            }) ]).then(function(t) {
                                                var n = l(t, 3), r = n[0], a = n[1], i = n[2];
                                                if (r.data && (e.brandData = r.data.data || []), a.data) {
                                                    e.showSearchProjectList = !0;
                                                    var c = a.data.data;
                                                    e.searchProjectList = c.map(function(t) {
                                                        var n = e.inputVal, r = u(u({}, t), {}, {
                                                            name: t.name.replace(n, '<span style="color:#2F8CEF">'.concat(n, "</span>"))
                                                        });
                                                        return t.alias && (r.alias = t.alias.replace(n, '<span style="color:#2F8CEF">'.concat(n, "</span>"))), 
                                                        r;
                                                    });
                                                }
                                                i.data && (e.groupData = i.data);
                                            })) : y = 1;
                                        }
                                    }, 200), this.loadData();

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
                    loadData: function() {
                        var t = this;
                        this.loading = !0, this.placeholder = this.$store.state.system.searchPlaceholder, 
                        this.currentSearchAd = this.$store.state.system.currentSearchAd, this.getBanner(), 
                        this.getSelector(), a.default.search.projectRank({
                            simple: 1
                        }).then(function(e) {
                            t.loading = !1, t.hotlist = e.data || [], t.triggered = !1;
                        });
                    },
                    getSelector: function() {
                        var t = this;
                        a.default.projectSelector().then(function(e) {
                            if (e.data && e.data.length > 0) {
                                var n = e.data || [];
                                t.searchTypeList = t.searchTypeList.concat(n);
                                var r = t.searchTypeList.findIndex(function(e) {
                                    return e.value === t.searchType;
                                });
                                r > -1 && (t.searchTypeIndex = r);
                            }
                        });
                    },
                    clickHistory: function(t) {
                        y = 2, this.inputVal = t, this.onSubmit();
                    },
                    onCancel: function(e) {
                        var n = this;
                        "close" === e ? (this.inputVal = "", this.$nextTick(function() {
                            n.$refs.busiSearch.onFocus();
                        })) : "cancel" === e && t.navigateBack();
                    },
                    onTypeChange: function(t) {
                        this.searchTypeIndex = t, this.searchType = this.searchTypeList[t].value, this.inputVal && this.keywordSearch();
                    },
                    onSubmit: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.district_id, r = e.metro;
                        this.inputVal || getApp().sensors && this.currentSearchAd.ad_number && getApp().sensors.track("AD_click", {
                            ad_medium: "小程序",
                            ad_type: "search",
                            ad_source: "search",
                            ad_code: this.currentSearchAd.ad_code,
                            ad_nike_name: this.currentSearchAd.ad_nike_name,
                            ad_number: this.currentSearchAd.ad_number,
                            ad_keyword: this.currentSearchAd.project_name
                        });
                        var a = this.inputVal || this.placeholder;
                        if (a.replace(/\s/g, "")) {
                            this.$refs.searchHome.setHistory(a);
                            var i = "";
                            n && (i = "&district_id=".concat(n)), r && (i = "&metro=".concat(r)), t.redirectTo({
                                url: "/subPackages/search/pages/result?keyword=".concat(encodeURIComponent(a), "&searchType=").concat(this.searchType || "").concat(i)
                            });
                        }
                    },
                    getBanner: function() {
                        var t = p(r.default.mark(function t() {
                            var e, n, i, c;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, Promise.all([ a.default.getBanner("search--banner"), a.default.getBanner("search--hotwords") ]);

                                  case 2:
                                    e = t.sent, n = l(e, 2), i = n[0], c = n[1], this.hotSearchList = [], i.data && i.data.list && (this.bannerList = i.data), 
                                    c.data && c.data.list && (this.hotSearchList = c.data.list), this.triggered = !1;

                                  case 10:
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
            e.default = m;
        }).call(this, n("543d").default);
    },
    "8c63": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("edac")).default);
        }).call(this, n("543d").createPage);
    },
    "914e": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("7b95"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    edac: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("5686"), a = n("914e");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("f55b");
        var c = n("f0c5"), s = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    f55b: function(t, e, n) {
        "use strict";
        var r = n("f5e7");
        n.n(r).a;
    },
    f5e7: function(t, e, n) {}
}, [ [ "8c63", "common/runtime", "common/vendor" ] ] ]);