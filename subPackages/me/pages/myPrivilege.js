require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/myPrivilege" ], {
    "247c": function(t, e, n) {
        "use strict";
        var r = n("c9e5");
        n.n(r).a;
    },
    "2eba": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("5dc2"), u = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = u.a;
    },
    "5dc2": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(n("a34a")), u = a(n("4ec3")), i = n("b628");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, r, u, i, a) {
                try {
                    var o = t[i](a), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(r, u);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, u) {
                        var i = t.apply(e, n);
                        function a(t) {
                            o(i, r, u, a, c, "next", t);
                        }
                        function c(t) {
                            o(i, r, u, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        privilegeList: []
                    };
                },
                onLoad: function(t) {
                    var e = t.userId, n = t.projectId;
                    this.userId = e, this.projectId = n, e && this.loadData();
                },
                onPullDownRefresh: function() {
                    var e = c(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.loadData(), t.stopPullDownRefresh();

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadData: function() {
                        this.getPrivilege({
                            user_id: this.userId,
                            project_id: this.projectId
                        });
                    },
                    goToPage: function(e) {
                        var n = e.url, r = e.status, u = e.tips;
                        1 === r ? t.navigateTo({
                            url: n
                        }) : i.tip.toast(u, "", "none");
                    },
                    getPrivilege: function() {
                        var t = c(r.default.mark(function t(e) {
                            var n, i, a;
                            return r.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, u.default.sales.myPrivilege(e);

                                  case 2:
                                    n = t.sent, i = n.data, a = void 0 === i ? [] : i, this.privilegeList = a;

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    b7df: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("b92d")).default);
        }).call(this, n("543d").createPage);
    },
    b92d: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e7cf"), u = n("2eba");
        for (var i in u) "default" !== i && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(i);
        n("247c");
        var a = n("f0c5"), o = Object(a.a)(u.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        e.default = o.exports;
    },
    c9e5: function(t, e, n) {},
    e7cf: function(t, e, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, u = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {});
    }
}, [ [ "b7df", "common/runtime", "common/vendor" ] ] ]);