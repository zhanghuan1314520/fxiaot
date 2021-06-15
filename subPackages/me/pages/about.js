require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/about" ], {
    "1fa4": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("f7d3")).default);
        }).call(this, e("543d").createPage);
    },
    "4d4f": function(n, t, e) {},
    "7c85": function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("b624"), u = e.n(r);
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        t.default = u.a;
    },
    abbb: function(n, t, e) {
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
    b234: function(n, t, e) {
        "use strict";
        var r = e("4d4f");
        e.n(r).a;
    },
    b624: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a")), u = e("b628");
            function a(n, t, e, r, u, a, o) {
                try {
                    var c = n[a](o), i = c.value;
                } catch (n) {
                    return void e(n);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, u);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(r, u) {
                        var o = n.apply(t, e);
                        function c(n) {
                            a(o, r, u, c, i, "next", n);
                        }
                        function i(n) {
                            a(o, r, u, c, i, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var c = e("f4fd"), i = e("79b9"), f = {
                data: function() {
                    return {
                        code: "",
                        version: "",
                        logo: "https://imgcdn.huanjutang.com/image/2020/06/03/d4c2845b2a63ba14dfd893483c1e9d61.png"
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("我在这里查摇号结果，好方便哦", "/pages/index");
                },
                onLoad: function() {
                    var n = o(r.default.mark(function n() {
                        var t;
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, c.getGlobalConfig();

                              case 2:
                                t = n.sent, this.code = t.wechatQrCode, this.version = i.version;

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                methods: {
                    preview: function() {
                        var t = o(r.default.mark(function t(e) {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n.previewImage({
                                        urls: [ e ]
                                    });

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = f;
        }).call(this, e("543d").default);
    },
    f7d3: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("abbb"), u = e("7c85");
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        e("b234");
        var o = e("f0c5"), c = Object(o.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    }
}, [ [ "1fa4", "common/runtime", "common/vendor" ] ] ]);