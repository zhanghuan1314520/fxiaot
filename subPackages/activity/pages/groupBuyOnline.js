require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/groupBuyOnline" ], {
    "094d": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = i(e("a34a")), o = i(e("4ec3"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, n, e, a, o, i, r) {
                try {
                    var c = t[i](r), u = c.value;
                } catch (t) {
                    return void e(t);
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, o) {
                        var i = t.apply(n, e);
                        function c(t) {
                            r(i, a, o, c, u, "next", t);
                        }
                        function u(t) {
                            r(i, a, o, c, u, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var u = {
                components: {
                    NoData: function() {
                        e.e("subPackages/activity/components/NoData").then(function() {
                            return resolve(e("be2d"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    Banner: function() {
                        e.e("subPackages/activity/components/Banner").then(function() {
                            return resolve(e("cb5b"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    UploadBtn: function() {
                        e.e("subPackages/activity/components/UploadBtn").then(function() {
                            return resolve(e("40a7"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                filters: {
                    format: function(t) {
                        return t ? Number.isNaN(Number(t)) ? t : Number(t) > 9999 ? "".concat((Number(t) / 1e4).toFixed(1), "万") : t : 0;
                    }
                },
                mixins: [ i(e("73a2")).default ],
                data: function() {
                    return {
                        more: !0,
                        loading: !0,
                        param: {
                            page: 1,
                            size: 10,
                            promotion_id: 4
                        },
                        list: [],
                        rankImage: {
                            1: "https://imgcdn.huanjutang.com/file/2020/10/11/b178b52268ed26964a205b36f0784f49.png",
                            2: "https://imgcdn.huanjutang.com/file/2020/10/11/4602e3331739e165f62f3fa6e2b64057.png",
                            3: "https://imgcdn.huanjutang.com/file/2020/10/11/f3fa61d16fdff6cb2c40356b99dca248.png",
                            4: "https://imgcdn.huanjutang.com/file/2020/10/11/b1f4255800bb23ce1c0b9606ef52927a.png"
                        }
                    };
                },
                onLoad: function() {
                    this.load();
                },
                onShow: function() {
                    this.$refs.upload.loadIsSalesMan();
                },
                onReachBottom: function() {
                    var t = c(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more && !this.loading) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.load();

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
                    var n = c(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
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
                methods: {
                    reload: function() {
                        var t = c(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    this.param.page = 1, this.more = !0, this.loading = !1, this.list = [], this.load(), 
                                    this.$refs.banner.getBanner();

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
                    load: function() {
                        var t = this;
                        this.loading = !0, o.default.activity.groupBuyOnlineList(this.param).then(function(n) {
                            var e = n.data;
                            e && (e.list.length ? t.param.page += 1 : t.more = !1, t.list = t.list.concat(e.list)), 
                            t.loading = !1;
                        }).catch(function() {
                            t.loading = !1;
                        });
                    },
                    toVideoList: function(n) {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/groupBuyVideo?promotion_id=".concat(this.param.promotion_id, "&project_id=").concat(n.project_id)
                        });
                    },
                    toVideoDetail: function(n) {
                        t.navigateTo({
                            url: "/subPackages/activity/pages/groupBuyVideoDetail?id=".concat(n)
                        });
                    }
                }
            };
            n.default = u;
        }).call(this, e("543d").default);
    },
    "12ca": function(t, n, e) {},
    "2c83": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("094d"), o = e.n(a);
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        n.default = o.a;
    },
    "542e": function(t, n, e) {
        "use strict";
        var a = e("b53d");
        e.n(a).a;
    },
    "5deb": function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("b9b9")).default);
        }).call(this, e("543d").createPage);
    },
    b53d: function(t, n, e) {},
    b9b9: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("ce6e"), o = e("2c83");
        for (var i in o) "default" !== i && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(i);
        e("c31b"), e("542e");
        var r = e("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, "31643c9a", null, !1, a.a, void 0);
        n.default = c.exports;
    },
    c31b: function(t, n, e) {
        "use strict";
        var a = e("12ca");
        e.n(a).a;
    },
    ce6e: function(t, n, e) {
        "use strict";
        var a = function() {
            var t = this, n = (t.$createElement, t._self._c, t.list.length ? t.__map(t.list, function(n, e) {
                return {
                    $orig: t.__get_orig(n),
                    f0: t._f("format")(n.heat_value)
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, o = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
    }
}, [ [ "5deb", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);