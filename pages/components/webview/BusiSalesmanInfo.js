(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/webview/BusiSalesmanInfo" ], {
    "0385": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = c(t("a34a")), o = t("2f62"), r = t("f4fd"), s = c(t("4ec3"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, n, t, a, o, r, s) {
                try {
                    var c = e[r](s), u = c.value;
                } catch (e) {
                    return void t(e);
                }
                c.done ? n(u) : Promise.resolve(u).then(a, o);
            }
            function i(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    n && (a = a.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    })), t.push.apply(t, a);
                }
                return t;
            }
            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? i(Object(t), !0).forEach(function(n) {
                        l(e, n, t[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                    });
                }
                return e;
            }
            function l(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            var p = {
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
                    isSalesMan: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {};
                },
                computed: {
                    userInfo: {
                        get: function() {
                            return this.$store.getters.userInfo;
                        }
                    }
                },
                methods: f(f(f({}, (0, o.mapActions)({
                    setUserInfo: "setUserInfo"
                })), (0, o.mapMutations)({
                    setEventHandler: "SET_EVENTHANDLER"
                })), {}, {
                    toSalesman: function() {
                        e.navigateTo({
                            url: "/pages/salesMan/detail?user_id=".concat(this.salesManInfo.user.id)
                        });
                    },
                    navigatoHandle: function() {
                        e.navigateTo({
                            url: "/subPackages/me/pages/chatInterface?user_id=".concat(this.salesManInfo.user.id)
                        });
                    },
                    getUserInfo: function(n) {
                        var t = this;
                        (0, r.updateUserInfo)().then(function(a) {
                            if ((0, r.setUserInfo)(a), t.setUserInfo(a), "phone" === n && t.setEventHandler(t.callPhone.bind(t)), 
                            t.userInfo.phone) "chat" === n && t.navigatoHandle(), "phone" === n && t.callPhone(); else {
                                var o = "chat" === n ? encodeURIComponent("/subPackages/me/pages/chatInterface?user_id=".concat(t.salesManInfo.user.id)) : "";
                                e.navigateTo({
                                    url: "/subPackages/tools/pages/telLogin?direct=".concat(o)
                                });
                            }
                        }).catch(function() {});
                    },
                    callPhone: function() {
                        var n = function(e) {
                            return function() {
                                var n = this, t = arguments;
                                return new Promise(function(a, o) {
                                    var r = e.apply(n, t);
                                    function s(e) {
                                        u(r, a, o, s, c, "next", e);
                                    }
                                    function c(e) {
                                        u(r, a, o, s, c, "throw", e);
                                    }
                                    s(void 0);
                                });
                            };
                        }(a.default.mark(function n() {
                            var t, o;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t = this.salesManInfo.phone, !/^(0|1)\d{10}$/.test(t)) {
                                        n.next = 8;
                                        break;
                                    }
                                    return n.next = 4, s.default.getPhoneNum(this.salesManInfo.id, 1);

                                  case 4:
                                    return o = n.sent, 0 === parseInt(o.code, 10) && (t = o.data.phone), e.makePhoneCall({
                                        phoneNumber: t
                                    }), n.abrupt("return");

                                  case 8:
                                    e.makePhoneCall({
                                        phoneNumber: t
                                    });

                                  case 9:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()
                })
            };
            n.default = p;
        }).call(this, t("543d").default);
    },
    "03fd": function(e, n, t) {},
    "8d72": function(e, n, t) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    a0f6: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("8d72"), o = t("d0e6");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("a3a6");
        var s = t("f0c5"), c = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    a3a6: function(e, n, t) {
        "use strict";
        var a = t("03fd");
        t.n(a).a;
    },
    d0e6: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("0385"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/webview/BusiSalesmanInfo-create-component", {
    "pages/components/webview/BusiSalesmanInfo-create-component": function(e, n, t) {
        t("543d").createComponent(t("a0f6"));
    }
}, [ [ "pages/components/webview/BusiSalesmanInfo-create-component" ] ] ]);