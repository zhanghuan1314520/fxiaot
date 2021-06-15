require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/vitalityIntegral" ], {
    "288b": function(e, n, t) {},
    3368: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = s(t("a34a")), a = s(t("4ec3"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(e, n, t, o, a, s, r) {
                try {
                    var i = e[s](r), u = i.value;
                } catch (e) {
                    return void t(e);
                }
                i.done ? n(u) : Promise.resolve(u).then(o, a);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(o, a) {
                        var s = e.apply(n, t);
                        function i(e) {
                            r(s, o, a, i, u, "next", e);
                        }
                        function u(e) {
                            r(s, o, a, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var u = {
                components: {
                    BusiNavHeader: function() {
                        t.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(t("5ed7"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    BusiBottomLine: function() {
                        t.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(t("d754"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    Empty: function() {
                        t.e("subPackages/me/pages/components/list/Empty").then(function() {
                            return resolve(t("8678"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    BusiLoading: function() {
                        t.e("components/UILayout/BusiLoading").then(function() {
                            return resolve(t("ea8a"));
                        }.bind(null, t)).catch(t.oe);
                    },
                    BasePrompt: function() {
                        t.e("subPackages/me/pages/components/BasePrompt").then(function() {
                            return resolve(t("fb15"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        baseInfo: {
                            user: {},
                            front: {}
                        },
                        list: [],
                        loading: !0
                    };
                },
                onLoad: function() {
                    this.$refs.busiNavHeader.setTransparentMode(), this.livenessBaseInfo(), this.livenessList();
                },
                onPullDownRefresh: function() {
                    this.livenessBaseInfo(), this.livenessList(), e.stopPullDownRefresh();
                },
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    livenessBaseInfo: function() {
                        var e = i(o.default.mark(function e() {
                            var n, t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.livenessBaseInfo();

                                  case 2:
                                    n = e.sent, t = n.data, this.baseInfo = t;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    livenessList: function() {
                        var e = i(o.default.mark(function e() {
                            var n, t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.loading = !0, e.next = 3, a.default.livenessList();

                                  case 3:
                                    n = e.sent, t = n.data, this.list = t || [], this.loading = !1;

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
                    goTaskCenter: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/taskCenter?salesManId=".concat(this.baseInfo.id)
                        });
                    },
                    goPrivilegePage: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/salesmanPrivilege"
                        });
                    },
                    formatWidth: function(e) {
                        return e <= 0 ? "0rpx" : e < 20 ? "34rpx" : e >= 300 ? "100%" : "".concat(e / 3, "%");
                    }
                }
            };
            n.default = u;
        }).call(this, t("543d").default);
    },
    "815f": function(e, n, t) {
        "use strict";
        var o = t("288b");
        t.n(o).a;
    },
    8963: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("f629"), a = t("ccae");
        for (var s in a) "default" !== s && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(s);
        t("815f");
        var r = t("f0c5"), i = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = i.exports;
    },
    ccae: function(e, n, t) {
        "use strict";
        t.r(n);
        var o = t("3368"), a = t.n(o);
        for (var s in o) "default" !== s && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        n.default = a.a;
    },
    f59c: function(e, n, t) {
        "use strict";
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("8963")).default);
        }).call(this, t("543d").createPage);
    },
    f629: function(e, n, t) {
        "use strict";
        var o = function() {
            var e = this, n = (e.$createElement, e._self._c, e.__map(e.list, function(n, t) {
                return {
                    $orig: e.__get_orig(n),
                    m0: e.formatWidth(n.yesterday_points)
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, a = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    }
}, [ [ "f59c", "common/runtime", "common/vendor" ] ] ]);