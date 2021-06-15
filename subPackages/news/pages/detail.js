require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/news/pages/detail" ], {
    2334: function(t, e, n) {},
    "3de8": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("c3ae")).default);
        }).call(this, n("543d").createPage);
    },
    "7d18": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = c(n("a34a")), a = c(n("4ec3")), i = n("b628");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, a, i, c) {
                try {
                    var u = t[i](c), o = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(o) : Promise.resolve(o).then(r, a);
            }
            function o(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function c(t) {
                            u(i, r, a, c, o, "next", t);
                        }
                        function o(t) {
                            u(i, r, a, c, o, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        id: "",
                        type: 0,
                        item: null,
                        articleTitle: "",
                        banners: []
                    };
                },
                onShareAppMessage: function() {
                    return this.articleTitle = this.item.title, i.share.share("【".concat(this.articleTitle, "】"));
                },
                onPullDownRefresh: function() {
                    var e = o(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reloadData.call(this);

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
                    var t = o(r.default.mark(function t(e) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.type = e.type, this.id = e.id, t.next = 4, this.reloadData.call(this);

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
                    like: function() {
                        var t = o(r.default.mark(function t() {
                            var e;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.default.articleDood(this.id);

                                  case 2:
                                    e = t.sent, this.item.is_like = e.data.status, this.item.likeCount = e.data.num;

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
                    preview: function() {
                        var e = o(r.default.mark(function e(n) {
                            var a, i;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    i = [ a = n ], a && i.length > 0 && t.previewImage({
                                        current: a,
                                        urls: i
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }(),
                    showCode: function() {
                        t.previewImage({
                            urls: [ "https://imgcdn.huanjutang.com/qrcode_for_app_banner.jpg" ]
                        });
                    },
                    reloadData: function() {
                        var e = o(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), e.next = 3, a.default.projectArticle(this.type, this.id);

                                  case 3:
                                    n = e.sent, this.item = n.data && n.data.data && n.data.data[0] || {};
                                    try {
                                        this.item.content = decodeURIComponent(this.item.content), this.item.content = this.item.content.replace(/<p>|<\/span>|<\/storage>|<\/em>/g, ""), 
                                        this.item.content = this.item.content.replace(/<\/p>/g, "\n"), this.item.content = this.item.content.replace(/&nbsp;/g, " "), 
                                        this.item.content = this.item.content.replace(/<\/img\s*(src="[^"]+")>/g, "<image $1/>"), 
                                        this.item.content = this.item.content.replace(/<\/?(?!(image))[^>]+/g, "");
                                    } catch (t) {
                                        console.error(t);
                                    }
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
            e.default = s;
        }).call(this, n("543d").default);
    },
    "83d4": function(t, e, n) {
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
    "963b": function(t, e, n) {
        "use strict";
        var r = n("2334");
        n.n(r).a;
    },
    a8f0: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("7d18"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    c3ae: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("83d4"), a = n("a8f0");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("963b");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = u.exports;
    }
}, [ [ "3de8", "common/runtime", "common/vendor" ] ] ]);