require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/sysMessage" ], {
    "07b8": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("66f3"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    "66f3": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), o = n("b628");
            function s(t) {
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
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function c(t, e, n, r, a, o, s) {
                try {
                    var i = t[o](s), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function s(t) {
                            c(o, r, a, s, i, "next", t);
                        }
                        function i(t) {
                            c(o, r, a, s, i, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var f = {
                components: {
                    MessageTpl: function() {
                        n.e("subPackages/me/pages/components/MessageTpl").then(function() {
                            return resolve(n("3407"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Message: function() {
                        n.e("subPackages/me/pages/components/Message").then(function() {
                            return resolve(n("975a9"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        type: 1,
                        more: !0,
                        sysInfo: [],
                        page: 2,
                        loading: !0,
                        sysId: "",
                        getHeight: !1,
                        pageHeight: 0
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share("系统消息通知");
                },
                onPullDownRefresh: function() {
                    var e = l(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
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
                                this.pageScrollBottom(), t.stopPullDownRefresh();

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function(e) {
                    var n = this;
                    this.sysId = e.sysId || "";
                    var r = e.link_type || "", o = e.title || "系统消息";
                    t.setNavigationBarTitle({
                        title: o
                    }), this.reload().then(function() {
                        n.pageScrollBottom();
                    }), a.default.chat.setReadMsg(r, this.sysId);
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                methods: {
                    toUrlHandle: function(e) {
                        var n = this.sysInfo[e];
                        n.url && (2 === parseInt(n.page_level, 10) ? t.navigateTo({
                            url: n.url
                        }) : t.switchTab({
                            url: n.url
                        }));
                    },
                    reload: function() {
                        var e = l(r.default.mark(function e() {
                            var n, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.loading = !0, e.next = 4, a.default.chat.systemInfo(this.sysId, 1);

                                  case 4:
                                    n = e.sent, this.loading = !1, n && n.data && n.data.data && n.data.data.length > 0 && (o = (o = n.data.data.reverse()).map(function(t) {
                                        var e = t;
                                        return 8 === e.content_type && "string" == typeof e.content && (e.content = JSON.parse(e.content)), 
                                        e;
                                    }), this.sysInfo = o), (!n.data.last_page || n.data.last_page <= 1) && (this.more = !1), 
                                    t.hideLoading();

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
                        var e = l(r.default.mark(function e() {
                            var n, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, a.default.chat.systemInfo(this.sysId, this.page);

                                  case 3:
                                    (n = e.sent).data && (!n.data.last_page || n.data.last_page <= this.page ? this.more = !1 : this.page += 1, 
                                    o = (o = n.data.data.reverse()).map(function(t) {
                                        var e = t;
                                        return 8 === e.content_type && "string" == typeof e.content && (e.content = JSON.parse(e.content)), 
                                        e;
                                    }), this.sysInfo = [].concat(i(o), i(this.sysInfo))), t.hideLoading();

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
                                    var r = n && n.height ? n.height + 9999 : 9999;
                                    e.getHeight && (r = n.height - e.pageHeight, e.getHeight = !1), t.pageScrollTo({
                                        scrollTop: r,
                                        duration: 0
                                    }), e.pageHeight = n && n.height ? n.height : 0;
                                } catch (t) {}
                            }).exec();
                        }, 200);
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d").default);
    },
    "7c31": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c1a8"), a = n("07b8");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("7ddc");
        var s = n("f0c5"), i = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "7ddc": function(t, e, n) {
        "use strict";
        var r = n("9c80");
        n.n(r).a;
    },
    "9c80": function(t, e, n) {},
    c1a8: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    d971: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7c31")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "d971", "common/runtime", "common/vendor" ] ] ]);