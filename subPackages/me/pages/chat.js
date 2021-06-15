require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/chat" ], {
    "0298": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.guideVisible = !1;
            });
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "175f": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7ec9"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    "2dfe": function(t, e, n) {},
    "45ec": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("62ab")).default);
        }).call(this, n("543d").createPage);
    },
    "5e6a": function(t, e, n) {
        "use strict";
        var a = n("2dfe");
        n.n(a).a;
    },
    "62ab": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("0298"), r = n("175f");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("5e6a");
        var i = n("f0c5"), u = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "7ec9": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
                return a;
            }
            function s(t, e, n, a, r, o, i) {
                try {
                    var u = t[o](i), s = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(s) : Promise.resolve(s).then(a, r);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function i(t) {
                            s(o, a, r, i, u, "next", t);
                        }
                        function u(t) {
                            s(o, a, r, i, u, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var l = {
                components: {
                    ScrollItem: function() {
                        n.e("subPackages/me/pages/components/chat/ScrollItem").then(function() {
                            return resolve(n("77bb"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Total: function() {
                        n.e("subPackages/me/pages/components/list/Total").then(function() {
                            return resolve(n("897d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Empty: function() {
                        n.e("subPackages/me/pages/components/list/Empty").then(function() {
                            return resolve(n("8678"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiBottomLine: function() {
                        n.e("components/UILayout/BusiBottomLine").then(function() {
                            return resolve(n("d754"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiLoading: function() {
                        n.e("components/UILayout/BusiLoading").then(function() {
                            return resolve(n("ea8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Guide: function() {
                        n.e("subPackages/me/pages/components/chat/Guide").then(function() {
                            return resolve(n("454d"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        projectName: "杭州房小团",
                        scrolled: !1,
                        timeStyle: 1,
                        buyTag: "",
                        page: 1,
                        loading: !0,
                        end: !1,
                        chatTotal: {},
                        chatList: new Array(10).fill({
                            skeleton: !0
                        }),
                        guideVisible: !1,
                        firstLoad: !0
                    };
                },
                onPageScroll: function(t) {
                    t.scrollTop > 32 ? (this.scrolled = !0, this.$refs.busiNavHeader.setWhiteMode()) : (this.scrolled = !1, 
                    this.$refs.busiNavHeader.setTransparentMode());
                },
                onLoad: function() {
                    this.$refs.busiNavHeader.setTransparentMode(), this.getChatTotal(), this.getChatList(), 
                    this.firstLoad = !1;
                },
                onPullDownRefresh: function() {
                    this.loading || (this.getChatList(), t.stopPullDownRefresh());
                },
                onReachBottom: function() {
                    this.loading || this.getChatList(!0);
                },
                methods: {
                    onChange: function(t) {
                        this.timeStyle = t.timeStyle, this.buyTag = t.buyTag, this.getChatTotal(), this.getChatList();
                    },
                    getChatTotal: function() {
                        var t = c(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.chatTotal({
                                        buy_tag: this.buyTag,
                                        time_style: this.timeStyle
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, this.chatTotal = n || {};

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getChatList: function() {
                        var e = c(a.default.mark(function e(n) {
                            var o, u;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!n) {
                                        e.next = 6;
                                        break;
                                    }
                                    if (!this.end) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 3:
                                    this.page += 1, e.next = 8;
                                    break;

                                  case 6:
                                    this.chatList = this.firstLoad ? new Array(10).fill({
                                        skeleton: !0
                                    }) : [], this.page = 1;

                                  case 8:
                                    return this.loading = !0, e.next = 11, r.default.chatList({
                                        page: this.page,
                                        buy_tag: this.buyTag,
                                        time_style: this.timeStyle
                                    });

                                  case 11:
                                    if (o = e.sent, u = o.data, this.loading = !1, u) {
                                        e.next = 16;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 16:
                                    this.chatList = n ? [].concat(i(this.chatList), i(u)) : u, this.end = u.length < 10, 
                                    !t.getStorageSync("loadedChatPage") && u.length && (this.guideVisible = !0, t.setStorageSync("loadedChatPage", 1));

                                  case 20:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "45ec", "common/runtime", "common/vendor" ] ] ]);