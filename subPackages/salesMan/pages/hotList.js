(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/hotList" ], {
    "0c2f": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("8599"), s = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = s.a;
    },
    "0c8e": function(e, t, n) {},
    "157e": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("531e")).default);
        }).call(this, n("543d").createPage);
    },
    "531e": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("bf82"), s = n("0c2f");
        for (var i in s) "default" !== i && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(i);
        n("e8ad");
        var r = n("f0c5"), u = Object(r.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    8599: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = u(n("a34a")), s = u(n("4ec3")), i = n("b628"), r = u(n("4919"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, a, s, i, r) {
                try {
                    var u = e[i](r), o = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(o) : Promise.resolve(o).then(a, s);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, s) {
                        var i = e.apply(t, n);
                        function r(e) {
                            o(i, a, s, r, u, "next", e);
                        }
                        function u(e) {
                            o(i, a, s, r, u, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var l = n("ca00"), f = n("79b9"), d = null, h = {
                components: {
                    Dialog: function() {
                        n.e("components/UILayout/BusiDialog").then(function() {
                            return resolve(n("6bfa"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BaseCallPhone: function() {
                        n.e("components/BaseCallPhone").then(function() {
                            return resolve(n("65ce"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Authorization: function() {
                        n.e("components/Authorization").then(function() {
                            return resolve(n("5326"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                mixins: [ r.default ],
                data: function() {
                    return {
                        items: new Array(4).fill({
                            skeleton: !0
                        }),
                        topItems: [],
                        me: [],
                        defaultAvatar: "https://imgcdn.huanjutang.com/assets/img/2021122191988081.png",
                        more: !0,
                        username: "",
                        typeIndex: "liveness",
                        tipsContent: "",
                        urls: {},
                        meUrls: [],
                        copyTips: !1
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("这里可以查看置业顾问活跃度排行榜");
                },
                onReachBottom: function() {
                    this.more && (this.items = d, this.more = !1, d = null);
                },
                onPullDownRefresh: function() {
                    var t = c(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

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
                }(),
                onUnload: function() {
                    d = null;
                },
                onLoad: function() {
                    var e = c(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                computed: {
                    userInfo: {
                        get: function() {
                            return this.$store.getters.userInfo;
                        }
                    },
                    tabName: function() {
                        return {
                            liveness: "总活跃榜",
                            yesterday: "优选置业顾问",
                            new: "新人榜"
                        }[this.typeIndex];
                    }
                },
                watch: {
                    items: function(e) {
                        var t = this;
                        this.urls = {}, Object.keys(e).forEach(function(n) {
                            t.urls[n] = "/subPackages/me/pages/chatInterface?user_id=".concat(e[n].session_id);
                        });
                    },
                    me: function(e) {
                        var t = this;
                        this.meUrls = [], Object.keys(e).forEach(function(n) {
                            t.meUrls.push("/subPackages/me/pages/chatInterface?user_id=".concat(e[n].session_id));
                        });
                    }
                },
                methods: {
                    emptyFunction: function() {},
                    copyCode: function(t) {
                        var n = this;
                        e.setClipboardData({
                            data: t,
                            success: function() {
                                n.copyTips = !0;
                            }
                        });
                    },
                    tipsHandle: function() {
                        this.tipsContent = "";
                    },
                    changeType: function() {
                        var e = c(a.default.mark(function e(t) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.typeIndex = t, e.next = 3, this.reload();

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toIMPage: function(t) {
                        e.navigateTo({
                            url: t
                        });
                    },
                    likeMe: function() {
                        var e = this;
                        this.me[0].is_like = 1 === parseInt(this.me[0].is_like, 10) ? 2 : 1, s.default.salesManLike(this.me[0].id).then(function(t) {
                            0 === parseInt(t.data.status, 10) ? (e.me[0].is_like = 0, e.me[0].sales_man_like_num -= 1) : (e.me[0].is_like = 1, 
                            e.me[0].sales_man_like_num += 1);
                        });
                    },
                    toJoinSalesMan: function() {
                        var t = c(a.default.mark(function t() {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.default.sales.hasCachedData();

                                  case 2:
                                    0 === (n = t.sent).code && 0 === n.data.is_checked ? e.navigateTo({
                                        url: l.webview2Url("".concat(f.webviewHost, "/salesman/registry?_t=").concat(Date.now()))
                                    }) : e.navigateTo({
                                        url: "/subPackages/me/pages/salesMan"
                                    });

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    like: function(e) {
                        var t = this.items[e];
                        t.is_like = 1 === parseInt(t.is_like, 10) ? 2 : 1, s.default.salesManLike(t.id).then(function(e) {
                            1 === parseInt(e.data.status, 10) ? (t.is_like = 1, t.sales_man_like_num += 1) : (t.is_like = 0, 
                            t.sales_man_like_num -= 1);
                        });
                    },
                    topRankToDetail: function(t) {
                        t && !t.id || !t.session_id || e.navigateTo({
                            url: "".concat(this.jumpUrl).concat(t.session_id)
                        });
                    },
                    reload: function() {
                        var e = c(a.default.mark(function e() {
                            var t, n, i, r, u, o = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.tipsContent = "", e.next = 3, s.default.sales.salesManRank(this.typeIndex);

                                  case 3:
                                    t = e.sent, n = t.data, this.more = !0, this.topItems = n.top, n.mine && (this.me = [ t.data.mine ]), 
                                    i = {}, r = n.ranking, u = 4;

                                  case 11:
                                    if (!(u <= 10)) {
                                        e.next = 18;
                                        break;
                                    }
                                    if (r && r[u]) {
                                        e.next = 14;
                                        break;
                                    }
                                    return e.abrupt("break", 18);

                                  case 14:
                                    i[String(u)] = r[u];

                                  case 15:
                                    u += 1, e.next = 11;
                                    break;

                                  case 18:
                                    this.items = i, d = r, r = null, s.default.getGuideImage("sales_man_ranking_".concat(this.typeIndex)).then(function(e) {
                                        e && e.text && (o.tipsContent = e.text);
                                    });

                                  case 22:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    hanldeCallPhone: function() {
                        var e = c(a.default.mark(function e(t, n) {
                            var i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, s.default.getPhoneNum(n, 1);

                                  case 2:
                                    0 === (i = e.sent).code && t(i.data.phone);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = h;
        }).call(this, n("543d").default);
    },
    bf82: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {});
    },
    e8ad: function(e, t, n) {
        "use strict";
        var a = n("0c8e");
        n.n(a).a;
    }
}, [ [ "157e", "common/runtime", "common/vendor" ] ] ]);