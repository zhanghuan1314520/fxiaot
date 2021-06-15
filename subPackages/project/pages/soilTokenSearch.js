require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/soilTokenSearch" ], {
    "2bb7": function(t, e, n) {
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
    3071: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("e1a5")).default);
        }).call(this, n("543d").createPage);
    },
    "3c54": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("a5fb"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    6798: function(t, e, n) {
        "use strict";
        var r = n("ccc0");
        n.n(r).a;
    },
    a5fb: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), i = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function u(t, e, n, r, a, i, s) {
                try {
                    var o = t[i](s), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function h(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function s(t) {
                            u(i, r, a, s, o, "next", t);
                        }
                        function o(t) {
                            u(i, r, a, s, o, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var f = {
                components: {
                    SoilItem: function() {
                        n.e("components/SoilTakenItem/soilTokenItem").then(function() {
                            return resolve(n("7c69"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        type: 0,
                        inputVal: "",
                        inputPlace: "输入宗地位置进行搜索",
                        searchListMore: !0,
                        searchListPage: 1,
                        historySearch: [],
                        showContent: !1,
                        hotSearchs: [],
                        searchList: [],
                        loading: !0
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("这里有所有的摇号项目，再也不用到处去找啦");
                },
                onReachBottom: function() {
                    var t = h(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.searchListMore) {
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
                    var e = h(r.default.mark(function e() {
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
                    var e = h(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("soilTokenSearch", this.historySearch.join(","));

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
                    var e = h(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("soilTokenSearch", this.historySearch.join(","));

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
                    var t = h(r.default.mark(function t(e) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.type = e.type || 1, this.title = decodeURIComponent(e.title), this.historySearch = i.storagePlus.getAll("soilTokenSearch") || [];

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
                methods: {
                    inputTyping: function(t) {
                        var e = t.detail.value;
                        this.inputVal = e.replace(/(^\s+)|(\s+$)/g, "");
                    },
                    clearHistory: function() {
                        var t = h(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.historySearch = [], i.storagePlus.removeOne("soilTokenSearch");

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
                        var t = h(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
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
                        var e = h(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.showContent = !0, this.loading = !0, e.next = 4, a.default.soilAuction("", "", this.searchListPage, this.inputVal);

                                  case 4:
                                    (n = e.sent).data && (this.page >= n.data.last_page || !n.data.last_page ? this.searchListMore = !1 : this.searchListPage += 1, 
                                    this.searchList = this.searchList.concat(n.data.data)), t.stopPullDownRefresh(), 
                                    this.loading = !1;

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
                        var e = h(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
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
                    setHistorySearch: function() {
                        var e = h(r.default.mark(function e(n) {
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
                                    return this.historySearch.unshift(n), a = new Set(this.historySearch), this.historySearch = o(a), 
                                    this.projectsPage = 1, this.searchList = [], e.next = 9, this.loadNext.call(this);

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
                        var t = h(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
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
                    hideInput: function() {
                        t.navigateBack();
                    },
                    clearInput: function() {
                        this.inputVal = "", this.loading = !0, this.searchListPage = 1, this.searchList = [], 
                        this.showContent = !1, this.searchListMore = !0;
                    },
                    hotSearchWords: function() {
                        var t = h(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.question.questionHotSearch();

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
            e.default = f;
        }).call(this, n("543d").default);
    },
    ccc0: function(t, e, n) {},
    e1a5: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("2bb7"), a = n("3c54");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("6798");
        var s = n("f0c5"), o = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    }
}, [ [ "3071", "common/runtime", "common/vendor" ] ] ]);