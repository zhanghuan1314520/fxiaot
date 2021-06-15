require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/myPrize" ], {
    "09ac": function(t, e, n) {
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
    "262c": function(t, e, n) {
        "use strict";
        var a = n("c2c0");
        n.n(a).a;
    },
    3132: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7eb8")).default);
        }).call(this, n("543d").createPage);
    },
    "4cdf": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7ca0"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    "7ca0": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3")), o = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t) {
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
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function s(t, e, n, a, r, o, u) {
                try {
                    var i = t[o](u), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function u(t) {
                            s(o, a, r, u, i, "next", t);
                        }
                        function i(t) {
                            s(o, a, r, u, i, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var d = {
                data: function() {
                    return {
                        type: "",
                        more: !0,
                        pages: 1,
                        loading: !1,
                        projects: [],
                        count: ""
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("我在这里0元抽奖", "/subPackages/activity/pages/myPrize", "https://imgcdn.huanjutang.com/assets/img/20181116/5bee7a673dd0e.jpg");
                },
                onReachBottom: function() {
                    var t = f(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
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
                onPullDownRefresh: function() {
                    var e = f(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

                              case 2:
                                setTimeout(function() {
                                    t.stopPullDownRefresh();
                                }, 200);

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
                    var t = f(a.default.mark(function t(e) {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e.homeType && (this.type = e.homeType), t.next = 3, this.loadNext();

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
                    loadNext: function() {
                        var t = f(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !1, t.next = 3, r.default.getGoodsSkus(this.pages);

                                  case 3:
                                    e = t.sent, this.count = e.data.total, e && e.data && e.data.data && Object.keys(e.data.data).forEach(function(t) {
                                        if (e.data.data[t].sku) {
                                            var n = new Date(e.data.data[t].sku.lucky_time.replace(/-/g, "/")).getTime();
                                            new Date().getTime() < n && 0 === parseInt(e.data.data[t].is_win, 10) && (e.data.data[t].is_win = 2);
                                        }
                                    }), 6 * this.pages >= (e.data && e.data.total) || !e.data.total ? this.more = !1 : this.pages += 1, 
                                    e && e.data && e.data.data && (this.projects = [].concat(i(this.projects), i(e.data.data))), 
                                    this.loading = !0;

                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = f(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), this.more = !0, this.pages = 1, this.projects = [], e.next = 6, this.loadNext();

                                  case 6:
                                    t.hideLoading();

                                  case 7:
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
            e.default = d;
        }).call(this, n("543d").default);
    },
    "7eb8": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("09ac"), r = n("4cdf");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("262c");
        var u = n("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    c2c0: function(t, e, n) {}
}, [ [ "3132", "common/runtime", "common/vendor" ] ] ]);