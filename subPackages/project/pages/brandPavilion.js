require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/brandPavilion" ], {
    3816: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c63c"), a = n("ac56");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("fe84");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    },
    9388: function(t, e, n) {},
    ac56: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("d612"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    c63c: function(t, e, n) {
        "use strict";
        var r = {
            ProjectItem: function() {
                return n.e("components/ProjectItem/ProjectItem").then(n.bind(null, "ae52"));
            }
        }, a = function() {
            this.$createElement, this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return r;
        });
    },
    d612: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), a = o(n("4ec3"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        i(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function s(t, e, n, r, a, o, c) {
                try {
                    var u = t[o](c), i = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(r, a);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function c(t) {
                            s(o, r, a, c, u, "next", t);
                        }
                        function u(t) {
                            s(o, r, a, c, u, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var d = {
                components: {
                    ProjectItem: function() {
                        n.e("components/ProjectItem/ProjectItem").then(function() {
                            return resolve(n("ae52"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        banners: [],
                        projects: [],
                        toggleClose: !1,
                        brandInfo: null,
                        brandId: "",
                        pages: 1,
                        more: !0,
                        loading: !1,
                        brandName: "",
                        isRequesting: !1
                    };
                },
                onPullDownRefresh: function() {
                    var e = f(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
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
                    var t = f(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more && !this.isRequesting) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return this.isRequesting = !0, t.next = 5, this.loadNext();

                              case 5:
                                this.isRequesting = !1;

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var t = f(r.default.mark(function t(e) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.brandId = e.brandId || "", t.next = 3, this.reload();

                              case 3:
                                this.loading = !0;

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
                methods: {
                    handleShare: function() {},
                    toggleInfoShow: function() {
                        this.toggleClose = !this.toggleClose;
                    },
                    attentionBrand: function() {
                        var t = f(r.default.mark(function t() {
                            var e, n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = 1 === Number(this.brandInfo.is_collection) ? 2 : 1, t.next = 3, a.default.brandAttention(this.brandId, e);

                                  case 3:
                                    n = t.sent, 0 === Number(n.code) && (this.brandInfo.is_collection = 1 === Number(this.brandInfo.is_collection) ? 2 : 1);

                                  case 5:
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
                        var e = f(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return this.pages = 1, this.projects = [], this.more = !0, e.next = 5, a.default.brandDetail(this.brandId);

                                  case 5:
                                    return n = e.sent, this.brandInfo = n.data, this.brandName = n.data.name, t.setNavigationBarTitle({
                                        title: "杭州房小团-".concat(n.data.name, "线上旗舰店")
                                    }), e.next = 11, this.loadNext();

                                  case 11:
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
                        var t = f(r.default.mark(function t() {
                            var e, n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.brandProject(this.brandId, this.pages);

                                  case 2:
                                    !(e = t.sent) || e.data && e.data.last_page <= 1 ? this.more = !1 : this.pages += 1, 
                                    e && e.data && e.data.data && (n = this.projects, this.projects.length > 0 && (n = this.projects.map(function(t) {
                                        return u(u({}, t), {}, {
                                            show: !0
                                        });
                                    })), this.projects = n.concat(e.data.data));

                                  case 5:
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
            e.default = d;
        }).call(this, n("543d").default);
    },
    f823: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3816")).default);
        }).call(this, n("543d").createPage);
    },
    fe84: function(t, e, n) {
        "use strict";
        var r = n("9388");
        n.n(r).a;
    }
}, [ [ "f823", "common/runtime", "common/vendor" ] ] ]);