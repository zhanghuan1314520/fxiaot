require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/projectVote" ], {
    "14ab": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "1e54": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("68e5"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    "23ad": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("14ab"), r = n("1e54");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("3dd2");
        var o = n("f0c5"), s = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    "3dd2": function(t, e, n) {
        "use strict";
        var a = n("e7a0");
        n.n(a).a;
    },
    "68e5": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = s(n("a34a")), r = s(n("6173")), i = s(n("4ec3")), o = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function d(t, e, n, a, r, i, o) {
                try {
                    var s = t[i](o), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function p(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function o(t) {
                            d(i, a, r, o, s, "next", t);
                        }
                        function s(t) {
                            d(i, a, r, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var v = {
                components: {
                    BackToTopButton: function() {
                        n.e("subPackages/activity/components/BackToTopButton").then(function() {
                            return resolve(n("8972"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r.default ],
                data: function() {
                    return {
                        toView: "home-left",
                        showRankRule: !1,
                        showActivityRule: !1,
                        page: "rank",
                        currentTab: null,
                        width: 800,
                        tabs: [],
                        currentIndex: 0,
                        tabsOne: [],
                        tabsTwo: [],
                        voteSuccess: !1,
                        keywords: "",
                        pages: 1,
                        more: !0,
                        top_data: {},
                        projects: [],
                        endTime: "",
                        day: "",
                        hour: "",
                        minutes: "",
                        second: "",
                        startTime: "",
                        RemainNum: -1,
                        weapp: {
                            nickName: "",
                            city: ""
                        },
                        voteId: "",
                        uniq_id: "",
                        rankDatas: [],
                        rankPages: 1,
                        rankMore: !0,
                        showScrollTop: !1,
                        voteSuccessTimer: null,
                        title: "",
                        tempCurrentTab: null
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("".concat(this.cityName, "年度楼盘竞选中，你看中的楼盘排第几"));
                },
                onReachBottom: function() {
                    var t = p(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if ("home" !== this.page) {
                                    t.next = 7;
                                    break;
                                }
                                if (this.more) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");

                              case 3:
                                return t.next = 5, this.loadNext.call(this);

                              case 5:
                                t.next = 11;
                                break;

                              case 7:
                                if (this.ranKmore) {
                                    t.next = 9;
                                    break;
                                }
                                return t.abrupt("return");

                              case 9:
                                return t.next = 11, this.loadRankNext.call(this);

                              case 11:
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
                    var e = p(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
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
                onShow: function() {},
                onLoad: function() {
                    var t = p(a.default.mark(function t(e) {
                        var n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.page = e.page || "home", n = o.cache.get("userinfo") || {}, this.weapp = '{"nickName": "'.concat(n.nickName, '", "city": "').concat(n.city, '"}'), 
                                this.getTypes.call(this);

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
                watch: {
                    RemainNum: function(t) {
                        if (0 === t) for (var e = 0; e < this.projects.length; e += 1) this.projects[e].vote_status = 2;
                    }
                },
                methods: {
                    closeMark: function(t, e) {
                        e.target.dataset.id && (this[t] = !1);
                    },
                    hideDialog: function() {
                        this.voteSuccess = !1, clearTimeout(this.voteSuccessTimer), this.voteSuccess = null;
                    },
                    goDetailPage: function(e) {
                        var n = "";
                        this.currentTab && (n = this.currentTab.title), t.navigateTo({
                            url: "/subPackages/activity/pages/yearEndActivityDetail?id=".concat(e.id, "&vote_id=").concat(this.voteId, "&type=").concat(n)
                        });
                    },
                    showDialog: function(t) {
                        this[t] = !0;
                    },
                    closeDialog: function(t) {
                        this[t] = !1;
                    },
                    changePage: function(t) {
                        this.page !== t && (this.page = t, "home" === this.page ? (this.currentTab = this.tabsOne[0] || {}, 
                        this.reload.call(this), this.toView = "home-left") : (this.currentTab = {
                            id: "",
                            title: "年度之星总榜",
                            vote_id: this.voteId
                        }, this.toView = "rank-left", this.reloadRankData.call(this)), this.currentIndex = 0);
                    },
                    clearInput: function() {
                        var t = p(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.keywords = "", this.currentTab = l({}, this.tempCurrentTab), this.tempCurrentTab = null, 
                                    t.next = 5, this.reload.call(this);

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
                    vote: function() {
                        var t = p(a.default.mark(function t(e) {
                            var n, r, o = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = this.projects[e], t.next = 3, i.default.userVote(n.id, this.top_data.id);

                                  case 3:
                                    r = t.sent, 0 === Math.floor(r.code) ? (this.RemainNum = r.data && r.data.num ? r.data.num : 0, 
                                    r.data && "投票成功" === r.data.data && (n.total_vote += 1, this.voteSuccess = !0, this.voteSuccess = setTimeout(function() {
                                        return o.voteSuccess = !1, !1;
                                    }, 3e3))) : this.RemainNum = 0;

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
                    sure: function() {
                        var t = p(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.tempCurrentTab = l({}, this.currentTab), this.currentTab = null, t.next = 4, 
                                    this.reload.call(this);

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
                    oInpChange: function(t) {
                        this.keywords = t.detail.value;
                    },
                    getVoteRankData: function() {
                        var t = p(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.voteRankData({});

                                  case 2:
                                    e = t.sent, this.ranks = e.data;

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
                    choiceTotalType: function(t) {
                        this.currentTab = {
                            id: "",
                            title: t,
                            vote_id: this.voteId
                        }, this.title = this.currentTab.title, this.reloadRankData.call(this);
                    },
                    choiceType: function(t) {
                        this.currentTab = t, "home" === this.page ? this.reload.call(this) : this.reloadRankData.call(this);
                    },
                    getTypes: function() {
                        var e = p(a.default.mark(function e() {
                            var n, r, o, s, c, u, h = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, i.default.voteIndex(this.keywords, this.pages, this.uniq_id);

                                  case 2:
                                    return n = e.sent, this.top_data = n.data.top_data, this.endTime = n.data && n.data.top_data ? n.data.top_data.vote_end_time : "", 
                                    e.next = 7, this.timeChange();

                                  case 7:
                                    for ((r = n.data.category).length && (this.currentTab = r[0] || {}, this.voteId = this.currentTab.vote_id, 
                                    this.title = this.currentTab.title, this.reload.call(this)), o = r.length, s = Math.ceil(o / 2), 
                                    c = 0; c < s; c += 1) this.tabsOne.push(r[c]);
                                    for (u = s; u < o; u += 1) this.tabsTwo.push(r[u]);
                                    setTimeout(function() {
                                        var e = t.createSelectorQuery(), n = 0;
                                        e.selectAll(".tab-one .tabs-item").boundingClientRect(function(t) {
                                            var e = 0;
                                            t.forEach(function(t) {
                                                e += t.width, e += 8;
                                            }), h.width = Math.ceil(e), n = e;
                                        }).exec(), e.selectAll(".tab-two .tabs-item").boundingClientRect(function(e) {
                                            var a = 0;
                                            e.forEach(function(t) {
                                                a += t.width, a += 8;
                                            }), n < (a += 12) && (h.width = Math.ceil(a));
                                            for (var r = t.getSystemInfoSync().windowWidth, i = Math.ceil(h.width / r), o = [], s = 0; s < i; s += 1) o.push(s);
                                            h.tabs = o;
                                        }).exec();
                                    }, 100);

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = p(a.default.mark(function t() {
                            var e, n, r, o = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = "", this.currentTab && (e = this.currentTab.id), t.next = 4, i.default.voteIndexData(this.voteId, e, this.keywords, this.pages, this.uniq_id);

                                  case 4:
                                    (n = t.sent).data && (this.pages >= n.data.last_page || !n.data.last_page ? this.more = !1 : (this.more = !0, 
                                    this.pages += 1), this.uniq_id = n.data.uniq_id, this.projects = [].concat(c(this.projects), c(n.data.data))), 
                                    this.projects.length > 0 && (r = [], this.projects.forEach(function(t) {
                                        r.push(t.id), o.ids = r.join(",");
                                    }));

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadRankNext: function() {
                        var t = p(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.voteRankData(this.voteId, this.currentTab.id, this.rankPages);

                                  case 2:
                                    (e = t.sent).data && (this.rankPages >= e.data.last_page || !e.data.last_page ? this.ranKmore = !1 : (this.rankPages += 1, 
                                    this.ranKmore = !0), this.rankDatas = [].concat(c(this.rankDatas), c(e.data.data)));

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
                    reloadRankData: function() {
                        var e = p(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.showLoading({
                                        title: "加载中..."
                                    }), this.rankPages = 1, this.rankDatas = [], this.loadRankNext.call(this), t.hideLoading();

                                  case 5:
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
                        var e = p(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.showLoading({
                                        title: "加载中..."
                                    }), this.uniq_id = "", this.pages = 1, this.projects = [], this.loadNext.call(this), 
                                    t.hideLoading();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    onPageScroll: function(e) {
                        var n = t.getSystemInfoSync().windowHeight;
                        this.showScrollTop = e.scrollTop >= n;
                    },
                    scrollLeft: function() {},
                    scrollRight: function() {},
                    scroll: function(e) {
                        var n = t.getSystemInfoSync().windowWidth, a = e.detail.scrollLeft;
                        a -= 40, this.currentIndex = Math.ceil(a / n);
                    },
                    timeChange: function() {
                        var t = this;
                        if (this.endTime) {
                            var e = new Date(this.endTime.replace(/-/g, "/")).getTime();
                            setInterval(function() {
                                var n = new Date().getTime(), a = (e - n) / 1e3, r = Math.floor(a / 86400), i = Math.floor(a % 86400 / 3600), o = Math.floor(a % 3600 / 60), s = Math.floor(a % 60);
                                t.day = r < 0 ? 0 : r, t.hour = i < 0 ? 0 : i, t.minutes = o < 0 ? 0 : o, t.second = s < 0 ? 0 : s;
                            }, 1e3);
                        }
                    }
                }
            };
            e.default = v;
        }).call(this, n("543d").default);
    },
    ac44: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("23ad")).default);
        }).call(this, n("543d").createPage);
    },
    e7a0: function(t, e, n) {}
}, [ [ "ac44", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);