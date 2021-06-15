require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/bigShot" ], {
    "2bff": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("5066"), a = n("8864");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("4fa9");
        var o = n("f0c5"), i = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "4fa9": function(t, e, n) {
        "use strict";
        var r = n("e445");
        n.n(r).a;
    },
    5066: function(t, e, n) {
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
    "5dd6": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2bff")).default);
        }).call(this, n("543d").createPage);
    },
    8864: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("b72b"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    },
    b72b: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = u(n("a34a")), a = u(n("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, r, a, u, o) {
                try {
                    var i = t[u](o), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(e, n);
                        function i(t) {
                            o(u, r, a, i, c, "next", t);
                        }
                        function c(t) {
                            o(u, r, a, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                components: {},
                data: function() {
                    return {
                        page: 1,
                        more: !0,
                        dataList: []
                    };
                },
                onPullDownRefresh: function() {
                    var e = i(r.default.mark(function e() {
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
                    var t = i(r.default.mark(function t() {
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
                    var t = i(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.loadNext();

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
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    loadNext: function() {
                        var t = i(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.article.dernSourcesList(this.page, 20);

                                  case 2:
                                    (e = t.sent) && e.data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.dataList = this.dataList.concat(e.data.data));

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
                    reload: function() {
                        var e = i(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.page = 1, this.more = !0, this.dataList = [], e.next = 6, this.loadNext();

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
            e.default = c;
        }).call(this, n("543d").default);
    },
    e445: function(t, e, n) {}
}, [ [ "5dd6", "common/runtime", "common/vendor" ] ] ]);