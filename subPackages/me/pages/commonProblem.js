require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/commonProblem" ], {
    "2dce": function(t, e, n) {},
    "47d5": function(t, e, n) {
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
    "772b": function(t, e, n) {
        "use strict";
        var a = n("2dce");
        n.n(a).a;
    },
    7772: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("4ec3")), i = n("b628"), u = n("ca00"), s = o(n("79b9"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, a, r, i, u) {
                try {
                    var s = t[i](u), o = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(o) : Promise.resolve(o).then(a, r);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function u(t) {
                            c(i, a, r, u, s, "next", t);
                        }
                        function s(t) {
                            c(i, a, r, u, s, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var f = {
                data: function() {
                    return {
                        listData: [],
                        page: 1,
                        more: !0
                    };
                },
                onShareAppMessage: function() {
                    return i.share.share("这些摇号常见问题你了解吗？赶紧了解");
                },
                onLoad: function() {
                    var e = l(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.showLoading({
                                    title: "加载中..."
                                }), e.next = 3, this.loadNext();

                              case 3:
                                t.hideLoading();

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
                onPullDownRefresh: function() {
                    var e = l(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

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
                onReachBottom: function() {
                    var t = l(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

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
                methods: {
                    toUrl: function() {
                        var e = l(a.default.mark(function e(n) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.navigateTo({
                                        url: (0, u.webview2Url)("".concat(s.default.webviewHost, "/common-problem/").concat(n))
                                    });

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    toggleHidden: function() {
                        var t = l(a.default.mark(function t(e) {
                            var n, i;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(this.listData[e].children_num > 0 && 0 !== parseInt(this.listData[e].has_children, 10))) {
                                        t.next = 4;
                                        break;
                                    }
                                    for (n = 0; n < this.listData.length; n += 1) parseInt(e, 10) !== n ? this.listData[n].isToggle = !1 : this.listData[e].isToggle = !this.listData[e].isToggle;
                                    t.next = 6;
                                    break;

                                  case 4:
                                    return t.next = 6, this.toUrl.call(this, this.listData[e].id);

                                  case 6:
                                    if (this.listData[e].value) {
                                        t.next = 11;
                                        break;
                                    }
                                    return t.next = 9, r.default.normalProblems(this.listData[e].id);

                                  case 9:
                                    i = t.sent, this.listData[e].value = i.data && i.data.data;

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
                    loadNext: function() {
                        var t = l(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.normalProblems(0, this.page, 30);

                                  case 2:
                                    (e = t.sent).data && (e.data.data && e.data.data.forEach(function(t) {
                                        t.isToggle = !1;
                                    }), this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    e.data.data && (this.listData = this.listData.concat(e.data.data)));

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
                    reload: function() {
                        var e = l(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.more = !0, this.page = 1, this.listData = [], e.next = 6, this.loadNext();

                                  case 6:
                                    t.hideLoading();

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
            e.default = f;
        }).call(this, n("543d").default);
    },
    "94ed": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("7772"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    b360: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("47d5"), r = n("94ed");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("772b");
        var u = n("f0c5"), s = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = s.exports;
    },
    b65d: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("b360")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "b65d", "common/runtime", "common/vendor" ] ] ]);