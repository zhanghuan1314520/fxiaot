require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/myinproject" ], {
    "3ad26": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8af6"), r = n("7e4d");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("a9fd");
        var u = n("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "3b6c": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3ad26")).default);
        }).call(this, n("543d").createPage);
    },
    "7e4d": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e5e7"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    "8a6a": function(t, e, n) {},
    "8af6": function(t, e, n) {
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
    a9fd: function(t, e, n) {
        "use strict";
        var a = n("8a6a");
        n.n(a).a;
    },
    e5e7: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, a, r, o, u) {
                try {
                    var i = t[o](u), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function i(t) {
                            u(o, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            u(o, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                components: {
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        isAuth: !1,
                        projectInfo: new Array(1).fill({
                            skeleton: !0
                        }),
                        isRelevance: 0,
                        hasIdCard: !1,
                        hasCommutation: !1
                    };
                },
                onShow: function() {
                    this.loadData(), this.loadSwicth();
                },
                onPullDownRefresh: function() {
                    this.loadData(), t.stopPullDownRefresh();
                },
                methods: {
                    loadSwicth: function() {
                        var t = i(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.sales.isAuth();

                                  case 2:
                                    (e = t.sent) && 0 === e.code && (this.isAuth = "true" === e.data.identity_authentication_switch);

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
                    loadData: function() {
                        var t = i(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.sales.salemanEnterProject();

                                  case 2:
                                    (e = t.sent).data && (this.projectInfo = e.data.data, this.isRelevance = e.data.is_relevance, 
                                    this.hasIdCard = e.data.id_card, this.hasCommutation = 1 === e.data.is_commutation);

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
                    jumpUrl: function(e) {
                        t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(e)
                        });
                    },
                    changelottery: function() {
                        if (!this.hasCommutation) {
                            var e = "3";
                            this.isAuth && (e = this.hasIdCard ? "3" : "1,3"), t.navigateTo({
                                url: "/subPackages/me/pages/salesMan?redirectPage=".concat(e, "&changeLottery=1")
                            });
                        }
                    },
                    jumpRelationUrl: function() {
                        var e = "4";
                        this.isAuth && (e = this.hasIdCard ? "4" : "1,4"), t.navigateTo({
                            url: "/subPackages/me/pages/salesMan?redirectPage=".concat(e, "&relateLottery=1")
                        });
                    },
                    setMain: function(e) {
                        if (!e.is_default) {
                            var n = this;
                            t.showModal({
                                title: "提示",
                                content: "一个月只能修改1次主营楼盘，是否确定将【".concat(e.project_name, "】设为主营楼盘？"),
                                success: function() {
                                    var t = i(a.default.mark(function t(o) {
                                        return a.default.wrap(function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                              case 0:
                                                if (!o.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, r.default.sales.defaultProject(e.project_id);

                                              case 3:
                                                0 === t.sent.code && n.loadData();

                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }()
                            });
                        }
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d").default);
    }
}, [ [ "3b6c", "common/runtime", "common/vendor" ] ] ]);