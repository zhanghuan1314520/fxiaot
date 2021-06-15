require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/sponsor" ], {
    "1ce0": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = o(e("a34a")), u = o(e("4ec3")), a = e("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, n, e, r, u, a, o) {
                try {
                    var i = t[a](o), s = i.value;
                } catch (t) {
                    return void e(t);
                }
                i.done ? n(s) : Promise.resolve(s).then(r, u);
            }
            function s(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(r, u) {
                        var a = t.apply(n, e);
                        function o(t) {
                            i(a, r, u, o, s, "next", t);
                        }
                        function s(t) {
                            i(a, r, u, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        projects: [],
                        sku_id: "",
                        loading: !0
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("我在这里0元抽奖", "/subPackages/activity/pages/sponsor", "https://imgcdn.huanjutang.com/assets/img/20181116/5bee7a673dd0e.jpg");
                },
                onPullDownRefresh: function() {
                    var n = s(r.default.mark(function n() {
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, this.reload();

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var t = s(r.default.mark(function t(n) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.sku_id = n.sku_id, t.next = 3, this.loadNext();

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(n) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadNext: function() {
                        var t = s(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !1, t.next = 3, u.default.getGoodsSponsors(this.sku_id);

                                  case 3:
                                    n = t.sent, this.projects = n.data, this.loading = !0;

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
                        var n = s(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.projects = [], n.next = 4, this.loadNext();

                                  case 4:
                                    t.hideLoading();

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = c;
        }).call(this, e("543d").default);
    },
    5420: function(t, n, e) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    },
    "86c3": function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("1ce0"), u = e.n(r);
        for (var a in r) "default" !== a && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        n.default = u.a;
    },
    "991d": function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("5420"), u = e("86c3");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("b7438");
        var o = e("f0c5"), i = Object(o.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = i.exports;
    },
    b7438: function(t, n, e) {
        "use strict";
        var r = e("f3d3");
        e.n(r).a;
    },
    e4db: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("991d")).default);
        }).call(this, e("543d").createPage);
    },
    f3d3: function(t, n, e) {}
}, [ [ "e4db", "common/runtime", "common/vendor" ] ] ]);