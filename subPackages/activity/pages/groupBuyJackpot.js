require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/groupBuyJackpot" ], {
    "0c96": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), i = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, a, i, o, c) {
                try {
                    var u = t[o](c), r = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(r) : Promise.resolve(r).then(a, i);
            }
            var u = {
                mixins: [ o(n("73a2")).default ],
                data: function() {
                    return {
                        detail: {
                            prize_title: "",
                            prize_image: "",
                            project: {
                                name: ""
                            }
                        },
                        prizeId: "",
                        topImage: ""
                    };
                },
                onLoad: function(t) {
                    t.id && (this.prizeId = t.id, this.loadData(t.id)), this.loadImage("singleday_home_headimg");
                },
                onPullDownRefresh: function() {
                    var e = function(t) {
                        return function() {
                            var e = this, n = arguments;
                            return new Promise(function(a, i) {
                                var o = t.apply(e, n);
                                function u(t) {
                                    c(o, a, i, u, r, "next", t);
                                }
                                function r(t) {
                                    c(o, a, i, u, r, "throw", t);
                                }
                                u(void 0);
                            });
                        };
                    }(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.loadData(), t.stopPullDownRefresh();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadImage: function(t) {
                        var e = this;
                        i.default.activity.banner({
                            type: t
                        }).then(function(t) {
                            0 === t.code && (e.topImage = t.data);
                        });
                    },
                    loadData: function(t) {
                        var e = this;
                        i.default.activity.winPrizeDetail(t).then(function(t) {
                            t.data && t.data.id && (e.detail = t.data);
                        });
                    },
                    copyCode: function() {
                        this.detail.wechat && t.setClipboardData({
                            data: this.detail.wechat,
                            success: function() {
                                t.showToast({
                                    title: "微信号已复制"
                                });
                            }
                        });
                    },
                    handleProjectDetail: function() {
                        this.item.project_id && t.navigateTo({
                            url: "/pages/lotteryDetail?project_id=".concat(this.item.project_id)
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d").default);
    },
    1596: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4d4a"), i = n("a79f");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("8429"), n("c442");
        var c = n("f0c5"), u = Object(c.a)(i.default, a.b, a.c, !1, null, "3a6a2f42", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "4d4a": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "5e7c": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("1596")).default);
        }).call(this, n("543d").createPage);
    },
    8429: function(t, e, n) {
        "use strict";
        var a = n("e1d6");
        n.n(a).a;
    },
    "8a99": function(t, e, n) {},
    a79f: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("0c96"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = i.a;
    },
    c442: function(t, e, n) {
        "use strict";
        var a = n("8a99");
        n.n(a).a;
    },
    e1d6: function(t, e, n) {}
}, [ [ "5e7c", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);