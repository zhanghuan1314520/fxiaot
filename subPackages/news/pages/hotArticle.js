require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/hotArticle" ], {
    "3fc6": function(t, e, n) {
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
    "4df62": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c919")).default);
        }).call(this, n("543d").createPage);
    },
    "6a2a": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("bc54"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    },
    "7ab9": function(t, e, n) {},
    "9e71": function(t, e, n) {
        "use strict";
        var r = n("7ab9");
        n.n(r).a;
    },
    bc54: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(n("a34a")), a = i(n("4ec3")), u = n("b628"), c = n("ca00");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, r, a, u, c) {
                try {
                    var i = t[u](c), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(o) : Promise.resolve(o).then(r, a);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(e, n);
                        function c(t) {
                            o(u, r, a, c, i, "next", t);
                        }
                        function i(t) {
                            o(u, r, a, c, i, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        more: !0,
                        articles: [],
                        page: 1
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("选新房，看楼盘，查摇号，超百万人在用的杭州房小团真方便");
                },
                onPullDownRefresh: function() {
                    var e = s(r.default.mark(function e() {
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
                onReachBottom: function() {
                    var t = s(r.default.mark(function t() {
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
                onLoad: function() {
                    var t = s(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

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
                methods: {
                    sendAnalysisHandle: function() {},
                    reload: function() {
                        var e = s(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.page = 1, this.more = !0, this.articles = [], e.next = 6, this.loadNext();

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
                    }(),
                    loadNext: function() {
                        var t = s(r.default.mark(function t() {
                            var e, n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.article.projectArticle(0, "", this.page, 1, "");

                                  case 2:
                                    (e = t.sent) && e.data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    n = this.articles.concat(e.data.data), this.articles = (0, c.distinguishUrl)(n));

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
    c919: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3fc6"), a = n("6a2a");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("9e71");
        var c = n("f0c5"), i = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    }
}, [ [ "4df62", "common/runtime", "common/vendor" ] ] ]);