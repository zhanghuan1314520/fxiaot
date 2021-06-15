require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/signIn" ], {
    "086f": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("1102"), s = e("1c78");
        for (var r in s) "default" !== r && function(t) {
            e.d(n, t, function() {
                return s[t];
            });
        }(r);
        e("eb57");
        var o = e("f0c5"), i = Object(o.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    },
    1102: function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return s;
        }), e.d(n, "a", function() {});
    },
    "139a": function(t, n, e) {},
    "1c78": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("2fc3"), s = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = s.a;
    },
    "2fc3": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = i(e("a34a")), s = e("ca00"), r = i(e("4ec3")), o = e("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, n, e, a, s, r, o) {
                try {
                    var i = t[r](o), u = i.value;
                } catch (t) {
                    return void e(t);
                }
                i.done ? n(u) : Promise.resolve(u).then(a, s);
            }
            function c(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, s) {
                        var r = t.apply(n, e);
                        function o(t) {
                            u(r, a, s, o, i, "next", t);
                        }
                        function i(t) {
                            u(r, a, s, o, i, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var d = {
                components: {
                    BaseBanner: function() {
                        e.e("components/BaseBanner").then(function() {
                            return resolve(e("01c8"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        type: "",
                        grades: "",
                        userInfo: null,
                        days: "",
                        allDays: "",
                        formID: !1,
                        signStatus: "",
                        isShow: !1,
                        item: 0,
                        color: "blue-color",
                        color1: "blue-color",
                        status: "",
                        addPoint: "",
                        needPoint: "",
                        imgLists: [],
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/202051995218081.png",
                        shareProgress: 0,
                        commentProgress: 0,
                        signExplainPath: "",
                        pointExplainPath: "",
                        bannerList: {
                            list: [],
                            config: {}
                        },
                        touch: 0,
                        shareProcessLen: 15,
                        commentProcessLen: 15
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("在这里可以签到赚幸运豆");
                },
                onLoad: function() {
                    var t = c(a.default.mark(function t() {
                        var n, e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.userInfo = o.cache.get("userinfo") || {}, t.next = 3, r.default.getBanner("signIn--banner");

                              case 3:
                                return 0 === (n = t.sent).code && (this.bannerList = n.data), t.next = 7, r.default.signInStatus();

                              case 7:
                                e = t.sent, 0 === parseInt(e.code, 10) && (this.status = e.data.signStatus, this.days = e.data.days, 
                                this.allDays = e.data.allDay, this.grades = e.data.points, this.addPoint = e.data.addPoint, 
                                this.shareProgress = e.data.shareProgress, this.commentProgress = e.data.commentProgress, 
                                this.shareProcessLen = 460 * parseInt(this.shareProgress, 10), this.commentProcessLen = 460 / 3 * parseInt(this.commentProgress, 10), 
                                this.signExplainPath = e.data.signExplainPath, this.pointExplainPath = e.data.pointExplainPath, 
                                1 === parseInt(this.shareProgress, 10) && (this.color = "gray-color"), 3 === parseInt(this.commentProgress, 10) && (this.color1 = "gray-color"), 
                                this.imgLists = e.data.exchange);

                              case 9:
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
                    share: function() {
                        t.switchTab({
                            url: "/pages/index"
                        });
                    },
                    toUrl: function(n) {
                        this.touch = n, this.isShow = !1, t.switchTab({
                            url: "/pages/index"
                        });
                    },
                    close: function() {
                        this.isShow = !1;
                    },
                    signBtn: function() {
                        var n = c(a.default.mark(function n() {
                            var e;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中"
                                    }), n.next = 3, r.default.signIn();

                                  case 3:
                                    if (e = n.sent, t.hideLoading(), 1 === parseInt(e.code, 10)) {
                                        n.next = 13;
                                        break;
                                    }
                                    return this.status = e.data.signStatus, this.days = e.data.days, this.allDays = e.data.allDay, 
                                    this.grades = e.data.points, this.addPoint = e.data.addPoint, this.isShow = !0, 
                                    n.abrupt("return", t.showToast({
                                        title: e.data.prompt,
                                        icon: "none",
                                        mask: !0,
                                        duration: 1e3
                                    }));

                                  case 13:
                                    return n.abrupt("return", t.showToast({
                                        title: e.message,
                                        icon: "none",
                                        mask: !0,
                                        duration: 1e3
                                    }));

                                  case 14:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    preview: function() {
                        var n = c(a.default.mark(function n(e) {
                            var s, r;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    r = [ s = e ], s && r.length > 0 && t.previewImage({
                                        current: s,
                                        urls: r
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }));
                        return function(t) {
                            return n.apply(this, arguments);
                        };
                    }(),
                    swiperNavHandle: function(t) {
                        (0, s.pageJump)(t);
                    }
                }
            };
            n.default = d;
        }).call(this, e("543d").default);
    },
    c2a6: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("086f")).default);
        }).call(this, e("543d").createPage);
    },
    eb57: function(t, n, e) {
        "use strict";
        var a = e("139a");
        e.n(a).a;
    }
}, [ [ "c2a6", "common/runtime", "common/vendor" ] ] ]);