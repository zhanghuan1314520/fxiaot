require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/editInfo" ], {
    "1d3e": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("bcac")).default);
        }).call(this, n("543d").createPage);
    },
    "1eb7": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("46f6"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    "46f6": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = c(n("a34a")), a = n("2f62"), o = c(n("4ec3")), u = n("b628");
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, r, a, o, u) {
                try {
                    var c = e[o](u), i = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, a);
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
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        l(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var d = {
                filters: {
                    typeText: function(e) {
                        return "请填写".concat({
                            phone: "手机号",
                            nickName: "昵称",
                            content: "个人介绍"
                        }[e]);
                    }
                },
                data: function() {
                    return {
                        type: "",
                        val: "",
                        isSalesMan: ""
                    };
                },
                computed: {
                    userInfo: function() {
                        return this.$store.getters.userInfo;
                    }
                },
                onLoad: function(e) {
                    this.type = e.type, this.val = e.val, this.isSalesMan = e.isSalesMan;
                },
                methods: f(f({}, (0, a.mapActions)({
                    setUserInfo: "setUserInfo"
                })), {}, {
                    submit: function() {
                        var t = function(e) {
                            return function() {
                                var t = this, n = arguments;
                                return new Promise(function(r, a) {
                                    var o = e.apply(t, n);
                                    function u(e) {
                                        i(o, r, a, u, c, "next", e);
                                    }
                                    function c(e) {
                                        i(o, r, a, u, c, "throw", e);
                                    }
                                    u(void 0);
                                });
                            };
                        }(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ("false" !== this.isSalesMan) {
                                        t.next = 12;
                                        break;
                                    }
                                    if ("content" !== this.type) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.next = 4, o.default.editAvatar(this.userInfo.avatarUrl, this.userInfo.nickName, this.val);

                                  case 4:
                                    n = t.sent, t.next = 10;
                                    break;

                                  case 7:
                                    return t.next = 9, o.default.editAvatar(this.userInfo.avatarUrl, this.val, this.userInfo.individual_resume);

                                  case 9:
                                    n = t.sent;

                                  case 10:
                                    t.next = 15;
                                    break;

                                  case 12:
                                    return t.next = 14, o.default.sales.updateSalesMan({
                                        content: this.val
                                    });

                                  case 14:
                                    n = t.sent;

                                  case 15:
                                    0 === parseInt(n.code, 10) ? ("false" === this.isSalesMan && u.tip.toast("审核成功后生效"), 
                                    e.navigateBack()) : u.tip.toast(n.message || "修改失败", "", "none");

                                  case 16:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                })
            };
            t.default = d;
        }).call(this, n("543d").default);
    },
    "4eed": function(e, t, n) {
        "use strict";
        var r = n("6a40");
        n.n(r).a;
    },
    "6a40": function(e, t, n) {},
    "90a9": function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, "content" !== e.type ? e._f("typeText")(e.type) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    f0: t
                }
            });
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    bcac: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("90a9"), a = n("1eb7");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("4eed");
        var u = n("f0c5"), c = Object(u.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    }
}, [ [ "1d3e", "common/runtime", "common/vendor" ] ] ]);