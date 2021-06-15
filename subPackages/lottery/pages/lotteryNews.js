require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/lottery/pages/lotteryNews" ], {
    "023e": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), a = o(n("4ec3")), i = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return s(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function c(t, e, n, r, a, i, o) {
                try {
                    var u = t[i](o), s = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            c(i, r, a, o, u, "next", t);
                        }
                        function u(t) {
                            c(i, r, a, o, u, "throw", t);
                        }
                        o(void 0);
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
                    return i.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
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
                    pageNavigateTo: function(e, n) {
                        a.default.readSystemMessage(n).then(function() {}), t.navigateTo({
                            url: "/pages/lotteryDetail?id=&project_id=".concat(e)
                        });
                    },
                    loadNext: function() {
                        var e = f(r.default.mark(function e() {
                            var n, i, o, s;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.getSystemMessageList(this.type_id, this.page);

                                  case 2:
                                    if ((n = e.sent).data && n.data.data) {
                                        if (this.page >= n.data.last_page || !n.data.last_page ? this.more = !1 : this.page += 1, 
                                        i = [], n.data && n.data.data) for (o = 0; o < n.data.data.length; o += 1) s = n.data.data[o], 
                                        i.push({
                                            time: o,
                                            data: s
                                        });
                                        this.systemMessageItemList = [].concat(u(this.systemMessageItemList), i);
                                    }
                                    t.hideLoading();

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
    "1c6b": function(t, e, n) {},
    4397: function(t, e, n) {
        "use strict";
        var r = n("1c6b");
        n.n(r).a;
    },
    "5f1f": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("cc36")).default);
        }).call(this, n("543d").createPage);
    },
    cc36: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e511"), a = n("e657");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("4397");
        var o = n("f0c5"), u = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    e511: function(t, e, n) {
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
    e657: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("023e"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    }
}, [ [ "5f1f", "common/runtime", "common/vendor" ] ] ]);