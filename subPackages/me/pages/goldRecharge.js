require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/goldRecharge" ], {
    1274: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = c(n("a34a")), a = c(n("4ec3")), o = n("ca00");
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function f(e, t, n, r, a, o, c) {
                try {
                    var u = e[o](c), s = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, a);
            }
            function l(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = e.apply(t, n);
                        function c(e) {
                            f(o, r, a, c, u, "next", e);
                        }
                        function u(e) {
                            f(o, r, a, c, u, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var d = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiTab: function() {
                        n.e("components/UILayout/BusiTab").then(function() {
                            return resolve(n("f97f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseInfo: function() {
                        n.e("subPackages/me/pages/components/goldRecharge/BaseInfo").then(function() {
                            return resolve(n("fd60"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Exchange: function() {
                        n.e("subPackages/me/pages/components/goldRecharge/Exchange").then(function() {
                            return resolve(n("02dd"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Recharge: function() {
                        n.e("subPackages/me/pages/components/goldRecharge/Recharge").then(function() {
                            return resolve(n("1454"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        changeType: 1,
                        baseInfo: {}
                    };
                },
                onPullDownRefresh: function() {
                    var t = l(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

                              case 2:
                                e.stopPullDownRefresh();

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
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                onLoad: function() {
                    var e = l(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.$refs.busiNavHeader.setTransparentMode(), e.next = 3, this.reload();

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
                computed: {
                    systemType: function() {
                        return (0, o.getPlatform)();
                    },
                    tabList: function() {
                        return "ios" === this.systemType ? [ {
                            id: 1,
                            text: "兑换金币",
                            dataName: "",
                            dataContent: ""
                        } ] : [ {
                            id: 1,
                            text: "兑换金币",
                            dataName: "",
                            dataContent: ""
                        }, {
                            id: 2,
                            text: "充值金币",
                            dataName: "",
                            dataContent: ""
                        } ];
                    }
                },
                methods: {
                    switchBarHandle: function(e) {
                        this.changeType = e;
                    },
                    changetype: function() {
                        var e = l(r.default.mark(function e(t) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    this.changeType = parseInt(t, 10);

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var t = l(r.default.mark(function t() {
                            var n, o, c;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), this.showType = !1, t.next = 4, a.default.sales.salesInfo();

                                  case 4:
                                    n = t.sent, o = n.data, c = void 0 === o ? {} : o, this.baseInfo = s(s({}, c.sales_man), {}, {
                                        avatar_url: c.avatar_url
                                    }) || {}, this.$refs.exchange.loadData(), e.hideLoading();

                                  case 10:
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
            t.default = d;
        }).call(this, n("543d").default);
    },
    "42ee": function(e, t, n) {
        "use strict";
        var r = n("4c21");
        n.n(r).a;
    },
    "4c21": function(e, t, n) {},
    "73ab": function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    adbd: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("73ab"), a = n("d2c2");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("42ee");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    },
    c3b2: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("adbd")).default);
        }).call(this, n("543d").createPage);
    },
    d2c2: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("1274"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    }
}, [ [ "c3b2", "common/runtime", "common/vendor" ] ] ]);