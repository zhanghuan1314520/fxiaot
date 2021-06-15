(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/components/webview/BusiArticleShareBtn" ], {
    "19e5": function(t, e, n) {
        "use strict";
        var o = function() {
            this.$createElement, this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    "268f": function(t, e, n) {
        "use strict";
        var o = n("32f8");
        n.n(o).a;
    },
    "32f8": function(t, e, n) {},
    c9da: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("cc79"), c = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = c.a;
    },
    cc79: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("a34a")), c = n("b628"), r = a(n("4ec3"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach(function(e) {
                        s(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function s(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function l(t, e, n, o, c, r, a) {
                try {
                    var i = t[r](a), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(o, c);
            }
            function f(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, c) {
                        var r = t.apply(e, n);
                        function a(t) {
                            l(r, o, c, a, i, "next", t);
                        }
                        function i(t) {
                            l(r, o, c, a, i, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var p = {
                props: {
                    showShareBtn: {
                        type: Boolean,
                        default: !1
                    },
                    articleId: {
                        type: Number,
                        default: 0
                    },
                    isIosOrAndroid: {
                        type: Boolean,
                        default: !1
                    },
                    isSalesMan: {
                        type: Boolean,
                        default: !1
                    },
                    salesManId: {
                        type: Number,
                        default: null
                    }
                },
                data: function() {
                    return {
                        collectionStatus: 0,
                        showCollectionTips: !1
                    };
                },
                watch: {
                    articleId: function(t) {
                        t && this.collectionInit();
                    }
                },
                methods: {
                    collectionInit: function() {
                        var t = f(o.default.mark(function t() {
                            var e, n;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.article.collectionState(this.articleId);

                                  case 2:
                                    e = t.sent, n = u({
                                        is_collection: 0
                                    }, e.data), this.collectionStatus = n.is_collection;

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
                    collectionHandle: function() {
                        var t = this;
                        1 === this.collectionStatus ? (this.collectionStatus = 0, r.default.article.collectionStatus(this.articleId, 0).then(), 
                        c.tip.toast("取消成功", "", "none")) : (r.default.article.collectionStatus(this.articleId, 1).then(), 
                        this.collectionStatus = 1, this.isIosOrAndroid ? c.tip.toast("收藏成功", "", "none") : (this.showCollectionTips = !0, 
                        setTimeout(function() {
                            t.showCollectionTips = !1;
                        }, 1500)));
                    },
                    shareTo: function() {
                        var e = f(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.navigateTo({
                                        url: "/subPackages/tools/pages/canvasArticle?articleId=".concat(this.articleId, "&salesManId=").concat(this.salesManId || "")
                                    });

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    sendAnalysisData: function() {}
                }
            };
            e.default = p;
        }).call(this, n("543d").default);
    },
    f682: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("19e5"), c = n("c9da");
        for (var r in c) "default" !== r && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(r);
        n("268f");
        var a = n("f0c5"), i = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/components/webview/BusiArticleShareBtn-create-component", {
    "pages/components/webview/BusiArticleShareBtn-create-component": function(t, e, n) {
        n("543d").createComponent(n("f682"));
    }
}, [ [ "pages/components/webview/BusiArticleShareBtn-create-component" ] ] ]);