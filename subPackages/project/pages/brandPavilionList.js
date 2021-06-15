require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/brandPavilionList" ], {
    "5a8e": function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("b2f1")).default);
        }).call(this, e("543d").createPage);
    },
    "631d": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = u(e("a34a")), a = u(e("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, n, e, r, a, u, i) {
                try {
                    var o = t[u](i), c = o.value;
                } catch (t) {
                    return void e(t);
                }
                o.done ? n(c) : Promise.resolve(c).then(r, a);
            }
            function o(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(n, e);
                        function o(t) {
                            i(u, r, a, o, c, "next", t);
                        }
                        function c(t) {
                            i(u, r, a, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var c = {
                components: {
                    BrandPavilionItem: function() {
                        e.e("subPackages/project/components/BrandPavilionItem/brandPavilionBox").then(function() {
                            return resolve(e("8689"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        brandData: [],
                        pages: 1,
                        more: !0,
                        isRequesting: !1
                    };
                },
                onPullDownRefresh: function() {
                    var n = o(r.default.mark(function n() {
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, this.reload();

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                onReachBottom: function() {
                    var t = o(r.default.mark(function t() {
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
                onShow: function() {
                    var t = o(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

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
                    reload: function() {
                        var t = o(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.more = !0, this.pages = 1, t.next = 4, this.getBrandData();

                                  case 4:
                                    this.brandData = t.sent;

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
                    getBrandData: function() {
                        var t = o(r.default.mark(function t() {
                            var n, e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.brandPavilionList(this.pages);

                                  case 2:
                                    return !(n = t.sent) || !n.data || n.data.last_page <= 1 ? this.more = !1 : this.pages += 1, 
                                    e = [], n && n.data && n.data.data && (e = n.data.data), t.abrupt("return", e);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    loadNext: function() {
                        var t = o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, this.getBrandData();

                                  case 2:
                                    n = t.sent, this.brandData = this.brandData.concat(n);

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
            n.default = c;
        }).call(this, e("543d").default);
    },
    "7de7": function(t, n, e) {
        "use strict";
        var r = e("c868");
        e.n(r).a;
    },
    "806e": function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("631d"), a = e.n(r);
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        n.default = a.a;
    },
    a9cc: function(t, n, e) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    },
    b2f1: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("a9cc"), a = e("806e");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        e("7de7");
        var i = e("f0c5"), o = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = o.exports;
    },
    c868: function(t, n, e) {}
}, [ [ "5a8e", "common/runtime", "common/vendor" ] ] ]);