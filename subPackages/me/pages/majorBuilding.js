require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/majorBuilding" ], {
    "14c7": function(t, e, a) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, r = [];
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return r;
        }), a.d(e, "a", function() {});
    },
    1521: function(t, e, a) {},
    "5e68": function(t, e, a) {
        "use strict";
        var n = a("1521");
        a.n(n).a;
    },
    "6a1a": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = u(a("a34a")), r = u(a("4ec3")), s = a("b628");
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, a, n, r, s, u) {
                try {
                    var c = t[s](u), i = c.value;
                } catch (t) {
                    return void a(t);
                }
                c.done ? e(i) : Promise.resolve(i).then(n, r);
            }
            function i(t) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, r) {
                        var s = t.apply(e, a);
                        function u(t) {
                            c(s, n, r, u, i, "next", t);
                        }
                        function i(t) {
                            c(s, n, r, u, i, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            var o = a("f4fd"), d = {
                data: function() {
                    return {
                        houseData: [],
                        apartmentData: [],
                        defaultId: "",
                        activeIndex: null,
                        type: null,
                        projectId: null,
                        salesManId: ""
                    };
                },
                onShareAppMessage: function() {},
                onLoad: function() {
                    var t = i(n.default.mark(function t(e) {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.salesManId = e.salesManId, t.next = 3, this.loadNext();

                              case 3:
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
                    selectDefault: function(t, e, a) {
                        parseInt(t, 10) === parseInt(this.activeIndex, 10) && parseInt(this.type, 10) === parseInt(e, 10) ? this.activeIndex = null : (this.activeIndex = t, 
                        this.type = e), this.projectId = a;
                    },
                    save: function() {
                        var t = i(n.default.mark(function t() {
                            var e, a;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (this.projectId) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    return t.next = 4, r.default.sales.defaultProject(this.projectId);

                                  case 4:
                                    return e = t.sent, 0 === parseInt(e.code, 10) && (s.tip.toast("设置成功", "", "none"), 
                                    s.cache.set("sales_man_id", e.data.sales_man_id), a = o.getUserInfo(), o.setUserInfo(s.common.merge(a, {
                                        sales_man_id: e.data.sales_man_id
                                    }))), t.next = 8, this.reload();

                                  case 8:
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
                        var t = i(n.default.mark(function t() {
                            var e, a, s, u, c;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.sales.getDefaultProject(this.salesManId);

                                  case 2:
                                    return (e = t.sent) && e.data && e.data.project && (this.defaultId = e.data.project.id, 
                                    this.projectId = e.data.project.id), t.next = 6, r.default.getSalesManApply(0, 1, 50);

                                  case 6:
                                    return (a = t.sent) && a.data && a.data.data && (s = [], a.data.data.forEach(function(t) {
                                        1 !== parseInt(t.status, 10) && 3 !== parseInt(t.status, 10) || 1 !== parseInt(t.is_checked, 10) || s.push(t);
                                    }), this.houseData = s), t.next = 10, r.default.getSalesManApply(1, 1, 50);

                                  case 10:
                                    (u = t.sent) && u.data && u.data.data && (c = [], u.data.data.forEach(function(t) {
                                        1 !== parseInt(t.status, 10) && 3 !== parseInt(t.status, 10) || 1 !== parseInt(t.is_checked, 10) || c.push(t);
                                    }), this.apartmentData = c);

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
                    reload: function() {
                        var e = i(n.default.mark(function e() {
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中..."
                                    }), this.houseData = [], this.apartmentData = [], e.next = 5, this.loadNext();

                                  case 5:
                                    t.hideLoading();

                                  case 6:
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
            e.default = d;
        }).call(this, a("543d").default);
    },
    "881a": function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("6cdc"), e(a("66fd")), t(e(a("ddaf")).default);
        }).call(this, a("543d").createPage);
    },
    ddaf: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("14c7"), r = a("f6ce");
        for (var s in r) "default" !== s && function(t) {
            a.d(e, t, function() {
                return r[t];
            });
        }(s);
        a("5e68");
        var u = a("f0c5"), c = Object(u.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    f6ce: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("6a1a"), r = a.n(n);
        for (var s in n) "default" !== s && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = r.a;
    }
}, [ [ "881a", "common/runtime", "common/vendor" ] ] ]);