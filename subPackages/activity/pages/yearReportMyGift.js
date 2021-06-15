require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/yearReportMyGift" ], {
    "2e46": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n("a34a")), a = o(n("4ec3")), i = n("b628");
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t, n, r, a, i, o) {
                try {
                    var c = e[i](o), s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, a);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = e.apply(t, n);
                        function o(e) {
                            c(i, r, a, o, s, "next", e);
                        }
                        function s(e) {
                            c(i, r, a, o, s, "throw", e);
                        }
                        o(void 0);
                    });
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
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        d(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var l = {
                components: {
                    YearReportModal: function() {
                        n.e("subPackages/activity/components/YearReportModal").then(function() {
                            return resolve(n("ac07"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ o(n("4123")).default ],
                data: function() {
                    return {
                        list: [],
                        globalTimer: null,
                        winnerListShow: !1,
                        winnerList: [],
                        inputAddressShow: !1,
                        form: {
                            id: void 0,
                            name: "",
                            phone: void 0,
                            address: "",
                            serviceLink: ""
                        },
                        refreshData: []
                    };
                },
                onLoad: function(e) {
                    this.reqData();
                    var t = e.raffle_log_id, n = e.customer_service_link;
                    t && this.openDia({
                        is_reward: 1,
                        id: +t,
                        customer_service_link: n
                    });
                },
                onHide: function() {
                    clearInterval(this.globalTimer);
                },
                onUnload: function() {
                    clearInterval(this.globalTimer);
                },
                onPullDownRefresh: function() {
                    this.reqData().then(function() {}).finally(function() {
                        e.stopPullDownRefresh();
                    });
                },
                methods: {
                    startGlobalInterval: function() {
                        var e = this;
                        clearInterval(this.globalTimer), this.globalCountDown(), this.globalTimer = setInterval(function() {
                            e.globalCountDown();
                        }, 1e3);
                    },
                    globalCountDown: function() {
                        var e = this, t = new Date().getTime();
                        this.list = this.list.map(function(n) {
                            var r = new Date(n.raffle_start_time.replace(/-/g, "/")).getTime() - t, a = "";
                            if (r > 0) {
                                var i = r / 1e3, o = Math.floor(i / 3600 / 24), c = Math.floor(i / 3600 % 24) > 9 ? Math.floor(i / 3600 % 24) : "0".concat(Math.floor(i / 3600 % 24)), s = Math.floor(i % 3600 / 60) > 9 ? Math.floor(i % 3600 / 60) : "0".concat(Math.floor(i % 3600 / 60)), u = Math.floor(i % 3600 % 60) > 9 ? Math.floor(i % 3600 % 60) : "0".concat(Math.floor(i % 3600 % 60));
                                a = "".concat(o, "天 ").concat(c, ":").concat(s, ":").concat(u);
                            } else r <= 0 && (0 !== n.is_reward || e.refreshData.includes(n.id) || (e.reqData(), 
                            e.refreshData.push(n.id)));
                            return f(f({}, n), {}, {
                                countdownStr: a
                            });
                        });
                    },
                    reqData: function() {
                        var t = s(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, e.showLoading(), t.next = 4, a.default.activity.reportMyGifts(this.activityId);

                                  case 4:
                                    (n = t.sent).data && n.data.length && (this.list = n.data, this.startGlobalInterval()), 
                                    t.next = 10;
                                    break;

                                  case 8:
                                    t.prev = 8, t.t0 = t.catch(0);

                                  case 10:
                                    return t.prev = 10, e.hideLoading(), t.finish(10);

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 0, 8, 10, 13 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    reqWinners: function() {
                        var t = s(r.default.mark(function t(n) {
                            var o, c, s, u;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, o = n.raffle_id, c = n.raffle_name, s = n.raffle_award_name, 
                                    e.showLoading(), t.next = 5, a.default.activity.reportWinerList(o);

                                  case 5:
                                    (u = t.sent).data && u.data.length ? (this.winnerList = u.data.map(function(e) {
                                        return f(f({}, e), {}, {
                                            activity_name: c,
                                            gift_name: s
                                        });
                                    }), this.winnerListShow = !0) : i.tip.error("中奖名单请求失败，请稍后重试"), t.next = 11;
                                    break;

                                  case 9:
                                    t.prev = 9, t.t0 = t.catch(0);

                                  case 11:
                                    return t.prev = 11, e.hideLoading(), t.finish(11);

                                  case 14:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 0, 9, 11, 14 ] ]);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    openDia: function(e) {
                        var t = this, n = e.is_reward, r = e.customer_service_link, i = e.id;
                        if (1 === n) {
                            var o = {
                                name: "",
                                phone: this.userInfo.phone,
                                address: ""
                            };
                            a.default.activity.reportMyGiftsAddress(i).then(function(e) {
                                var t = e.data;
                                t && (o.name = t.name, o.phone = t.phone, o.address = t.address);
                            }).finally(function() {
                                !function(e) {
                                    t.form.address = "   ", t.form.id = i, t.form.serviceLink = r, t.form.name = e.name, 
                                    t.form.phone = e.phone, t.inputAddressShow = !0, t.$nextTick(function() {
                                        t.form.address = e.address;
                                    });
                                }(o);
                            });
                        } else 2 === n && this.reqWinners(e);
                    },
                    handleSubmit: function() {
                        var t = s(r.default.mark(function t() {
                            var n, o, c, s, u, f, d;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = this.form, o = n.name, c = n.phone, s = n.address, u = n.id, f = n.serviceLink, 
                                    o && c && s) {
                                        t.next = 4;
                                        break;
                                    }
                                    return i.tip.error("请填写所有收货信息"), t.abrupt("return");

                                  case 4:
                                    if (/^\d{11}$/.test(c)) {
                                        t.next = 7;
                                        break;
                                    }
                                    return i.tip.error("请输入正确手机号"), t.abrupt("return");

                                  case 7:
                                    return t.prev = 7, e.showLoading(), t.next = 11, a.default.activity.reportAddressInfo({
                                        raffle_log_id: u,
                                        name: o,
                                        phone: c,
                                        address: s
                                    });

                                  case 11:
                                    return this.inputAddressShow = !1, d = this, t.next = 15, e.setClipboardData({
                                        data: f,
                                        success: function() {
                                            e.showToast({
                                                title: "提交成功，微信号已复制",
                                                icon: "none",
                                                duration: 3e3
                                            });
                                        }
                                    });

                                  case 15:
                                    d.form = {
                                        name: "",
                                        phone: void 0,
                                        address: ""
                                    }, d.reqData(), t.next = 21;
                                    break;

                                  case 19:
                                    t.prev = 19, t.t0 = t.catch(7);

                                  case 21:
                                    return t.prev = 21, e.hideLoading(), t.finish(21);

                                  case 24:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this, [ [ 7, 19, 21, 24 ] ]);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    inputAddressClose: function() {
                        this.form = {
                            id: void 0,
                            name: "",
                            phone: void 0,
                            address: "",
                            serviceLink: ""
                        };
                    },
                    computedTitle: function(e) {
                        return {
                            0: "https://imgcdn.huanjutang.com/file/2021/01/05/36a121866aae004355f4dcf269e1920a.png",
                            1: "https://imgcdn.huanjutang.com/file/2021/01/05/c39c720e2ab93fde41618eaa483f914b.png",
                            2: "https://imgcdn.huanjutang.com/file/2021/01/05/432deb45950be3b354cdab2a6dc15574.png"
                        }[e];
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    },
    "37dc": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("86e4")).default);
        }).call(this, n("543d").createPage);
    },
    "843b": function(e, t, n) {
        "use strict";
        var r = n("c3f0");
        n.n(r).a;
    },
    "86e4": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("988d"), a = n("bee0");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("843b");
        var o = n("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    "988d": function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.list, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    m0: e.computedTitle(t.is_reward)
                };
            }));
            e._isMounted || (e.e0 = function() {}, e.e1 = function() {}, e.e2 = function(t) {
                e.winnerList = [];
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    bee0: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("2e46"), a = n.n(r);
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = a.a;
    },
    c3f0: function(e, t, n) {}
}, [ [ "37dc", "common/runtime", "common/vendor", "subPackages/activity/common/vendor" ] ] ]);