(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/webview/BusiSalesmanInfoType2" ], {
    "1fb7": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("edf0"), o = t("8cc3");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("cc76");
        var s = t("f0c5"), c = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "518e": function(e, n, t) {},
    "8cc3": function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("a7aa"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    a7aa: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = u(t("a34a")), o = t("2f62"), r = t("f4fd"), s = u(t("4ec3")), c = t("ca00");
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, n, t, a, o, r, s) {
                try {
                    var c = e[r](s), u = c.value;
                } catch (e) {
                    return void t(e);
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o);
            }
            function f(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    })), t.push.apply(t, a);
                }
                return t;
            }
            function l(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? f(Object(t), !0).forEach(function(n) {
                        p(e, n, t[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                    });
                }
                return e;
            }
            function p(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            var d = {
                props: {
                    isShowSalesmanInfo: {
                        type: Boolean,
                        default: !1
                    },
                    salesManInfo: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    isAerial: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isFullScreen: c.isIPhoneX
                    };
                },
                computed: l({}, (0, o.mapGetters)({
                    userInfo: "userInfo"
                })),
                methods: l(l(l({}, (0, o.mapActions)({
                    setUserInfo: "setUserInfo"
                })), (0, o.mapMutations)({
                    setEventHandler: "SET_EVENTHANDLER"
                })), {}, {
                    toSaleMan: function() {
                        e.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(this.salesManInfo.session_id)
                        });
                    },
                    navigateToChat: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(this.salesManInfo.session_id)
                        });
                    },
                    callPhone: function() {
                        var n = function(e) {
                            return function() {
                                var n = this, t = arguments;
                                return new Promise(function(a, o) {
                                    var r = e.apply(n, t);
                                    function s(e) {
                                        i(r, a, o, s, c, "next", e);
                                    }
                                    function c(e) {
                                        i(r, a, o, s, c, "throw", e);
                                    }
                                    s(void 0);
                                });
                            };
                        }(a.default.mark(function n() {
                            var t, o, r, c, u;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t = this.salesManInfo.phone, o = this.salesManInfo.sales_man_id, !/^(0|1)\d{10}$/.test(t)) {
                                        n.next = 9;
                                        break;
                                    }
                                    return n.next = 5, s.default.getPhoneNum(o, 1);

                                  case 5:
                                    r = n.sent, c = r.code, u = r.data, 0 === Number(c) && (t = u.phone);

                                  case 9:
                                    e.makePhoneCall({
                                        phoneNumber: t
                                    });

                                  case 10:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    getUserInfo: function(n) {
                        var t = this;
                        (0, r.updateUserInfo)().then(function(a) {
                            if (t.setUserInfo(a), t.userInfo.phone) "chat" === n && t.navigateToChat(), "call" === n && t.callPhone(); else if ("chat" === n) {
                                var o = encodeURIComponent("/subPackages/me/pages/chatInterface?user_id=".concat(t.salesManInfo.session_id));
                                e.navigateTo({
                                    url: "/subPackages/tools/pages/telLogin?direct=".concat(o)
                                });
                            } else "call" === n && (t.setEventHandler(t.callPhone.bind(t)), e.navigateTo({
                                url: "/subPackages/tools/pages/telLogin"
                            }));
                        }).catch(function() {});
                    }
                })
            };
            n.default = d;
        }).call(this, t("543d").default);
    },
    cc76: function(e, n, t) {
        "use strict";
        var a = t("518e");
        t.n(a).a;
    },
    edf0: function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/webview/BusiSalesmanInfoType2-create-component", {
    "pages/components/webview/BusiSalesmanInfoType2-create-component": function(e, n, t) {
        t("543d").createComponent(t("1fb7"));
    }
}, [ [ "pages/components/webview/BusiSalesmanInfoType2-create-component" ] ] ]);