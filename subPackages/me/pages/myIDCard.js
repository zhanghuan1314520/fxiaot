require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/myIDCard" ], {
    "28ac": function(n, t, e) {},
    "3d67": function(n, t, e) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, u = [];
        e.d(t, "b", function() {
            return r;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {});
    },
    9543: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("eade"), u = e.n(r);
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        t.default = u.a;
    },
    c12b: function(n, t, e) {
        "use strict";
        var r = e("28ac");
        e.n(r).a;
    },
    df51: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("3d67"), u = e("9543");
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        e("c12b");
        var o = e("f0c5"), i = Object(o.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = i.exports;
    },
    eade: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(e("a34a")), u = o(e("4ec3")), a = e("b628");
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function i(n, t, e, r, u, a, o) {
                try {
                    var i = n[a](o), c = i.value;
                } catch (n) {
                    return void e(n);
                }
                i.done ? t(c) : Promise.resolve(c).then(r, u);
            }
            function c(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(r, u) {
                        var a = n.apply(t, e);
                        function o(n) {
                            i(a, r, u, o, c, "next", n);
                        }
                        function c(n) {
                            i(a, r, u, o, c, "throw", n);
                        }
                        o(void 0);
                    });
                };
            }
            var s = {
                components: {
                    Authorization: function() {
                        e.e("components/Authorization").then(function() {
                            return resolve(e("5326"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        projects: [],
                        loading: !0
                    };
                },
                onShareAppMessage: function() {
                    return a.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onPullDownRefresh: function() {
                    var t = c(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

                              case 2:
                                n.stopPullDownRefresh();

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
                onShow: function() {
                    var t = c(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n.hideShareMenu(), t.next = 3, this.reload();

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
                methods: {
                    gotoUrlHandle: function(t) {
                        n.navigateTo({
                            url: t
                        });
                    },
                    navigatoHandle: function(t) {
                        n.navigateTo({
                            url: t
                        });
                    },
                    removeSingle: function() {
                        var n = c(r.default.mark(function n(t) {
                            var e;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return e = this.projects[t], n.next = 3, a.tip.confirm("是否确定删除此身份信息");

                                  case 3:
                                    if (!n.sent) {
                                        n.next = 9;
                                        break;
                                    }
                                    return this.loading = !1, n.next = 7, u.default.unbindIdCard({
                                        id: e.id
                                    });

                                  case 7:
                                    this.projects.splice(t, 1), this.loading = !0;

                                  case 9:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function(t) {
                            return n.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var n = c(r.default.mark(function n() {
                            var t;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return this.loading = !1, n.next = 3, u.default.getMyIdCards();

                                  case 3:
                                    t = n.sent, this.projects = t.data, this.loading = !0;

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var n = c(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, this.loadNext();

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }(),
                    handleClick: function() {}
                }
            };
            t.default = s;
        }).call(this, e("543d").default);
    },
    f051: function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("df51")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "f051", "common/runtime", "common/vendor" ] ] ]);