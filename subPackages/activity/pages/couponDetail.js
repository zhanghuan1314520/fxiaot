require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/activity/pages/couponDetail" ], {
    "0cfe": function(e, t, n) {
        "use strict";
        var r = n("265ad");
        n.n(r).a;
    },
    "265ad": function(e, t, n) {},
    4827: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.loaded && e.recommendSalesMan.length > 0 ? e.__map(e.recommendSalesMan, function(t, n) {
                return {
                    $orig: e.__get_orig(t),
                    m0: e.findStr(t.sales_man_avatar, "?")
                };
            }) : null), n = e.loaded && e.receiveDialog && e.userInfo && e.userInfo.phone ? e._f("phone")(e.userInfo.phone) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    f0: n
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "5af3": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("4827"), o = n("ef0b");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("0cfe"), n("9070");
        var i = n("f0c5"), c = Object(i.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    "6cb2": function(e, t, n) {},
    9070: function(e, t, n) {
        "use strict";
        var r = n("6cb2");
        n.n(r).a;
    },
    d280: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("a34a")), o = i(n("4ec3")), a = n("b628");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t) {
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
            function s(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i), u = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function f(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);
                        function i(e) {
                            s(a, r, o, i, c, "next", e);
                        }
                        function c(e) {
                            s(a, r, o, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            var h = {
                components: {
                    BusiAuthNavigator: function() {
                        n.e("components/UILayout/BusiAuthNavigator").then(function() {
                            return resolve(n("aa79"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                filters: {
                    phone: function(e) {
                        var t, n, r = e;
                        return r && 11 === r.length ? ((t = r = l(r)).splice.apply(t, [ 3, 4 ].concat(l("*".repeat(4)))), 
                        r.join("")) : r && r.length > 2 ? ((n = r = l(r)).splice.apply(n, [ 1, r.length - 2 ].concat(l("*".repeat(r.length - 2)))), 
                        r.join("")) : r;
                    }
                },
                data: function() {
                    return {
                        loaded: !1,
                        where: "",
                        showPhone: !0,
                        id: 0,
                        item: {
                            userPhone: ""
                        },
                        alertShowFlag: !1,
                        alertShow: 1,
                        toastMsg: "",
                        project_id: 0,
                        recommendSalesMan: [],
                        urls: [],
                        baseDetail: {
                            name: "",
                            cover: ""
                        },
                        receiveDialog: !1,
                        receiveItem: null
                    };
                },
                onLoad: function() {
                    var t = f(r.default.mark(function t(n) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.id = n.id, this.project_id = n.project_id, e.showLoading(), this.getCouponDetail(this.id), 
                                !this.project_id) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 7, this.getBaseDetail();

                              case 7:
                                this.getRecommendSalesMan();

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                computed: {
                    userInfo: {
                        get: function() {
                            return this.$store.getters.userInfo;
                        }
                    },
                    userPhone: function() {
                        if (this.item.userPhone) {
                            if (this.showPhone) return "".concat(this.item.userPhone).replace(/(\d{3})\d{4}(\d{4})/, "$1 **** $2");
                            var e = "".concat(this.item.userPhone);
                            return e.replace(/(\d{3})\d{4}(\d{4})/, "$1 ".concat(e.substr(3, 4), " $2"));
                        }
                        return "";
                    }
                },
                watch: {
                    alertShowFlag: function(e) {
                        var t = this;
                        e && setTimeout(function() {
                            t.alertShowFlag = !1;
                        }, 3e3);
                    }
                },
                methods: {
                    btnEventTrack: function() {},
                    findStr: function(e, t) {
                        return e.indexOf(t) > -1;
                    },
                    handleOperate: function(e) {
                        this.receiveItem = e, this.receiveDialog = !0;
                    },
                    receiveConfirm: function() {
                        this.receiveDialog = !1, this.receiveThis();
                    },
                    receiveClose: function() {
                        this.receiveDialog = !1;
                    },
                    getBaseDetail: function() {
                        var e = f(r.default.mark(function e() {
                            var t = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    o.default.lotteryDetail.getDetails(this.project_id).then(function(e) {
                                        e.data && (t.baseDetail = e.data);
                                    });

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    getRecommendSalesMan: function() {
                        var e = f(r.default.mark(function e() {
                            var t, n = this;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.default.getLotsalesMan(this.project_id);

                                  case 2:
                                    0 === (t = e.sent).code && (this.recommendSalesMan = t.data || [], this.urls = this.recommendSalesMan.map(function(e) {
                                        return "navigateTo-authphone://subPackages/me/pages/chatInterface?user_id=".concat(e.session_id, "&project_id=").concat(n.project_id, "&project_name=").concat(n.baseDetail.name, "&project_img=").concat(n.baseDetail.cover);
                                    }));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    receiveThis: function() {
                        var e = this, t = this.receiveItem;
                        o.default.activity.receiveCoupon(t.id).then(function(t) {
                            0 === t.code && (e.alertShowFlag = !0, e.toastMsg = t.message || "领取成功", e.alertShow = "1"), 
                            e.where = "dialog", e.where && (e.where = ""), e.getCouponDetail(e.id);
                        });
                    },
                    handleShowPhone: function(e) {
                        this.showPhone = e;
                    },
                    getCouponDetail: function(t) {
                        var n = this;
                        o.default.activity.couponDetail(t).then(function(t) {
                            n.loaded = !0, e.hideLoading(), parseInt(t.code, 10) ? a.tip.toast(t.msg || "获取优惠券详情失败") : n.item = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                                        u(e, t, n[t]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                    });
                                }
                                return e;
                            }({}, t.data);
                        }).catch(function() {
                            n.loaded = !0, e.hideLoading();
                        });
                    },
                    onPullDownRefresh: function() {
                        var t = f(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.getCouponDetail(this.id);

                                  case 2:
                                    e.stopPullDownRefresh();

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = h;
        }).call(this, n("543d").default);
    },
    ef0b: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("d280"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    ff6e: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("5af3")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "ff6e", "common/runtime", "common/vendor" ] ] ]);