require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/buildingLetters" ], {
    "09b7": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = u(n("a34a")), a = u(n("4ec3")), i = n("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t) {
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
            function c(t, e, n, r, a, i, u) {
                try {
                    var o = t[i](u), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function u(t) {
                            c(i, r, a, u, o, "next", t);
                        }
                        function o(t) {
                            c(i, r, a, u, o, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var l = {
                data: function() {
                    return {
                        sourceUrl: "",
                        more: !0,
                        page: 1,
                        size: 10,
                        getBuildingLetters: {},
                        allPage: 0
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("这里有最多的楼盘快报");
                },
                onReachBottom: function() {
                    var e = f(r.default.mark(function e() {
                        var n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!this.more) {
                                    e.next = 13;
                                    break;
                                }
                                if (!(this.page <= this.allPage)) {
                                    e.next = 12;
                                    break;
                                }
                                return t.showLoading({
                                    title: "加载中..."
                                }), e.next = 5, a.default.buildingLetters(this.page, this.size);

                              case 5:
                                (n = e.sent).data && (this.getBuildingLetters.data = [].concat(o(this.getBuildingLetters.data), o(n.data.data))), 
                                this.page += 1, this.page === this.allPage && (this.more = !1), t.hideLoading(), 
                                e.next = 13;
                                break;

                              case 12:
                                this.more = !1;

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var e = f(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.page = 1, this.allPage = 0, this.more = !0, e.next = 5, this.getBuildingLetter();

                              case 5:
                                t.stopPullDownRefresh();

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
                onLoad: function() {
                    var t = f(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.getBuildingLetter();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    getBuildingLetter: function() {
                        var e = f(r.default.mark(function e() {
                            var n, i;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, a.default.buildingLetters(this.page, this.size);

                                  case 3:
                                    n = e.sent, this.getBuildingLetters = n.data, (i = Math.ceil(n.data.total / 10)) > 0 ? this.allPage = i : this.more = !1, 
                                    t.hideLoading();

                                  case 8:
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
    "1f6b": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("bfeb")).default);
        }).call(this, n("543d").createPage);
    },
    "897b": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("09b7"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    9285: function(t, e, n) {},
    bfeb: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c26a"), a = n("897b");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("dda0");
        var u = n("f0c5"), o = Object(u.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    },
    c26a: function(t, e, n) {
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
    dda0: function(t, e, n) {
        "use strict";
        var r = n("9285");
        n.n(r).a;
    }
}, [ [ "1f6b", "common/runtime", "common/vendor" ] ] ]);