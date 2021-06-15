require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/dailyConsultation" ], {
    "38f5": function(t, e, n) {
        "use strict";
        var r = n("cc21");
        n.n(r).a;
    },
    "4fdc": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("66ad"), a = n("5374");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("38f5");
        var u = n("f0c5"), c = Object(u.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = c.exports;
    },
    5374: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("cf93"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    "66ad": function(t, e, n) {
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
    "798c": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("4fdc")).default);
        }).call(this, n("543d").createPage);
    },
    cc21: function(t, e, n) {},
    cf93: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = c(n("a34a")), a = c(n("4ec3")), i = n("b628"), u = n("ca00");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach(function(e) {
                        l(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function f(t, e, n, r, a, i, u) {
                try {
                    var c = t[i](u), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function u(t) {
                            f(i, r, a, u, c, "next", t);
                        }
                        function c(t) {
                            f(i, r, a, u, c, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var p = {
                components: {
                    articleStyle: function() {
                        n.e("components/articleStyle").then(function() {
                            return resolve(n("ae8f"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        more: !0,
                        type: "",
                        page: 1,
                        articles: [],
                        banner: [],
                        loading: !1,
                        title: ""
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("我在这里查摇号结果，好方便哦");
                },
                onPullDownRefresh: function() {
                    var e = d(r.default.mark(function e() {
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
                    var t = d(r.default.mark(function t() {
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
                    var e = d(r.default.mark(function e(n) {
                        var i;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.type = n.type || 0, i = "", t.showLoading({
                                    title: "加载中..."
                                }), e.t0 = Math.floor(this.type), e.next = 0 === e.t0 ? 6 : 1 === e.t0 ? 13 : 2 === e.t0 ? 20 : 3 === e.t0 ? 27 : 4 === e.t0 ? 34 : 5 === e.t0 ? 41 : 48;
                                break;

                              case 6:
                                return t.setNavigationBarTitle({
                                    title: "资讯推荐"
                                }), this.title = "资讯推荐列表", e.next = 10, a.default.getBannerList(18);

                              case 10:
                                return i = e.sent, this.banner = i.data, e.abrupt("break", 49);

                              case 13:
                                return t.setNavigationBarTitle({
                                    title: "买房干货"
                                }), this.title = "资讯推荐列表", e.next = 17, a.default.getBannerList(14);

                              case 17:
                                return i = e.sent, this.banner = i.data, e.abrupt("break", 49);

                              case 20:
                                return t.setNavigationBarTitle({
                                    title: "楼市解读"
                                }), this.title = "资讯推荐列表", e.next = 24, a.default.getBannerList(15);

                              case 24:
                                return i = e.sent, this.banner = i.data, e.abrupt("break", 49);

                              case 27:
                                return t.setNavigationBarTitle({
                                    title: "楼盘文章"
                                }), this.title = "资讯推荐列表", e.next = 31, a.default.getBannerList(16);

                              case 31:
                                return i = e.sent, this.banner = i.data, e.abrupt("break", 49);

                              case 34:
                                return t.setNavigationBarTitle({
                                    title: "房产投资"
                                }), this.title = "资讯推荐列表", e.next = 38, a.default.getBannerList(17);

                              case 38:
                                return i = e.sent, this.banner = i.data, e.abrupt("break", 49);

                              case 41:
                                return t.setNavigationBarTitle({
                                    title: "楼市百科"
                                }), this.title = "资讯推荐列表", e.next = 45, a.default.getBannerList(17);

                              case 45:
                                return i = e.sent, this.banner = i.data, e.abrupt("break", 49);

                              case 48:
                                return e.abrupt("break", 49);

                              case 49:
                                return e.next = 51, this.loadNext();

                              case 51:
                                t.hideLoading();

                              case 52:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadNext: function() {
                        var t = d(r.default.mark(function t() {
                            var e, n, i;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !1, t.next = 3, a.default.article.projectArticle(this.type, "", this.page, 0, "");

                                  case 3:
                                    (e = t.sent).data && (n = e.data.data, this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    n = n.map(function(t) {
                                        var e = t.content.replace(/<\/?[^>]+>/gi, "");
                                        return e = t.content.replace(/(&nbsp;|\s|\n|\t)/g, ""), o(o({}, t), {}, {
                                            content: e
                                        });
                                    }), i = this.articles.concat(n), this.articles = (0, u.distinguishUrl)(i)), this.loading = !0;

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
                        var e = d(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.page = 1, this.articles = [], e.next = 5, this.loadNext();

                                  case 5:
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
                    }()
                }
            };
            e.default = p;
        }).call(this, n("543d").default);
    }
}, [ [ "798c", "common/runtime", "common/vendor" ] ] ]);