require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/claimProject" ], {
    2811: function(t, e, r) {},
    "2a3c": function(t, e, r) {
        "use strict";
        var n = r("2811");
        r.n(n).a;
    },
    5640: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("cacd"), a = r.n(n);
        for (var s in n) "default" !== s && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = a.a;
    },
    cacd: function(t, e, r) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(r("a34a")), a = r("b628"), s = i(r("4ec3"));
            function i(t) {
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
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function u(t, e, r, n, a, s, i) {
                try {
                    var o = t[s](i), c = o.value;
                } catch (t) {
                    return void r(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(n, a);
            }
            function h(t) {
                return function() {
                    var e = this, r = arguments;
                    return new Promise(function(n, a) {
                        var s = t.apply(e, r);
                        function i(t) {
                            u(s, n, a, i, o, "next", t);
                        }
                        function o(t) {
                            u(s, n, a, i, o, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var f = r("f4fd"), l = {
                data: function() {
                    return {
                        inputPlace: "请输入认领的楼盘",
                        inputVal: "",
                        searchProjectList: [],
                        claimSuccess: !1,
                        historySearch: [],
                        projectsItems: [],
                        projectsMore: !0,
                        projectsPage: 1,
                        showContent: !1
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("我在这里搜索楼盘");
                },
                onReachBottom: function() {
                    var t = h(n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.projectsMore) {
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
                    var e = h(n.default.mark(function e() {
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
                    var e = h(n.default.mark(function e() {
                        var r = this;
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                setTimeout(function() {
                                    r.historySearch = r.historySearch.slice(0, 10), t.setStorageSync("historySearch_projects", r.historySearch.join(","));
                                }, 1e3);

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onHide: function() {
                    var e = h(n.default.mark(function e() {
                        return n.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.historySearch = this.historySearch.slice(0, 10), t.setStorageSync("historySearch_projects", this.historySearch.join(","));

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
                    var t = h(n.default.mark(function t(e) {
                        var r;
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.type = e.type || 1, this.title = decodeURIComponent(e.title), this.historySearch = a.storagePlus.getAll("historySearch_projects") || [], 
                                t.next = 5, f.getGlobalConfig();

                              case 5:
                                r = t.sent, this.inputPlace = r.searchText;

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
                methods: {
                    sureClaim: function() {
                        var t = h(n.default.mark(function t(e) {
                            var r = this;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.sales.claimProject(e);

                                  case 2:
                                    0 === t.sent.code && (this.claimSuccess = !0, setTimeout(function() {
                                        r.claimSuccess = !1;
                                    }, 2e3));

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
                    inputTyping: function(t) {
                        this.inputVal = t.detail.value;
                    },
                    clearInput: function() {
                        this.inputVal = "", this.projectsPage = 1, this.projectsItems = [], this.showContent = !1, 
                        this.projectsMore = !0;
                    },
                    doSearch: function() {
                        var t = h(n.default.mark(function t() {
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.inputVal || (this.inputVal = this.inputPlace.replace(/搜索：/, "")), this.projectsItems = [], 
                                    t.next = 4, this.setHistorySearch.call(this, this.inputVal);

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
                    setHistorySearch: function() {
                        var e = h(n.default.mark(function e(r) {
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
                                    this.projectsPage = 1, this.projectsItems = [], e.next = 9, this.loadNext.call(this);

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
                        var t = h(n.default.mark(function t(e) {
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
                    clearHistory: function() {
                        this.historySearch = [], a.storagePlus.removeOne("historySearch_projects");
                    },
                    loadNext: function() {
                        var e = h(n.default.mark(function e() {
                            var r;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.showContent = !0, t.stopPullDownRefresh(), e.next = 4, s.default.projectSearch(this.inputVal);

                                  case 4:
                                    r = e.sent, this.projectsPage >= r.data.last_page ? this.projectsMore = !1 : this.projectsPage += 1, 
                                    this.projectsItems = this.projectsItems.concat(r.data && r.data.data);

                                  case 7:
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
                        var e = h(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.showLoading({
                                        title: "加载中..."
                                    }), this.inputVal ? (this.projectsPage = 1, this.projectsItems = [], this.projectsMore = !0, 
                                    this.loadNext.call(this)) : (this.projectsPage = 1, this.projectsItems = [], this.showContent = !1, 
                                    this.projectsMore = !1), t.hideLoading();

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, r("543d").default);
    },
    d648: function(t, e, r) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r("6cdc"), e(r("66fd")), t(e(r("eea6")).default);
        }).call(this, r("543d").createPage);
    },
    eea6: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("f694"), a = r("5640");
        for (var s in a) "default" !== s && function(t) {
            r.d(e, t, function() {
                return a[t];
            });
        }(s);
        r("2a3c");
        var i = r("f0c5"), o = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = o.exports;
    },
    f694: function(t, e, r) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
        r.d(e, "b", function() {
            return n;
        }), r.d(e, "c", function() {
            return a;
        }), r.d(e, "a", function() {});
    }
}, [ [ "d648", "common/runtime", "common/vendor" ] ] ]);