require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/meCoupons" ], {
    2716: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("92f2"), a = n("ea41");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("4aee");
        var o = n("f0c5"), i = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "4aee": function(t, e, n) {
        "use strict";
        var r = n("bb60");
        n.n(r).a;
    },
    "92f2": function(t, e, n) {
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
    bb60: function(t, e, n) {},
    c0c2: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2716")).default);
        }).call(this, n("543d").createPage);
    },
    c93e: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(n("a34a")), a = i(n("f4fd")), u = n("b628"), o = i(n("4ec3"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, r, a, u, o) {
                try {
                    var i = t[u](o), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(e, n);
                        function o(t) {
                            c(u, r, a, o, i, "next", t);
                        }
                        function i(t) {
                            c(u, r, a, o, i, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        more: !0,
                        myCoupons: [],
                        loading: !0,
                        couponsRules: "",
                        page: 1
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("我的优惠券");
                },
                onReachBottom: function() {
                    var t = s(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return", !1);

                              case 2:
                                return t.next = 4, this.loadNext();

                              case 4:
                                return t.abrupt("return", !0);

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
                onLoad: function() {
                    var t = s(r.default.mark(function t() {
                        var e;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.default.getGlobalConfig();

                              case 2:
                                return (e = t.sent).activity_rules && (this.couponsRules = e.activity_rules), t.next = 6, 
                                this.reload();

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
                methods: {
                    stopMove: function() {
                        return !1;
                    },
                    toUrl: function(e) {
                        t.navigateTo({
                            url: e
                        });
                    },
                    reload: function() {
                        var e = s(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.loading = !1, this.myCoupons = [], this.page = 1, e.next = 6, this.loadNext();

                                  case 6:
                                    t.hideLoading(), this.loading = !0;

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
                    loadNext: function() {
                        var t = s(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.default.getQuanDatas(this.page);

                                  case 2:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.myCoupons = this.myCoupons.concat(e.data.data));

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
    ea41: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c93e"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    }
}, [ [ "c0c2", "common/runtime", "common/vendor" ] ] ]);