require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/onlineFlagship" ], {
    "47ff": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("c4cd"), r = e.n(a);
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        n.default = r.a;
    },
    6642: function(t, n, e) {
        "use strict";
        var a = e("ad6d");
        e.n(a).a;
    },
    7434: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("e7aa")).default);
        }).call(this, e("543d").createPage);
    },
    ad6d: function(t, n, e) {},
    c4cd: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = u(e("a34a")), r = u(e("4ec3"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, n, e, a, r, u, o) {
                try {
                    var i = t[u](o), c = i.value;
                } catch (t) {
                    return void e(t);
                }
                i.done ? n(c) : Promise.resolve(c).then(a, r);
            }
            function i(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, r) {
                        var u = t.apply(n, e);
                        function i(t) {
                            o(u, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            o(u, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var c = {
                chengdu: {
                    logo: "https://imgcdn.huanjutang.com/assets/img/202025167531847.png"
                },
                hangzhou: {
                    logo: "https://imgcdn.huanjutang.com/assets/img/202025167537887.png"
                },
                nanjing: {
                    logo: "https://imgcdn.huanjutang.com/assets/img/202025167538081.png"
                }
            }, s = {
                data: function() {
                    return {
                        cityObj: c.hangzhou,
                        loading: !1,
                        page: 1,
                        more: !0,
                        items: []
                    };
                },
                onLoad: function() {
                    var n = i(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t.setNavigationBarTitle({
                                    title: "杭州房小团-线上旗舰店"
                                }), n.next = 3, this.reload();

                              case 3:
                                this.loading = !0;

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return function() {
                        return n.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var n = i(a.default.mark(function n() {
                        return a.default.wrap(function(n) {
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
                methods: {
                    handleShare: function() {},
                    handleNext: function(n) {
                        t.navigateTo({
                            url: n.url
                        });
                    },
                    reload: function() {
                        var t = i(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.page = 1, this.items = [], this.more = !0, t.next = 5, this.loadNext();

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
                    loadNext: function() {
                        var n = i(a.default.mark(function n() {
                            var e;
                            return a.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中"
                                    }), n.prev = 1, n.next = 4, r.default.flagship();

                                  case 4:
                                    e = n.sent, t.hideLoading(), this.items = e.data && e.data.data || [], n.next = 12;
                                    break;

                                  case 9:
                                    n.prev = 9, n.t0 = n.catch(1), t.hideLoading();

                                  case 12:
                                  case "end":
                                    return n.stop();
                                }
                            }, n, this, [ [ 1, 9 ] ]);
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
    cc6f: function(t, n, e) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    e7aa: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("cc6f"), r = e("47ff");
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        e("6642");
        var o = e("f0c5"), i = Object(o.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = i.exports;
    }
}, [ [ "7434", "common/runtime", "common/vendor" ] ] ]);