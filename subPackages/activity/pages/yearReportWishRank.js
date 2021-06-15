require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/yearReportWishRank" ], {
    "19a5": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e967"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    "58d6": function(t, e, n) {},
    "776e": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("8476"), a = n("19a5");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("acd9");
        var i = n("f0c5"), u = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    8476: function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.tipShow = !0;
            }, t.e1 = function(e) {
                t.tipShow = !1;
            });
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    acd9: function(t, e, n) {
        "use strict";
        var r = n("58d6");
        n.n(r).a;
    },
    e967: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(n("a34a")), a = i(n("4ec3")), o = n("b628");
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
            }
            function c(t, e, n, r, a, o, i) {
                try {
                    var u = t[o](i), c = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            var f = {
                mixins: [ i(n("4123")).default ],
                data: function() {
                    return {
                        pageLoading: !1,
                        me: {
                            avatar: "",
                            name: "--",
                            wish_value: 0,
                            rank: 0
                        },
                        list: [],
                        tipShow: !1
                    };
                },
                onLoad: function() {
                    var e = function(t) {
                        return function() {
                            var e = this, n = arguments;
                            return new Promise(function(r, a) {
                                var o = t.apply(e, n);
                                function i(t) {
                                    c(o, r, a, i, u, "next", t);
                                }
                                function u(t) {
                                    c(o, r, a, i, u, "throw", t);
                                }
                                i(void 0);
                            });
                        };
                    }(r.default.mark(function e() {
                        var n, i, c;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading(), e.prev = 1, e.next = 4, a.default.activity.reportUserInfo(this.activityId);

                              case 4:
                                if (!(n = e.sent).data.user_info) {
                                    e.next = 13;
                                    break;
                                }
                                return i = n.data.user_info.user_type, e.next = 9, a.default.activity.reportRank(this.activityId, i);

                              case 9:
                                (c = e.sent).data && "object" === u(c.data) ? (this.me = c.data.user, this.list = c.data.rank) : o.tip.error("排行榜请求失败"), 
                                e.next = 14;
                                break;

                              case 13:
                                o.tip.error("排行榜请求失败");

                              case 14:
                                e.next = 18;
                                break;

                              case 16:
                                e.prev = 16, e.t0 = e.catch(1);

                              case 18:
                                return e.prev = 18, t.hideLoading(), e.finish(18);

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 1, 16, 18, 21 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    ee86: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("776e")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "ee86", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);