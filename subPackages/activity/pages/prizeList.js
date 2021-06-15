require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/prizeList" ], {
    "0ba0": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), u = s(n("f4fd")), o = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, r, a, u, o) {
                try {
                    var s = t[u](o), i = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(i) : Promise.resolve(i).then(r, a);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(e, n);
                        function o(t) {
                            i(u, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            i(u, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        type: "",
                        loading: !1,
                        projects: [],
                        pages: 1,
                        more: !0,
                        goodsBanners: []
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("我在这里0元抽奖", "/subPackages/activity/pages/prizeList", "https://imgcdn.huanjutang.com/assets/img/20181116/5bee7a673dd0e.jpg");
                },
                onReachBottom: function() {
                    var t = c(r.default.mark(function t() {
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
                onPullDownRefresh: function() {
                    var e = c(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

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
                    var t = c(r.default.mark(function t(e) {
                        var n;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e.homeType && (this.type = e.homeType), t.next = 3, u.default.getGlobalConfig();

                              case 3:
                                return n = t.sent, this.goodsBanners = n.goodsBanners, t.next = 7, this.reload();

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
                    loadNext: function() {
                        var t = c(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !1, t.next = 3, a.default.getGoods(this.pages);

                                  case 3:
                                    (e = t.sent).data && (this.pages >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.pages += 1, 
                                    e.data && e.data.data && (this.projects = this.projects.concat(e.data.data))), this.loading = !0;

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
                    reload: function() {
                        var e = c(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
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
            e.default = f;
        }).call(this, n("543d").default);
    },
    "1ede": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("0ba0"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    },
    5292: function(t, e, n) {
        "use strict";
        var r = n("e4ed");
        n.n(r).a;
    },
    "7e15": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("8248")).default);
        }).call(this, n("543d").createPage);
    },
    8248: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e95f"), a = n("1ede");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("5292");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = s.exports;
    },
    e4ed: function(t, e, n) {},
    e95f: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    }
}, [ [ "7e15", "common/runtime", "common/vendor" ] ] ]);