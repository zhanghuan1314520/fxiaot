require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/signInNew" ], {
    "29b8": function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("a9da"), i = e.n(a);
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        t.default = i.a;
    },
    "36ed": function(n, t, e) {
        "use strict";
        var a = e("42e5");
        e.n(a).a;
    },
    3735: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("e023"), i = e("29b8");
        for (var u in i) "default" !== u && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(u);
        e("36ed");
        var r = e("f0c5"), s = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "42e5": function(n, t, e) {},
    "8e64": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("3735")).default);
        }).call(this, e("543d").createPage);
    },
    a9da: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(e("a34a")), i = e("ca00"), u = r(e("4ec3"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function s(n, t, e, a, i, u, r) {
                try {
                    var s = n[u](r), o = s.value;
                } catch (n) {
                    return void e(n);
                }
                s.done ? t(o) : Promise.resolve(o).then(a, i);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(a, i) {
                        var u = n.apply(t, e);
                        function r(n) {
                            s(u, a, i, r, o, "next", n);
                        }
                        function o(n) {
                            s(u, a, i, r, o, "throw", n);
                        }
                        r(void 0);
                    });
                };
            }
            var c = null, d = {
                components: {
                    BaseBanner: function() {
                        e.e("components/BaseBanner").then(function() {
                            return resolve(e("01c8"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        date: "",
                        sumScore: 0,
                        sumDay: 0,
                        signedFlag: !1,
                        integral: 0,
                        coin: 0,
                        showBgFlag: !1,
                        signGuideFlag: !0,
                        bannerList: {
                            list: [],
                            config: {}
                        }
                    };
                },
                onUnload: function() {
                    clearTimeout(c);
                },
                onShow: function() {
                    var n = this;
                    c = setTimeout(function() {
                        n.closedSignGuide.call(n);
                    }, 3e3);
                },
                onLoad: function() {
                    var n = o(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return this.getTodayDate(), n.next = 3, this.getSingShow();

                              case 3:
                                return n.next = 5, this.getBanner();

                              case 5:
                                this.judgeShowSignGuide();

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                computed: {
                    currentDay: function() {
                        return this.signedFlag ? this.sumDay - 1 : this.sumDay;
                    }
                },
                methods: {
                    signin: function() {
                        var n = o(a.default.mark(function n() {
                            var t, e, i, r;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, u.default.signLog();

                                  case 2:
                                    return 0 === (t = n.sent).code && (e = t.data, i = e.integral, r = e.coin, this.coin = r, 
                                    this.integral = i, this.showBgFlag = !0), n.next = 6, this.getSingShow("sigin");

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    closedHideBg: function() {
                        this.showBgFlag = !1;
                    },
                    closedSignGuide: function() {
                        this.signGuideFlag = !1, n.setStorage({
                            key: "show-sign-guide",
                            data: !0
                        });
                    },
                    swiperNavHandle: function(n) {
                        (0, i.pageJump)(n);
                    },
                    judgeShowSignGuide: function() {
                        try {
                            n.getStorageSync("show-sign-guide") ? this.signGuideFlag = this.sumDay : (this.signGuideFlag = !0, 
                            n.setStorage({
                                key: "show-sign-guide",
                                data: !0
                            }));
                        } catch (n) {
                            this.signGuideFlag = !0;
                        }
                    },
                    getTodayDate: function() {
                        this.date = (0, i.dayjs)().format("YYYY-MM-DD dddd");
                    },
                    getSingShow: function() {
                        var n = o(a.default.mark(function n() {
                            var t, e, i, r, s;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, u.default.signShow();

                                  case 2:
                                    0 === (t = n.sent).code && t.data && (e = t.data, i = e.sum, r = e.status, s = e.days, 
                                    this.signedFlag = r, this.sumScore = i, this.sumDay = s);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    getBanner: function() {
                        var n = o(a.default.mark(function n() {
                            var t;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, u.default.getBanner("signIn--banner");

                                  case 2:
                                    0 === (t = n.sent).code && (this.bannerList = t.data);

                                  case 4:
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
            t.default = d;
        }).call(this, e("543d").default);
    },
    e023: function(n, t, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {});
    }
}, [ [ "8e64", "common/runtime", "common/vendor" ] ] ]);