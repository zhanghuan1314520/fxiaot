(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "08db": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("2f62"), a = c(n("c909")), o = n("b628"), i = c(n("dcf6"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        f(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var d = n("f4fd").getUserInfo, h = n("4ec3"), p = {
                computed: u(u({}, (0, r.mapState)({
                    onChatInit: function(e) {
                        return e.chat.init;
                    },
                    onSingleChat: function(e) {
                        return e.chat.singleChat;
                    },
                    onOnline: function(e) {
                        return e.chat.online;
                    },
                    onPullChat: function(e) {
                        return e.chat.pullChat;
                    },
                    onEventChat: function(e) {
                        return e.chat.eventChat;
                    },
                    onMyCustomer: function(e) {
                        return e.chat.myCustomer;
                    }
                })), {}, {
                    onUnReadMessage: function() {
                        return [ this.onOnline, this.onSingleChat, this.onPullChat, this.onEventChat ];
                    }
                }),
                watch: {
                    onChatInit: function(e) {
                        h.chat.online(e.client_id);
                    },
                    onUnReadMessage: function() {
                        this.getUnReadMessage();
                    },
                    onMyCustomer: function() {
                        this.getUnReadCustomerMessage();
                    }
                },
                methods: u(u(u({}, (0, r.mapActions)({
                    setUserInfo: "setUserInfo",
                    setLoginFlag: "setLoginFlag",
                    getUnReadMessage: "chat/getUnReadMessage",
                    getUnReadCustomerMessage: "chat/getUnReadCustomerMessage"
                })), (0, r.mapMutations)({
                    setShareStatus: "system/SET_SHARE_STATUS"
                })), {}, {
                    getUserPhoneInfo: function() {
                        var t, n;
                        t = (e.getSystemInfoSync() || {}).statusBarHeight || 20, n = e.getMenuButtonBoundingClientRect();
                        var r = t + 44;
                        o.cache.set("user-phone-info", {
                            statusBarHeight: t,
                            menuButtonInfo: n,
                            navHight: r
                        });
                    },
                    constructor: function() {
                        this.use("promisify"), this.use("requestfix");
                    },
                    getLocation: function() {
                        e.getLocation({
                            type: "gcj02",
                            success: function(e) {
                                setTimeout(function() {
                                    h.userLoginLog("".concat(e.latitude, ",").concat(e.longitude)).then(function() {});
                                }, 500);
                            },
                            fail: function() {}
                        });
                    },
                    checkVersion: function() {
                        if (e.getUpdateManager) {
                            var t = e.getUpdateManager();
                            t.onUpdateReady(function() {
                                t.applyUpdate();
                            });
                        }
                    },
                    checkAddPoint: function(e) {
                        e.query && e.query.redirect && {
                            "pages/index": !0,
                            "pages/lotteryDetail": !0,
                            "pages/consult/index": !0
                        }[e.path] || "subPackages/tools/pages/verify" !== e.path && new i.default(e.query).check();
                    },
                    saveShareInfo: function(e) {
                        var t = e.query, n = e.path, r = t.redirect ? decodeURIComponent(t.redirect) : n, a = t.u_id;
                        o.cache.set("share_path", r), o.cache.set("share_session_id", a);
                    },
                    bindSalesman: function(e) {
                        e.query && e.query.u_id && h.bindSalesman({
                            shareUserId: e.query.u_id,
                            sales_man_id: e.query.s_id || "",
                            path: JSON.stringify(e)
                        }).then(function() {});
                    },
                    getConfig: function() {
                        var e = this;
                        h.pageConfig().then(function(t) {
                            0 === t.code && t.data && void 0 !== t.data.enable_share && e.setShareStatus(t.data.enable_share);
                        });
                    },
                    mapSaData: function(e) {
                        if (e.query && e.query.scene) {
                            var t = decodeURIComponent(e.query.scene), n = (0, a.default)(t.indexOf("?") > -1 ? "" : "?".concat(t)).search(!0);
                            e.query = u({}, n);
                        }
                        return e;
                    }
                }),
                onShow: function(e) {
                    var t = this;
                    if (this.getUserPhoneInfo(), this.checkVersion(), o.cache.set("appOnShowOptions", JSON.stringify(e)), 
                    this.setUserInfo(d()), this.setUserInfo(d()), this.getConfig(), e.query.scene) {
                        var n = e.query.scene, r = (0, a.default)("?".concat(decodeURIComponent(n))).search(!0).hid || "";
                        r ? h.getDecodeHashParams(r).then(function(n) {
                            if (n.data) {
                                var r = n.data && (0, a.default)("?".concat(decodeURIComponent(n.data.path))).search(!0), o = Object.assign(e, {
                                    query: r
                                });
                                t.bindSalesman(o), t.checkAddPoint(o), t.saveShareInfo(o);
                            }
                            t.$sa.quick("appShow", e);
                        }) : (this.bindSalesman(e), this.checkAddPoint(e), this.saveShareInfo(e), this.$sa.quick("appShow", this.mapSaData(e)));
                    } else this.bindSalesman(e), this.checkAddPoint(e), this.saveShareInfo(e), this.$sa.quick("appShow", e);
                    e.query.web_open_id && (o.cache.remove("userinfo"), h.sales.bindUser(e.query.web_open_id).then()), 
                    this.getUnReadMessage(), this.getUnReadCustomerMessage();
                },
                onLaunch: function(e) {
                    var t = this;
                    if (e.query.scene) {
                        var n = e.query.scene, r = (0, a.default)("?".concat(decodeURIComponent(n))).search(!0).hid || "";
                        r ? h.getDecodeHashParams(r).then(function(n) {
                            var r = n.data && (0, a.default)("?".concat(decodeURIComponent(n.data.path))).search(!0);
                            Object.assign(e, {
                                query: r
                            }), t.$sa.quick("appLaunch", e);
                        }) : this.$sa.quick("appLaunch", this.mapSaData(e));
                    } else this.$sa.quick("appLaunch", e);
                    this.getUserPhoneInfo(), setTimeout(function() {
                        t.getLocation();
                    });
                },
                onError: function(e) {
                    try {
                        this.$report.report.__reportErrorReq({
                            error: JSON.stringify(e, Object.getOwnPropertyNames(e))
                        }, [ "globalError" ]);
                    } catch (e) {
                        console.error(e);
                    }
                },
                onPageNotFound: function(e) {
                    try {
                        this.$report.report.__reportErrorReq({
                            error: JSON.stringify(e, Object.getOwnPropertyNames(e))
                        }, [ "onPageNotFoundError" ]);
                    } catch (e) {
                        console.error(e);
                    }
                },
                globalData: {
                    signStatus: 0,
                    loginInfo: null,
                    me_message: !1,
                    my_message: !1,
                    refresh_me: !1,
                    showUpdataView: !1,
                    content: "",
                    version: "",
                    hideTip: !0
                }
            };
            t.default = p;
        }).call(this, n("543d").default);
    },
    "23be": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("08db"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    "3dfd": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("23be");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("5c0b");
        var o = n("f0c5"), i = Object(o.a)(r.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = i.exports;
    },
    "56d7": function(e, t, n) {
        "use strict";
        (function(e) {
            n("6cdc");
            var t = c(n("66fd")), r = c(n("3dfd"));
            n("4801");
            var a = c(n("f4c7"));
            n("fc2b"), n("4972");
            var o = c(n("fc73"));
            n("dcf6"), n("afe5");
            var i = c(n("4360"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            t.default.config.productionTip = !1, r.default.mpType = "app", t.default.prototype.$eventBus = new t.default(), 
            t.default.prototype.$report = o.default, t.default.prototype.$store = i.default, 
            t.default.prototype.$sa = a.default, e(new t.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({
                store: i.default
            }, r.default))).$mount();
        }).call(this, n("543d").createApp);
    },
    "5c0b": function(e, t, n) {
        "use strict";
        var r = n("b061");
        n.n(r).a;
    },
    b061: function(e, t, n) {}
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);