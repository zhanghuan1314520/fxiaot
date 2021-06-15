(global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/salesMan/pages/salesManViewMan" ], {
    "3daf": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = u(n("a34a")), r = u(n("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, a, r, u, s) {
                try {
                    var i = t[u](s), o = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(o) : Promise.resolve(o).then(a, r);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = t.apply(e, n);
                        function i(t) {
                            s(u, a, r, i, o, "next", t);
                        }
                        function o(t) {
                            s(u, a, r, i, o, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        salesManId: "",
                        personList: [],
                        page: 1,
                        more: !0
                    };
                },
                onReachBottom: function() {
                    var t = i(a.default.mark(function t() {
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
                onPullDownRefresh: function() {
                    var e = i(a.default.mark(function e() {
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
                onLoad: function() {
                    var t = i(a.default.mark(function t(e) {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.salesManId = e.id, t.next = 3, this.reload();

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
                    reload: function() {
                        var e = i(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.page = 1, this.more = !0, this.personList = [], e.next = 6, this.loadNext();

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
                    }(),
                    loadNext: function() {
                        var t = i(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.sales.viewPerson(this.salesManId, this.page);

                                  case 2:
                                    (e = t.sent).data && (!e.data.last_page || this.page >= e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.personList = this.personList.concat(e.data.data));

                                  case 4:
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
            e.default = o;
        }).call(this, n("543d").default);
    },
    "3fa8": function(t, e, n) {},
    5155: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("e640"), r = n("7a2e");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("e6a9");
        var s = n("f0c5"), i = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "7a2e": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("3daf"), r = n.n(a);
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        e.default = r.a;
    },
    bf9f8: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("5155")).default);
        }).call(this, n("543d").createPage);
    },
    e640: function(t, e, n) {
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
    e6a9: function(t, e, n) {
        "use strict";
        var a = n("3fa8");
        n.n(a).a;
    }
}, [ [ "bf9f8", "common/runtime", "common/vendor" ] ] ]);