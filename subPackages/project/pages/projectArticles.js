require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/projectArticles" ], {
    "16f0": function(t, e, n) {},
    2225: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("5c81"), a = n("ae59");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("c46d2");
        var c = n("f0c5"), i = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = i.exports;
    },
    "5c81": function(t, e, n) {
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
    ae59: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("ba88"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    ba88: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = c(n("a34a")), a = c(n("4ec3")), o = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, r, a, o, c) {
                try {
                    var i = t[o](c), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function c(t) {
                            i(o, r, a, c, u, "next", t);
                        }
                        function u(t) {
                            i(o, r, a, c, u, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var s = {
                components: {
                    BusiTab: function() {
                        n.e("components/UILayout/BusiTab").then(function() {
                            return resolve(n("f97f"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        projectToggle: 1,
                        project_id: 0,
                        page: 1,
                        more: !0,
                        items: [],
                        list: [ {
                            id: 1,
                            text: "楼盘点评"
                        }, {
                            id: 2,
                            text: "房企资讯"
                        } ]
                    };
                },
                onShareAppMessage: function() {
                    return o.share.share();
                },
                onReachBottom: function() {
                    var t = u(r.default.mark(function t() {
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
                    var e = u(r.default.mark(function e() {
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
                    var t = u(r.default.mark(function t(e) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.projectToggle = e.toggle || 1, this.project_id = e.project_id, this.name = e.project_name, 
                                t.next = 5, this.reload.call(this);

                              case 5:
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
                    toUrl: function() {
                        o.redis.set("question_index", 1), t.switchTab({
                            url: "/pages/consult/index"
                        });
                    },
                    changeProjectToggle: function() {
                        var t = u(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.projectToggle = e, t.next = 3, this.reload.call(this);

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
                    loadNext: function() {
                        var t = u(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (1 !== Math.floor(this.projectToggle)) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.next = 3, a.default.projectArticles(this.project_id, this.page, "");

                                  case 3:
                                    e = t.sent, t.next = 9;
                                    break;

                                  case 6:
                                    return t.next = 8, a.default.officialAccountsArticles(this.project_id, this.page, this.projectToggle);

                                  case 8:
                                    e = t.sent;

                                  case 9:
                                    e.data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.items = this.items.concat(e.data.data));

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
                    reload: function() {
                        var e = u(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中",
                                        mask: !0
                                    }), this.page = 1, this.more = !0, this.items = [], e.next = 6, this.loadNext.call(this);

                                  case 6:
                                    t.stopPullDownRefresh(), t.hideLoading();

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
            e.default = s;
        }).call(this, n("543d").default);
    },
    c46d2: function(t, e, n) {
        "use strict";
        var r = n("16f0");
        n.n(r).a;
    },
    e0c8: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2225")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "e0c8", "common/runtime", "common/vendor" ] ] ]);