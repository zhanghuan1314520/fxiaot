require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/businessCard" ], {
    3761: function(n, t, e) {},
    "4dad": function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = i(e("a34a")), s = e("b628"), r = i(e("4ec3"));
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function u(n, t, e, a, s, r, i) {
                try {
                    var u = n[r](i), o = u.value;
                } catch (n) {
                    return void e(n);
                }
                u.done ? t(o) : Promise.resolve(o).then(a, s);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(a, s) {
                        var r = n.apply(t, e);
                        function i(n) {
                            u(r, a, s, i, o, "next", n);
                        }
                        function o(n) {
                            u(r, a, s, i, o, "throw", n);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        salesManInfo: null,
                        sales_man_id: "",
                        userName: "",
                        writePhotoAuth: !1,
                        loading: !0,
                        user_id: ""
                    };
                },
                onShareAppMessage: function() {
                    return s.share.share("".concat(this.userName, "的名片"), "/pages/salesMan/detail?id=".concat(this.sales_man_id, "&user_id=").concat(this.user_id));
                },
                onLoad: function() {
                    var n = o(a.default.mark(function n(t) {
                        var e;
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return this.loading = !1, this.sales_man_id = t.id, n.next = 4, r.default.getSalesManOnce(this.sales_man_id);

                              case 4:
                                (e = n.sent) && e.data && (this.salesManInfo = e.data, this.user_id = this.salesManInfo.session_id, 
                                this.salesManInfo.projects = this.salesManInfo.projects.filter(function(n) {
                                    return n.id > 0;
                                }), this.userName = this.salesManInfo.name), this.loading = !0;

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function(t) {
                        return n.apply(this, arguments);
                    };
                }(),
                methods: {
                    shareTo: function() {
                        var t = o(a.default.mark(function t(e) {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n.navigateTo({
                                        url: "/subPackages/me/pages/businessCanvas?id=".concat(this.sales_man_id, "&projectName=").concat(e, "&writePhotoAuth=").concat(this.writePhotoAuth)
                                    });

                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = c;
        }).call(this, e("543d").default);
    },
    5212: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("4dad"), s = e.n(a);
        for (var r in a) "default" !== r && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(r);
        t.default = s.a;
    },
    "6b14": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("aef8")).default);
        }).call(this, e("543d").createPage);
    },
    "815c": function(n, t, e) {
        "use strict";
        var a = e("3761");
        e.n(a).a;
    },
    aef8: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("f781"), s = e("5212");
        for (var r in s) "default" !== r && function(n) {
            e.d(t, n, function() {
                return s[n];
            });
        }(r);
        e("815c");
        var i = e("f0c5"), u = Object(i.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports;
    },
    f781: function(n, t, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return s;
        }), e.d(t, "a", function() {});
    }
}, [ [ "6b14", "common/runtime", "common/vendor" ] ] ]);