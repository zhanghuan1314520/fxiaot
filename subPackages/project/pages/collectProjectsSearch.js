require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/collectProjectsSearch" ], {
    "09b0": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("bbff"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    "3d27": function(t, e, n) {
        "use strict";
        var r = n("ef83");
        n.n(r).a;
    },
    bbff: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), a = n("ca00"), i = o(n("4ec3")), s = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
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
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        h(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
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
            function l(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function p(t, e, n, r, a, i, s) {
                try {
                    var o = t[i](s), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function s(t) {
                            p(i, r, a, s, o, "next", t);
                        }
                        function o(t) {
                            p(i, r, a, s, o, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var m = {
                components: {
                    ProjectItem: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        autoFocus: !0,
                        type: 0,
                        more: !0,
                        page: 1,
                        param: {
                            page: 1,
                            size: 6
                        },
                        inputVal: "",
                        inputPlace: "请输入楼盘名称",
                        loading: !1,
                        projectsItems: [],
                        historySearch: [],
                        showContent: !1,
                        cursor: "",
                        hotSearchs: [],
                        searchList: [],
                        showSearchList: !1,
                        brandList: [],
                        searchTypeIndex: 0,
                        optionVisible: !1,
                        searchTypeList: [],
                        recommendProjectList: [],
                        bannerList: {
                            list: [],
                            config: {}
                        },
                        collection_id: ""
                    };
                },
                onShareAppMessage: function() {
                    return s.share.share("这里有所有的摇号项目，再也不用到处去找啦");
                },
                onReachBottom: function() {
                    var t = d(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more && this.showContent && this.loading) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext.call(this);

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
                    var e = d(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

                              case 2:
                                t.stopPullDownRefresh();

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
                onUnload: function() {
                    var e = d(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("historySearch_projects_coll", this.historySearch.join(","));

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
                onHide: function() {
                    var e = d(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("historySearch_projects_coll", this.historySearch.join(",")), 
                                this.optionVisible = !1;

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
                onLoad: function() {
                    var t = d(r.default.mark(function t(e) {
                        var n = this;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.type = e.type || 1, this.inputVal = e.s_t || "", this.collection_id = e.collection_id, 
                                this.queryBanner(), !this.inputVal) {
                                    t.next = 7;
                                    break;
                                }
                                return t.next = 7, this.doSearch.call(this);

                              case 7:
                                this.title = decodeURIComponent(e.title), this.searchType = e.searchType, this.historySearch = s.storagePlus.getAll("historySearch_projects_coll") || [], 
                                this.keywordSearch = s.common.debounce(function() {
                                    var t = {
                                        keyword: n.inputVal,
                                        page: n.param.page,
                                        size: n.param.size
                                    };
                                    i.default.collections(n.collection_id, t).then(function(t) {
                                        n.showSearchList = n.inputVal && "" !== n.inputVal, n.searchList = t.data && t.data.data.filter(function(t) {
                                            return !t.is_ad;
                                        }), n.searchListOrigin = l(n.searchList), n.searchList && n.searchList.forEach(function(t) {
                                            var e = new RegExp(n.inputVal, "g");
                                            t.name = t.name.replace(e, '<span style="color:#2D8CF0">'.concat(n.inputVal, "</span>")), 
                                            t.alias && (t.alias = t.alias.replace(e, '<span style="color:#2D8CF0">'.concat(n.inputVal, "</span>")));
                                        });
                                    });
                                }, 300);

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
                methods: {
                    swiperNavHandle: function(t) {
                        (0, a.pageJump)(t);
                    },
                    handleOptionVisible: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.optionVisible = e ? !this.optionVisible : !!t;
                    },
                    inputTyping: function(t) {
                        var e = t.detail.value;
                        this.inputVal = e.replace(/(^\s+)|(\s+$)/g, ""), this.inputVal && this.inputVal.length > 0 ? this.keywordSearch() : this.clearInput.call(this);
                    },
                    clearHistory: function() {
                        var t = d(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.historySearch = [], this.optionVisible = !1, s.storagePlus.removeOne("historySearch_projects_coll");

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
                    doSearch: function() {
                        var t = d(r.default.mark(function t(e) {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e && (n = e.detail.formId, i.default.sendFromID(n).then(function() {})), 
                                    this.inputVal || (this.inputVal = this.inputPlace.replace(/搜索：/, "")), this.page = 1, 
                                    this.more = !0, this.optionVisible = !1, this.projectsItems = [], t.next = 8, this.setHistorySearch.call(this, this.inputVal);

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
                    loadNext: function() {
                        var e = d(r.default.mark(function e() {
                            var n, a, s;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), this.showContent = !0, this.loading = !1, n = {
                                        page: this.param.page,
                                        keyword: this.inputVal
                                    }, e.next = 6, i.default.collections(this.collection_id, n);

                                  case 6:
                                    if ((a = e.sent).data && a.data.data && (a.data.data = a.data.data.filter(function(t) {
                                        return !t.is_ad;
                                    })), this.param.page >= Math.ceil(a.data.total / this.param.size) ? this.more = !1 : this.param.page += 1, 
                                    s = this.projectsItems, this.projectsItems.length > 0 && (s = this.projectsItems.map(function(t) {
                                        return u(u({}, t), {}, {
                                            show: !0
                                        });
                                    })), this.projectsItems = s.concat(a.data && a.data.data), 0 !== this.recommendProjectList.length || 0 !== this.projectsItems.length) {
                                        e.next = 15;
                                        break;
                                    }
                                    return e.next = 15, this.queryRecommendProject();

                                  case 15:
                                    this.loading = !0, t.hideLoading();

                                  case 17:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var t = d(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.page = 1, this.more = !0, this.projectsItems = [], this.showSearchList = !1, 
                                    this.inputVal) {
                                        t.next = 8;
                                        break;
                                    }
                                    this.showContent = !1, t.next = 10;
                                    break;

                                  case 8:
                                    return t.next = 10, this.loadNext.call(this);

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
                    setHistorySearch: function() {
                        var e = d(r.default.mark(function e(n) {
                            var a;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.showLoading({
                                        title: "加载中..."
                                    }), !n) {
                                        e.next = 9;
                                        break;
                                    }
                                    return this.historySearch.unshift(n), a = new Set(this.historySearch), this.historySearch = l(a), 
                                    this.projectsItems = [], this.brandList = [], e.next = 9, this.loadNext.call(this);

                                  case 9:
                                    t.hideLoading();

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    setInputVal: function() {
                        var t = d(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.inputVal = e, this.optionVisible = !1, t.next = 4, this.setHistorySearch.call(this, e);

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
                    hideInput: function() {
                        t.navigateBack();
                    },
                    clearInput: function() {
                        this.page = 1, this.more = !0, this.inputVal = "", this.projectsItems = [], this.brandList = [], 
                        this.showContent = !1, this.showSearchList = !1;
                    },
                    handleGoToBrand: function(e) {
                        t.navigateTo({
                            url: "/subPackages/project/pages/brandPavilion?brandId=".concat(e)
                        });
                    },
                    keywordSearch: function() {},
                    searchBrand: function() {
                        var t = d(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.brandPavilionList(1, this.inputVal);

                                  case 2:
                                    e = t.sent, this.brandList = e.data && e.data.data;

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
                    queryRecommendProject: function() {
                        var t = d(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.getBannerProjectList({
                                        page: 1
                                    });

                                  case 2:
                                    e = t.sent, this.recommendProjectList = e.data ? e.data.list : [];

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
                    queryBanner: function() {
                        var t = d(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.getBanner("search--banner");

                                  case 2:
                                    e = t.sent, this.bannerList = e.data;

                                  case 4:
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
    c3a4: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("d482")).default);
        }).call(this, n("543d").createPage);
    },
    d482: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("fc57"), a = n("09b0");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("3d27");
        var s = n("f0c5"), o = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    },
    ef83: function(t, e, n) {},
    fc57: function(t, e, n) {
        "use strict";
        var r = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
    }
}, [ [ "c3a4", "common/runtime", "common/vendor" ] ] ]);