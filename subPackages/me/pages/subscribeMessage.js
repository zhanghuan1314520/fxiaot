require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/subscribeMessage" ], {
    2470: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6b34"), s = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = s.a;
    },
    "4c2f": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    },
    "53bb": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c000")).default);
        }).call(this, n("543d").createPage);
    },
    "55f4": function(t, e, n) {},
    "6b34": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), s = u(n("4ec3")), r = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, a, s, r, u) {
                try {
                    var c = t[r](u), o = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(o) : Promise.resolve(o).then(a, s);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, s) {
                        var r = t.apply(e, n);
                        function u(t) {
                            c(r, a, s, u, o, "next", t);
                        }
                        function o(t) {
                            c(r, a, s, u, o, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        list: []
                    };
                },
                onShareAppMessage: function() {
                    return r.share.share("消息订阅");
                },
                onPullDownRefresh: function() {
                    var e = o(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.loadData();

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
                    this.loadData();
                },
                methods: {
                    loadData: function() {
                        var t = o(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.systemUserList();

                                  case 2:
                                    (e = t.sent) && 0 === e.code && (this.list = e.data);

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
                    subscription: function() {
                        var t = o(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.systemUserSubscription(e);

                                  case 2:
                                    (n = t.sent) && 0 === n.code ? (this.loadData(this.sysId), 1 === n.data.is_subscribe ? r.tip.toast("订阅成功", "", "none") : (r.tip.toast("取消订阅成功", "", "none"), 
                                    s.default.chat.getUnReadMessage().then(function(t) {
                                        t && t.data && r.cache.set("UnReadMessageSum", t.data.sum);
                                    }))) : r.tip.toast(n.message, "", "none");

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    goDetailPage: function(e) {
                        var n = "";
                        switch (parseInt(e.type, 10)) {
                          case 1:
                            n = 1 === Number(e.id) ? "/subPackages/me/pages/sysMessage?sysId=".concat(e.id, "&link_type=3") : "/subPackages/me/pages/school?sysId=".concat(e.id, "&link_type=3");
                            break;

                          case 2:
                            n = "/subPackages/news/pages/advisorySys?sysId=".concat(e.id, "&jumpType=").concat(e.actions, "&link_type=3");
                            break;

                          default:
                            n = "/subPackages/me/pages/sysMessage?sysId=".concat(e.id, "&link_type=3");
                        }
                        n && t.navigateTo({
                            url: n
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d").default);
    },
    "888a": function(t, e, n) {
        "use strict";
        var a = n("55f4");
        n.n(a).a;
    },
    c000: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4c2f"), s = n("2470");
        for (var r in s) "default" !== r && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(r);
        n("888a");
        var u = n("f0c5"), c = Object(u.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    }
}, [ [ "53bb", "common/runtime", "common/vendor" ] ] ]);