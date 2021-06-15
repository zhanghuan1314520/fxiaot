require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/follows" ], {
    1346: function(t, e, n) {},
    "3bc6": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3d9c"), a = n("eb00");
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        n("abbc");
        var o = n("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = c.exports;
    },
    "3d9c": function(t, e, n) {
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
    abbc: function(t, e, n) {
        "use strict";
        var r = n("1346");
        n.n(r).a;
    },
    c80e: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3bc6")).default);
        }).call(this, n("543d").createPage);
    },
    eb00: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("fa42"), a = n.n(r);
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        e.default = a.a;
    },
    fa42: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(n("a34a")), a = n("2f62"), s = i(n("4ec3")), o = n("b628"), c = n("ca00");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach(function(e) {
                        p(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function p(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function h(t, e, n, r, a, s, o) {
                try {
                    var c = t[s](o), i = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(i) : Promise.resolve(i).then(r, a);
            }
            function b(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var s = t.apply(e, n);
                        function o(t) {
                            h(s, r, a, o, c, "next", t);
                        }
                        function c(t) {
                            h(s, r, a, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var m = n("f4fd"), v = {
                components: {
                    ProjectItems: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ArticleStyle: function() {
                        n.e("components/articleStyle").then(function() {
                            return resolve(n("ae8f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SalesmanItem: function() {
                        n.e("components/SalesmanItem").then(function() {
                            return resolve(n("78b8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BrandPavilionItem: function() {
                        n.e("subPackages/me/components/BrandPavilionItem/brandPavilionBox").then(function() {
                            return resolve(n("3753"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiTab: function() {
                        n.e("components/UILayout/BusiTab").then(function() {
                            return resolve(n("f97f"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        nowTab: 2,
                        nowTabName: "楼盘",
                        page: 1,
                        more: !0,
                        loading: !1,
                        salesList: [],
                        color: {
                            1: "https://imgcdn.huanjutang.com/assets/img/20180713/5b487eb85cca2.jpg",
                            2: "https://imgcdn.huanjutang.com/assets/img/20180713/5b487ec8284d9.jpg",
                            3: "https://imgcdn.huanjutang.com/assets/img/20180713/5b487ead2f79b.jpg"
                        },
                        font_color: {
                            1: "#8c7374",
                            2: "#8d92a3",
                            3: "#c86601"
                        },
                        phone: "",
                        title: "",
                        hasShowPhoneCallTip: !1,
                        projects: [],
                        username: "",
                        recommendSalesMan: [],
                        recommendProject: [],
                        topItems: [],
                        articles: [],
                        brandData: [],
                        showCallPhone: !1,
                        phoneNumber: "",
                        tempItem: null,
                        cityName: "hangzhou",
                        tabList: [ {
                            id: 2,
                            text: "楼盘",
                            dataName: "",
                            dataContent: ""
                        }, {
                            id: 1,
                            text: "置业顾问",
                            dataName: "",
                            dataContent: ""
                        }, {
                            id: 3,
                            text: "文章",
                            dataName: "",
                            dataContent: ""
                        } ]
                    };
                },
                onShareAppMessage: function() {
                    return 1 === parseInt(this.nowTab, 10) ? this.title = "我收藏的置业顾问都在这里~" : 2 === parseInt(this.nowTab, 10) && (this.title = "我收藏的楼盘都在这里~"), 
                    o.share.share(this.title, "/subPackages/me/pages/follows?nowTab=".concat(this.nowTab));
                },
                onReachBottom: function() {
                    var t = b(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

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
                onShow: function() {
                    var t = b(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload.call(this);

                              case 2:
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
                    var e = b(r.default.mark(function e() {
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
                onLoad: function() {
                    var t = b(r.default.mark(function t(e) {
                        var n, a;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, m.getGlobalConfig();

                              case 2:
                                (n = t.sent).phone && (this.phone = n.phone), this.nowTab = e.nowTab || 2, this.nowTabName = 2 === Number(this.nowTab) ? "楼盘" : "置业顾问", 
                                (a = m.getUserInfo()) && (this.username = a.nickName);

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
                methods: d(d({}, (0, a.mapMutations)({
                    setTabActiveId: "SET_TAB_ACTIVE_ID"
                })), {}, {
                    toUrlHandle: function(e) {
                        var n = e.currentTarget.dataset.item;
                        t.navigateTo({
                            url: "/subPackages/comment/pages/project_comment?project_id=".concat(n.id, "&project_name=").concat(n.name)
                        });
                    },
                    attention: function() {
                        var t = b(r.default.mark(function t(e) {
                            var n, a, o;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.brandData[e], a = 1 === parseInt(n.is_collection, 10) ? 2 : 1, t.next = 4, 
                                    s.default.brandAttention(n.id, a);

                                  case 4:
                                    o = t.sent, 0 === parseInt(o.code, 10) && (n.is_collection = 1 === parseInt(n.is_collection, 10) ? 2 : 1);

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
                    toUrl: function() {
                        o.redis.set("question_index", "1"), this.setTabActiveId(1), t.switchTab({
                            url: "/pages/consult/index"
                        });
                    },
                    toggleTab: function() {
                        var t = b(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.nowTab = e, this.nowTabName = 2 === Number(e) ? "楼盘" : "置业顾问", t.next = 4, 
                                    this.reload.call(this);

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
                    reload: function() {
                        var e = b(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), this.loading = !1, this.page = 1, this.more = !0, this.salesList = [], this.articles = [], 
                                    this.recommendProject = [], e.t0 = parseInt(this.nowTab, 10), e.next = 1 === e.t0 ? 10 : 2 === e.t0 ? 13 : 3 === e.t0 ? 16 : 4 === e.t0 ? 19 : 23;
                                    break;

                                  case 10:
                                    return e.next = 12, this.collectSalesMan();

                                  case 12:
                                    return e.abrupt("break", 24);

                                  case 13:
                                    return e.next = 15, this.collectProject();

                                  case 15:
                                    return e.abrupt("break", 24);

                                  case 16:
                                    return e.next = 18, this.collectArticles();

                                  case 18:
                                    return e.abrupt("break", 24);

                                  case 19:
                                    return e.next = 21, this.collectBrandPavilion();

                                  case 21:
                                    return this.brandData = e.sent, e.abrupt("break", 24);

                                  case 23:
                                    return e.abrupt("break", 24);

                                  case 24:
                                    this.loading = !0, t.hideLoading();

                                  case 26:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    collectProject: function() {
                        var t = b(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.getFollowLottery(1);

                                  case 2:
                                    (e = t.sent) && e.data && (this.projects = e.data && e.data.data || []), this.more = !1;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    hotProject: function() {
                        var t = b(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.getAllRecomment(1, this.page);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : (this.more = !0, 
                                    this.page += 1), e.data.data && (this.recommendProject = [].concat(u(this.recommendProject), u(e.data.data))));

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
                    collectSalesMan: function() {
                        var t = b(r.default.mark(function t() {
                            var e, n, a, o, c, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.getFollowSales(this.page);

                                  case 2:
                                    if ((e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.tips = e.data.rule, this.salesList = this.salesList.concat(e.data.data)), !(this.salesList.length > 0)) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 6:
                                    return t.next = 8, s.default.sales.salesManRank("liveness");

                                  case 8:
                                    n = t.sent, a = n.data, this.more = !0, this.topItems = a && a.top, o = {}, c = a && a.ranking, 
                                    i = 4;

                                  case 15:
                                    if (!(i <= 10)) {
                                        t.next = 23;
                                        break;
                                    }
                                    if (c && c[i]) {
                                        t.next = 18;
                                        break;
                                    }
                                    return t.abrupt("break", 23);

                                  case 18:
                                    o[String(i)] = c[i], delete c[i];

                                  case 20:
                                    i += 1, t.next = 15;
                                    break;

                                  case 23:
                                    this.recommendSalesMan = o, this.fragmentRender(c);

                                  case 25:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    fragmentRender: function(t) {
                        var e = this;
                        this.$nextTick(function() {
                            for (var n = {}, r = Object.keys(t), a = 0; a < 10 && r && r[a]; a += 1) n[String(r[a])] = t[r[a]], 
                            delete t[r[a]];
                            e.recommendSalesMan = d(d({}, e.recommendSalesMan), n), Object.keys(t).length > 0 && e.fragmentRender(t);
                        });
                    },
                    collectArticles: function() {
                        var t = b(r.default.mark(function t() {
                            var e, n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.article.collectionList();

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    e.data.data && (n = this.articles.concat(e.data.data), this.articles = (0, c.distinguishUrl)(n)));

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
                    collectBrandPavilion: function() {
                        var t = b(r.default.mark(function t() {
                            var e, n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.brandAttentionList();

                                  case 2:
                                    return (e = t.sent) && (n = e.data || []), this.more = !1, t.abrupt("return", n);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = b(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    t.t0 = parseInt(this.nowTab, 10), t.next = 1 === t.t0 ? 3 : 2 === t.t0 ? 6 : 3 === t.t0 ? 9 : 4 === t.t0 ? 12 : 16;
                                    break;

                                  case 3:
                                    return t.next = 5, this.collectSalesMan();

                                  case 5:
                                    return t.abrupt("break", 17);

                                  case 6:
                                    return t.next = 8, this.collectProject();

                                  case 8:
                                    return t.abrupt("break", 17);

                                  case 9:
                                    return t.next = 11, this.collectArticles();

                                  case 11:
                                    return t.abrupt("break", 17);

                                  case 12:
                                    return t.next = 14, this.collectBrandPavilion();

                                  case 14:
                                    return this.brandData = t.sent, t.abrupt("break", 17);

                                  case 16:
                                    return t.abrupt("break", 17);

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                })
            };
            e.default = v;
        }).call(this, n("543d").default);
    }
}, [ [ "c80e", "common/runtime", "common/vendor" ] ] ]);