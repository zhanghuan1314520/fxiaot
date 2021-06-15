require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/articleSearch" ], {
    "189d": function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("dcc6"), a = r.n(n);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = a.a;
    },
    "681e": function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("c40a"), a = r("189d");
        for (var i in a) "default" !== i && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(i);
        r("b22e");
        var s = r("f0c5"), c = Object(s.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    b22e: function(t, e, r) {
        "use strict";
        var n = r("f860");
        r.n(n).a;
    },
    bd1a: function(t, e, r) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r("6cdc"), e(r("66fd")), t(e(r("681e")).default);
        }).call(this, r("543d").createPage);
    },
    c40a: function(t, e, r) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
        r.d(e, "b", function() {
            return n;
        }), r.d(e, "c", function() {
            return a;
        }), r.d(e, "a", function() {});
    },
    dcc6: function(t, e, r) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = c(r("a34a")), a = c(r("4ec3")), i = r("b628"), s = r("ca00");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function h(t, e, r, n, a, i, s) {
                try {
                    var c = t[i](s), o = c.value;
                } catch (t) {
                    return void r(t);
                }
                c.done ? e(o) : Promise.resolve(o).then(n, a);
            }
            function f(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(n, a) {
                        var i = t.apply(e, r);
                        function s(t) {
                            h(i, n, a, s, c, "next", t);
                        }
                        function c(t) {
                            h(i, n, a, s, c, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var l = {
                components: {
                    articleStyle: function() {
                        r.e("components/articleStyle").then(function() {
                            return resolve(r("ae8f"));
                        }.bind(null, r)).catch(r.oe);
                    },
                    SearchBar: function() {
                        r.e("subPackages/news/components/SearchBar").then(function() {
                            return resolve(r("105b"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                data: function() {
                    return {
                        type: 0,
                        inputVal: "",
                        inputPlace: "输入文章标题进行搜索",
                        searchListMore: !0,
                        searchListPage: 1,
                        historySearch: [],
                        showContent: !1,
                        otherSearch: [],
                        hotSearchs: [],
                        searchList: [],
                        loading: !0,
                        userInfo: null,
                        buttonType: "search"
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("这里有所有的摇号项目，再也不用到处去找啦");
                },
                onReachBottom: function() {
                    var t = f(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.searchListMore && this.showContent) {
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
                    var e = f(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
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
                    var e = f(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("articleHistorySearch", this.historySearch.join(","));

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
                    var e = f(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("articleHistorySearch", this.historySearch.join(","));

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
                onLoad: function() {
                    var t = f(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.userInfo = i.cache.get("userinfo") || {}, this.type = e.type || 1, this.title = decodeURIComponent(e.title), 
                                this.historySearch = i.storagePlus.getAll("articleHistorySearch") || [], t.next = 6, 
                                this.hotSearchWords();

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
                    toUrl: function(e) {
                        return t.navigateTo({
                            url: e
                        }), !1;
                    },
                    clearHistory: function() {
                        var t = f(n.default.mark(function t() {
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.historySearch = [], i.storagePlus.removeOne("articleHistorySearch");

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
                    doSearch: function() {
                        var t = f(n.default.mark(function t() {
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.inputVal || (this.inputVal = this.inputPlace), t.next = 3, this.setHistorySearch.call(this, this.inputVal);

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
                    loadNext: function() {
                        var e = f(n.default.mark(function e() {
                            var r, i;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.showContent = !0, this.loading = !0, t.stopPullDownRefresh(), e.next = 5, 
                                    a.default.article.projectArticle(0, "", this.searchListPage, "", "", this.inputVal);

                                  case 5:
                                    r = e.sent, this.loading = !1, r.data && (this.searchListPage >= r.data.last_page ? this.searchListMore = !1 : this.searchListPage += 1, 
                                    r.data.data && (i = this.searchList.concat(r.data.data), this.searchList = (0, s.distinguishUrl)(i)));

                                  case 8:
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
                        var e = f(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.showLoading({
                                        title: "加载中..."
                                    }), this.searchListPage = 1, this.searchList = [], this.inputVal) {
                                        e.next = 8;
                                        break;
                                    }
                                    this.showContent = !1, this.searchListMore = !1, e.next = 11;
                                    break;

                                  case 8:
                                    return this.searchListMore = !0, e.next = 11, this.loadNext.call(this);

                                  case 11:
                                    this.loading = !1, t.hideLoading();

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    inputTyping: function(t) {
                        var e = t.detail.value;
                        this.inputVal = e.replace(/(^\s+)|(\s+$)/g, "");
                    },
                    setHistorySearch: function() {
                        var e = f(n.default.mark(function e(r) {
                            var a;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.showLoading({
                                        title: "加载中..."
                                    }), !r) {
                                        e.next = 9;
                                        break;
                                    }
                                    return this.historySearch.unshift(r), a = new Set(this.historySearch), this.historySearch = o(a), 
                                    this.searchListPage = 1, this.searchList = [], e.next = 9, this.loadNext.call(this);

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
                        var t = f(n.default.mark(function t(e) {
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.inputVal = e, t.next = 3, this.setHistorySearch.call(this, e);

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    delOne: function() {
                        var t = f(n.default.mark(function t(e) {
                            var r;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    (r = new Set(this.historySearch)).delete(this.historySearch[e]), this.historySearch = o(r);

                                  case 3:
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
                        this.inputVal = "", this.loading = !0, this.searchListPage = 1, this.searchList = [], 
                        this.showContent = !1, this.searchListMore = !0;
                    },
                    hotSearchWords: function() {
                        var t = f(n.default.mark(function t() {
                            var e;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.question.questionHotSearch(3);

                                  case 2:
                                    (e = t.sent) && e.data && (this.hotSearchs = e.data.list, this.inputPlace = e.data.showKeyword || this.inputPlace);

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
            e.default = l;
        }).call(this, r("543d").default);
    },
    f860: function(t, e, r) {}
}, [ [ "bd1a", "common/runtime", "common/vendor" ] ] ]);