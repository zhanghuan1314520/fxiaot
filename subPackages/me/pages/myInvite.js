require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/myInvite" ], {
    2846: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("4b8f"), a = n("a0ed");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("a5b6");
        var s = n("f0c5"), i = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "2da3": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2846")).default);
        }).call(this, n("543d").createPage);
    },
    "4b8f": function(t, e, n) {
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
    "6f6b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = s(n("4ec3")), u = n("b628");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t) {
                return function(t) {
                    if (Array.isArray(t)) return o(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function c(t, e, n, r, a, u, s) {
                try {
                    var i = t[u](s), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(o) : Promise.resolve(o).then(r, a);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(e, n);
                        function s(t) {
                            c(u, r, a, s, i, "next", t);
                        }
                        function i(t) {
                            c(u, r, a, s, i, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var l = {
                data: function() {
                    return {
                        systemMessageItemList: [],
                        page: 1,
                        more: !0,
                        type_id: ""
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("我在这里查摇号结果，好方便哦", "/pages/index", "https://imgcdn.huanjutang.com/assets/img/20181227/5c2494e7618aa.jpg");
                },
                onReachBottom: function() {
                    var t = f(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext.call(this);

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
                onPullDownRefresh: function() {
                    var e = f(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload.call(this);

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var t = f(r.default.mark(function t(e) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.type_id = e.type, t.next = 3, this.reload.call(this);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    cancelData: function() {
                        var e = f(r.default.mark(function e(n) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "删除中"
                                    }), e.next = 3, a.default.deleteSystemMessageList(n);

                                  case 3:
                                    return t.hideLoading(), e.next = 6, this.reload.call(this);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    pageNavigateTo: function() {
                        var e = f(r.default.mark(function e(n, u) {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    a.default.readSystemMessage(u).then(function() {}), t.navigateTo({
                                        url: "/subPackages/question/pages/questionDetail?id=".concat(n)
                                    });

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var e = f(r.default.mark(function e() {
                            var n, u;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.getSystemMessageList(this.type_id, this.page);

                                  case 2:
                                    (n = e.sent).data && n.data.data && (this.page >= n.data.last_page || !n.data.last_page ? this.more = !1 : this.page += 1, 
                                    u = [], Object.keys(n.data.data).forEach(function(t) {
                                        var e = n.data.data[t];
                                        u.push({
                                            time: t,
                                            data: e
                                        });
                                    }), this.systemMessageItemList = [].concat(i(this.systemMessageItemList), u)), t.hideLoading();

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var e = f(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.page = 1, this.more = !0, this.systemMessageItemList = [], e.next = 6, 
                                    this.loadNext.call(this);

                                  case 6:
                                    t.stopPullDownRefresh();

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    a0ed: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("6f6b"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = a.a;
    },
    a5b6: function(t, e, n) {
        "use strict";
        var r = n("e486");
        n.n(r).a;
    },
    e486: function(t, e, n) {}
}, [ [ "2da3", "common/runtime", "common/vendor" ] ] ]);