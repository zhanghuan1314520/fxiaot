require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/registry" ], {
    "2d3a": function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("dd1f")).default);
        }).call(this, e("543d").createPage);
    },
    4898: function(t, n, e) {
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
    5924: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = o(e("a34a")), a = o(e("4ec3")), u = e("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, n, e, r, a, u, o) {
                try {
                    var c = t[u](o), i = c.value;
                } catch (t) {
                    return void e(t);
                }
                c.done ? n(i) : Promise.resolve(i).then(r, a);
            }
            function i(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(n, e);
                        function o(t) {
                            c(u, r, a, o, i, "next", t);
                        }
                        function i(t) {
                            c(u, r, a, o, i, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var s = {
                components: {
                    CircleShareBtn: function() {
                        e.e("subPackages/project/components/CircleShareBtn").then(function() {
                            return resolve(e("036b"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        lottery_id: 0,
                        name: "",
                        answers: {}
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("".concat(this.name, "楼盘的购房网络登记指南"));
                },
                onLoad: function() {
                    var t = i(r.default.mark(function t(n) {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.lottery_id = n.lottery_id, this.name = decodeURIComponent(n.name), this.loadData();

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(n) {
                        return t.apply(this, arguments);
                    };
                }(),
                methods: {
                    copyText: function(n) {
                        n && t.setClipboardData({
                            data: n
                        });
                    },
                    preImages: function(n) {
                        t.previewImage({
                            current: n,
                            urls: this.answers.data.map(function(t) {
                                return t.image;
                            })
                        });
                    },
                    loadData: function() {
                        var n = i(r.default.mark(function n() {
                            var e;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), n.next = 3, a.default.getGuidePic();

                                  case 3:
                                    e = n.sent, this.answers = e.data, this.answers.data.push({
                                        num: "qrcode",
                                        image: this.answers.qrcode,
                                        text: "将“杭州房小团”添加到我的小程序，可以更快查看房源信息和摇号结果喔！"
                                    }), t.hideLoading();

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this);
                        }));
                        return function() {
                            return n.apply(this, arguments);
                        };
                    }()
                }
            };
            n.default = s;
        }).call(this, e("543d").default);
    },
    6868: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("5924"), a = e.n(r);
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        n.default = a.a;
    },
    "6cb24": function(t, n, e) {
        "use strict";
        var r = e("aeb7");
        e.n(r).a;
    },
    aeb7: function(t, n, e) {},
    dd1f: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("4898"), a = e("6868");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        e("6cb24");
        var o = e("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = c.exports;
    }
}, [ [ "2d3a", "common/runtime", "common/vendor" ] ] ]);