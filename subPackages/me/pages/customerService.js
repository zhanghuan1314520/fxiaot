require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/customerService" ], {
    "2ec2": function(n, t, e) {
        "use strict";
        var r = e("a7ef");
        e.n(r).a;
    },
    "3e25": function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a"));
            function u(n, t, e, r, u, a, o) {
                try {
                    var c = n[a](o), i = c.value;
                } catch (n) {
                    return void e(n);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, u);
            }
            function a(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(r, a) {
                        var o = n.apply(t, e);
                        function c(n) {
                            u(o, r, a, c, i, "next", n);
                        }
                        function i(n) {
                            u(o, r, a, c, i, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var o = e("79b9"), c = {
                data: function() {
                    return {
                        qrcode: ""
                    };
                },
                onShareAppMessage: function() {},
                onLoad: function() {
                    var n = a(r.default.mark(function n() {
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                this.qrcode = o.SALES_WECHAT_CODE;

                              case 1:
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
                    copyCode: function() {
                        var t = a(r.default.mark(function t() {
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n.setClipboardData({
                                        data: o.SALES_WECHAT_NUMBER
                                    });

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = c;
        }).call(this, e("543d").default);
    },
    "62b0": function(n, t, e) {
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
    "666b": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("8a19")).default);
        }).call(this, e("543d").createPage);
    },
    "8a19": function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("62b0"), u = e("db49");
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        e("2ec2");
        var o = e("f0c5"), c = Object(o.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    },
    a7ef: function(n, t, e) {},
    db49: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("3e25"), u = e.n(r);
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        t.default = u.a;
    }
}, [ [ "666b", "common/runtime", "common/vendor" ] ] ]);