require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/nowInteral" ], {
    "01c9": function(t, e, n) {},
    3824: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7a7b")).default);
        }).call(this, n("543d").createPage);
    },
    "4e16": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    },
    "7a7b": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4e16"), i = n("bad3");
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n("ce78");
        var r = n("f0c5"), o = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    bad3: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e5a08"), i = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = i.a;
    },
    ce78: function(t, e, n) {
        "use strict";
        var a = n("01c9");
        n.n(a).a;
    },
    e5a08: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(n("a34a")), i = r(n("4ec3")), s = n("b628");
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function l(t, e, n, a, i, s, r) {
                try {
                    var o = t[s](r), u = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var s = t.apply(e, n);
                        function r(t) {
                            l(s, a, i, r, o, "next", t);
                        }
                        function o(t) {
                            l(s, a, i, r, o, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var d = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiTab: function() {
                        n.e("components/UILayout/BusiTab").then(function() {
                            return resolve(n("f97f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    DatePicker: function() {
                        n.e("subPackages/me/pages/components/DatePicker").then(function() {
                            return resolve(n("ee72"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Empty: function() {
                        n.e("subPackages/me/pages/components/list/Empty").then(function() {
                            return resolve(n("8678"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiLoading: function() {
                        n.e("components/UILayout/BusiLoading").then(function() {
                            return resolve(n("ea8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BackToTop: function() {
                        n.e("subPackages/me/pages/components/BackToTop").then(function() {
                            return resolve(n("06b9"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiBottomLine: function() {
                        n.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(n("d754"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        type: 0,
                        tabList: [ {
                            id: 0,
                            text: "所有积分",
                            dataName: "",
                            dataContent: ""
                        }, {
                            id: 1,
                            text: "朋友圈转发及其他积分",
                            dataName: "",
                            dataContent: ""
                        } ],
                        date: [ "all" ],
                        baseInfo: {},
                        listData: [],
                        loading: !0,
                        userInfo: this.$store.getters.userInfo
                    };
                },
                computed: {
                    showEmpty: function() {
                        var t = !this.loading && !this.listData.length, e = !this.loading && this.listData.length && "all" !== this.date[0] && 0 === this.listData[0].num;
                        return t || e;
                    }
                },
                watch: {
                    date: function() {
                        this.integralDates();
                    }
                },
                onShareAppMessage: function() {
                    return s.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/nowInteral?inviter_id=".concat(this.userinfo.sales_man_id));
                },
                onPullDownRefresh: function() {
                    this.integralBaseInfo(), this.integralDates(), t.stopPullDownRefresh();
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode(), 
                    this.$refs.share && this.$refs.share.pageScroll(t);
                },
                onLoad: function() {
                    var e = f(a.default.mark(function e(n) {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.$refs.busiNavHeader.setTransparentMode(), e.next = 3, i.default.isSaleMan();

                              case 3:
                                1 !== e.sent.isSalesMan ? t.redirectTo({
                                    url: "/subPackages/me/pages/salesMan?inviter_id=".concat(n.inviter_id)
                                }) : (this.integralBaseInfo(), this.integralDates());

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    switchBarHandle: function(t) {
                        this.type = t, this.integralDates();
                    },
                    integralBaseInfo: function() {
                        var t = f(a.default.mark(function t() {
                            var e, n, s;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.default.integralBaseInfo();

                                  case 2:
                                    e = t.sent, n = e.data, s = void 0 === n ? {} : n, this.baseInfo = s;

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    integralDates: function() {
                        var t = f(a.default.mark(function t() {
                            var e, n, s = this;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, t.next = 3, i.default.integralDates({
                                        date: "all" === this.date[0] ? "" : this.date.join("-"),
                                        type: this.type
                                    });

                                  case 3:
                                    if (e = t.sent, n = e.data, this.loading = !1, n) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 8:
                                    this.listData = n.map(function(t, e) {
                                        return u(u({}, t), {}, {
                                            show: e < 2 && 0 !== t.num,
                                            loading: !1,
                                            data: []
                                        });
                                    }), this.$nextTick(function() {
                                        s.listData.length && s.integralList(0), s.listData.length > 1 && s.integralList(1);
                                    });

                                  case 10:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    hideToggle: function(t, e) {
                        0 !== t.num && (this.$set(this.listData[e], "show", !this.listData[e].show), this.listData[e].show && !this.listData[e].data.length && (this.$set(this.listData[e], "data", []), 
                        this.integralList(e)), this.$set(this.listData, e, this.listData[e]));
                    },
                    integralList: function() {
                        var t = f(a.default.mark(function t(e) {
                            var n, s, r, o;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.listData[e].loading = !0, n = this.listData[e].date, t.next = 4, i.default.integralList({
                                        date: n,
                                        type: this.type,
                                        page: 1,
                                        size: 999
                                    });

                                  case 4:
                                    s = t.sent, r = s.data, o = (void 0 === r ? {} : r).data || [], this.$set(this.listData[e], "data", o), 
                                    this.$set(this.listData[e], "loading", !1), this.$set(this.listData, e, this.listData[e]);

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    goTaskCenter: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/taskCenter?salesManId=".concat(this.baseInfo.id)
                        });
                    }
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    }
}, [ [ "3824", "common/runtime", "common/vendor" ] ] ]);