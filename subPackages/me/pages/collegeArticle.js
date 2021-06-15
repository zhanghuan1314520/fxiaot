require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/collegeArticle" ], {
    "0415": function(t, e, n) {
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
    "19e0": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("507d")).default);
        }).call(this, n("543d").createPage);
    },
    "4d6b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = i(n("a34a")), r = i(n("4ec3"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, a, r, i, u) {
                try {
                    var o = t[i](u), s = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(s) : Promise.resolve(s).then(a, r);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function o(t) {
                            u(i, a, r, o, s, "next", t);
                        }
                        function s(t) {
                            u(i, a, r, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var s = {
                components: {
                    CollegeArticle: function() {
                        n.e("subPackages/me/pages/components/CollegeArticle").then(function() {
                            return resolve(n("afaf"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        list: new Array(8).fill({
                            skeleton: !0
                        }),
                        page: 1,
                        size: 10,
                        parentId: "",
                        typeId: "",
                        hasMore: !1
                    };
                },
                onLoad: function() {
                    this.getType();
                },
                onPullDownRefresh: function() {
                    var e = o(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.getType();

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
                    this.hasMore && this.getList(!0);
                },
                methods: {
                    getType: function() {
                        var t = o(a.default.mark(function t() {
                            var e, n, i, u;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.wiki.categoryList(2);

                                  case 2:
                                    if (!(e = t.sent).data || 0 === e.data.length) {
                                        t.next = 12;
                                        break;
                                    }
                                    return n = e.data[0].id, t.next = 7, r.default.wiki.subCategoryList(n);

                                  case 7:
                                    i = t.sent, u = i.data[0].id, this.parentId = n, this.typeId = u, this.getList();

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }(),
                    getList: function(t) {
                        var e = this;
                        t ? this.page += 1 : (this.list = [], this.page = 1), r.default.wiki.wikiList({
                            page: this.page,
                            page_size: this.size,
                            category_id: this.parentId,
                            subcategory_id: this.typeId
                        }).then(function(n) {
                            var a = t ? e.categoryList : [];
                            n.data && n.data.data && (e.list = a.concat(n.data.data), n.data.data.length < 10 && (e.hasMore = !1));
                        });
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "507d": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("0415"), r = n("9f14");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        var u = n("f0c5"), o = Object(u.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "9f14": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("4d6b"), r = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    }
}, [ [ "19e0", "common/runtime", "common/vendor" ] ] ]);