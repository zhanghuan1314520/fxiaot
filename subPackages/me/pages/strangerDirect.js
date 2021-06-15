require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/strangerDirect" ], {
    2671: function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a")), u = t("b628");
            function o(n, e, t, r, u, o, c) {
                try {
                    var a = n[o](c), i = a.value;
                } catch (n) {
                    return void t(n);
                }
                a.done ? e(i) : Promise.resolve(i).then(r, u);
            }
            var c = t("f4fd"), a = {
                data: function() {
                    return {
                        img_url: "",
                        code: "",
                        programName: "杭州房小团"
                    };
                },
                onShareAppMessage: function() {
                    return u.share.share("一张图让你了解他的一切");
                },
                onLoad: function() {
                    var n = this;
                    c.getGlobalConfig().then(function(e) {
                        n.img_url = e.me_guide_img, n.code = e.novice_Qr_code;
                    });
                },
                methods: {
                    preview: function() {
                        var e = function(n) {
                            return function() {
                                var e = this, t = arguments;
                                return new Promise(function(r, u) {
                                    var c = n.apply(e, t);
                                    function a(n) {
                                        o(c, r, u, a, i, "next", n);
                                    }
                                    function i(n) {
                                        o(c, r, u, a, i, "throw", n);
                                    }
                                    a(void 0);
                                });
                            };
                        }(r.default.mark(function e(t) {
                            var u, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    o = [ u = t ], u && o.length > 0 && n.previewImage({
                                        current: u,
                                        urls: o
                                    });

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = a;
        }).call(this, t("543d").default);
    },
    "2e0f": function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t("6de0"), u = t("651b");
        for (var o in u) "default" !== o && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(o);
        t("b836");
        var c = t("f0c5"), a = Object(c.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = a.exports;
    },
    "651b": function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t("2671"), u = t.n(r);
        for (var o in r) "default" !== o && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        e.default = u.a;
    },
    "6de0": function(n, e, t) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, u = [];
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {});
    },
    8078: function(n, e, t) {
        "use strict";
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("2e0f")).default);
        }).call(this, t("543d").createPage);
    },
    b836: function(n, e, t) {
        "use strict";
        var r = t("fc85");
        t.n(r).a;
    },
    fc85: function(n, e, t) {}
}, [ [ "8078", "common/runtime", "common/vendor" ] ] ]);