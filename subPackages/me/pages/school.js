require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/school" ], {
    "0323": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    1662: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("0323"), r = n("4b7e");
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        n("8975");
        var o = n("f0c5"), i = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "4b7e": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8754"), r = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = r.a;
    },
    7354: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("1662")).default);
        }).call(this, n("543d").createPage);
    },
    8754: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3")), s = n("b628");
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
            function c(t, e, n, a, r, s, o) {
                try {
                    var i = t[s](o), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(a, r);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var s = t.apply(e, n);
                        function o(t) {
                            c(s, a, r, o, i, "next", t);
                        }
                        function i(t) {
                            c(s, a, r, o, i, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var d = {
                components: {
                    MessageTpl: function() {
                        n.e("subPackages/me/pages/components/MessageTpl").then(function() {
                            return resolve(n("3407"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        sysId: "",
                        info: {
                            subscribe_num: 0,
                            title: "",
                            intro: ""
                        },
                        type: 1,
                        more: !0,
                        sysInfo: [],
                        page: 2,
                        loading: !0,
                        getHeight: !1,
                        pageHeight: 0
                    };
                },
                onShareAppMessage: function() {
                    return s.share.share("消息订阅");
                },
                onReachBottom: function() {
                    var e = f(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.more) {
                                    e.next = 3;
                                    break;
                                }
                                return t.stopPullDownRefresh(), e.abrupt("return");

                              case 3:
                                return this.getHeight = !0, e.next = 6, this.getHistory();

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function(t) {
                    this.sysUserId = t.sysUserId, this.sysId = t.sysId || "";
                    var e = t.link_type || 3;
                    this.loadData(this.sysId), this.reload().then(function() {}), r.default.chat.setReadMsg(e, this.sysId);
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    },
                    remindNum: function() {
                        var t = parseInt(this.info.subscribe_num, 10);
                        return t >= 1e4 ? "".concat((t / 1e4).toFixed(1), "W") : t;
                    }
                },
                methods: {
                    goSysMsgPage: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/sysMessage?sysId=".concat(this.sysId, "&link_type=3&title=").concat(this.info.title)
                        });
                    },
                    loadData: function() {
                        var t = f(a.default.mark(function t(e) {
                            var n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.systemUserDetail(e);

                                  case 2:
                                    0 === (n = t.sent).code && (this.info = n.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }(),
                    subscription: function() {
                        var t = f(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.systemUserSubscription(this.info.id);

                                  case 2:
                                    (e = t.sent) && 0 === e.code ? (this.loadData(this.sysId), 1 === e.data.is_subscribe ? s.tip.toast("订阅成功", "", "none") : (s.tip.toast("取消订阅成功", "", "none"), 
                                    r.default.chat.getUnReadMessage().then(function(t) {
                                        t && t.data && s.cache.set("UnReadMessageSum", t.data.sum);
                                    }))) : s.tip.toast(e.message, "", "none");

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
                    goSchoolDescPage: function() {
                        t.navigateTo({
                            url: "/subPackages/me/pages/schoolDesc?sysUserId=".concat(this.sysId)
                        });
                    },
                    toUrlHandle: function(e) {
                        var n = this.sysInfo[e];
                        n.url && (2 === parseInt(n.page_level, 10) ? t.navigateTo({
                            url: n.url
                        }) : t.switchTab({
                            url: n.url
                        }));
                    },
                    reload: function() {
                        var e = f(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.loading = !0, t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 4, r.default.chat.systemInfo(this.sysId, 1, 10, "asc");

                                  case 4:
                                    n = e.sent, this.loading = !1, n && n.data && n.data.data && n.data.data.length > 0 && (this.sysInfo = n.data.data, 
                                    this.sysInfo = this.sysInfo.map(function(t) {
                                        var e = t;
                                        return 8 === e.content_type && "string" == typeof e.content && (e.content = JSON.parse(e.content)), 
                                        e;
                                    })), (!n.data.last_page || n.data.last_page <= 1) && (this.more = !1), t.hideLoading();

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    getHistory: function() {
                        var e = f(a.default.mark(function e() {
                            var n, s;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, r.default.chat.systemInfo(this.sysId, this.page, 10, "asc");

                                  case 3:
                                    (n = e.sent).data && (!n.data.last_page || n.data.last_page <= this.page ? this.more = !1 : this.page += 1, 
                                    s = (s = n.data && n.data.data).map(function(t) {
                                        var e = t;
                                        return 8 === e.content_type && "string" == typeof e.content && (e.content = JSON.parse(e.content)), 
                                        e;
                                    }), this.sysInfo = [].concat(i(this.sysInfo), i(s))), t.hideLoading();

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    pageScrollBottom: function() {
                        var e = this;
                        setTimeout(function() {
                            t.createSelectorQuery().select("#sysMessage").boundingClientRect(function(n) {
                                try {
                                    var a = n && n.height ? n.height + 9999 : 9999;
                                    e.getHeight && (a = n.height - e.pageHeight, e.getHeight = !1), t.pageScrollTo({
                                        scrollTop: a,
                                        duration: 0
                                    }), e.pageHeight = n && n.height ? n.height : 0;
                                } catch (t) {}
                            }).exec();
                        }, 200);
                    }
                }
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    8975: function(t, e, n) {
        "use strict";
        var a = n("97d8");
        n.n(a).a;
    },
    "97d8": function(t, e, n) {}
}, [ [ "7354", "common/runtime", "common/vendor" ] ] ]);