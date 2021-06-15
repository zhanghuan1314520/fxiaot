require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/phoneLog" ], {
    "1a18": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3dd6"), a = n("92f3");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("4ba0");
        var i = n("f0c5"), u = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    "3bdf": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("1a18")).default);
        }).call(this, n("543d").createPage);
    },
    "3dd6": function(t, e, n) {
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
    "4ba0": function(t, e, n) {
        "use strict";
        var r = n("d942");
        n.n(r).a;
    },
    "92f3": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("bf79"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    bf79: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = u(n("a34a")), a = n("2f62"), o = n("ca00"), i = u(n("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, r, a, o, i) {
                try {
                    var u = t[o](i), s = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function i(t) {
                            s(o, r, a, i, u, "next", t);
                        }
                        function u(t) {
                            s(o, r, a, i, u, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var l = {
                data: function() {
                    return {
                        totalAndToday: {
                            phone: {
                                total: "",
                                today: ""
                            },
                            chat: {
                                total: "",
                                today: ""
                            },
                            bindUser: {
                                total: "",
                                today: ""
                            }
                        },
                        type: 1,
                        page: 1,
                        more: !0,
                        loading: !0,
                        phoneLogList: [],
                        newBindCustomer: !1,
                        unReceiveCall: !1,
                        bindCustomer: [],
                        hideTip: !1,
                        isShowPhone: !0,
                        timeId: null
                    };
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(n), !0).forEach(function(e) {
                            f(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }({}, (0, a.mapState)({
                    onMyCustomer: function(t) {
                        return t.chat.myCustomer;
                    }
                })),
                watch: {
                    onMyCustomer: function(t) {
                        this.getCustomerUnRedNumIchatEvent(t.content);
                    }
                },
                onPullDownRefresh: function() {
                    var e = c(r.default.mark(function e() {
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
                onReachBottom: function() {
                    var t = c(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

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
                onLoad: function() {
                    this.isShowPhone = !1, this.getCustomerUnRedNum(), this.reload();
                },
                onHide: function() {
                    this.timeId && clearTimeout(this.timeId);
                },
                methods: {
                    getCustomerUnRedNum: function() {
                        var t = c(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.customerRedCricle();

                                  case 2:
                                    0 === (e = t.sent).code && this.getCustomerUnRedNumIchatEvent(e.data);

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
                    getCustomerUnRedNumIchatEvent: function(e) {
                        var n = e.new_bind_customer, r = e.un_receive_call;
                        n + r > 0 && t.showTabBarRedDot({
                            index: 4
                        }), this.newBindCustomer = n > 0, this.unReceiveCall = r > 0;
                    },
                    copyText: function(e) {
                        var n = this;
                        t.setClipboardData({
                            data: e,
                            success: function() {
                                n.hideTip = !0, n.timeId = setTimeout(function() {
                                    n.hideTip = !1;
                                }, 3e3);
                            }
                        });
                    },
                    callPhone: function(e) {
                        t.makePhoneCall({
                            phoneNumber: e
                        });
                    },
                    jumpUrl: function(e) {
                        t.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(e)
                        });
                    },
                    jumpRuleUrl: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/bindCustomerRuleInfo"
                        });
                    },
                    changeType: function(t) {
                        this.loading && (this.type = t, this.page = 1, this.reload());
                    },
                    loadNext: function() {
                        var t = c(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (e = {}, 3 === parseInt(this.type, 10)) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.next = 4, i.default.askPhoneLog(this.page, parseInt(this.type, 10));

                                  case 4:
                                    e = t.sent, t.next = 10;
                                    break;

                                  case 7:
                                    return t.next = 9, i.default.bindCustomerList(this.page, 10);

                                  case 9:
                                    e = t.sent;

                                  case 10:
                                    0 === parseInt(e.code, 10) && e.data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    3 !== parseInt(this.type, 10) ? this.phoneLogList = this.phoneLogList.concat(e.data.data) : (this.bindCustomer = this.bindCustomer.concat(e.data.list), 
                                    this.bindCustomer.length && (this.bindCustomer = this.bindCustomer.map(function(t) {
                                        var e = t;
                                        return (0, o.dayjs)().isSame((0, o.dayjs)(t.bind_time), "day") ? e.bind_time_new = (0, 
                                        o.dayjs)(t.bind_time).format("hh:mm") : e.bind_time_new = (0, o.dayjs)(t.bind_time).format("MM-dd"), 
                                        e;
                                    }))));

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var t = c(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.page = 1, this.more = !0, this.loading = !1, this.phoneLogList = [], 
                                    this.bindCustomer = [], t.next = 7, i.default.phoneLog();

                                  case 7:
                                    return e = t.sent, 0 === parseInt(e.code, 10) && (this.totalAndToday = e.data), 
                                    t.next = 11, this.loadNext();

                                  case 11:
                                    this.loading = !0;

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    closedTip: function() {
                        this.hideTip = !1;
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    d942: function(t, e, n) {}
}, [ [ "3bdf", "common/runtime", "common/vendor" ] ] ]);