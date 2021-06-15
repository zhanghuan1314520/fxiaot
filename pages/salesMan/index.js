(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/salesMan/index" ], {
    "097d": function(t, e, n) {
        "use strict";
        var a = n("1731");
        n.n(a).a;
    },
    1731: function(t, e, n) {},
    "1bb6": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("465a"), s = n("6285");
        for (var r in s) "default" !== r && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(r);
        n("097d");
        var i = n("f0c5"), o = Object(i.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = o.exports;
    },
    "465a": function(t, e, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, s = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
    },
    5756: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("1bb6")).default);
        }).call(this, n("543d").createPage);
    },
    "5be7": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), s = o(n("4ec3")), r = o(n("4360")), i = n("b628");
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t, e, n, a, s, r, i) {
                try {
                    var o = t[r](i), c = o.value;
                } catch (t) {
                    return void n(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(a, s);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, s) {
                        var r = t.apply(e, n);
                        function i(t) {
                            c(r, a, s, i, o, "next", t);
                        }
                        function o(t) {
                            c(r, a, s, i, o, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var l = {
                components: {
                    SalesmanListPlanA: function() {
                        n.e("pages/components/salesMan/SalesmanListPlanA").then(function() {
                            return resolve(n("b6c1"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    SalesmanListNewPlanB: function() {
                        n.e("pages/components/salesMan/SalesmanListNewPlanB").then(function() {
                            return resolve(n("5cf9"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BusiLoading: function() {
                        n.e("components/UILayout/BusiLoading").then(function() {
                            return resolve(n("ea8a"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        project_name: "",
                        project_id: null,
                        page: 1,
                        more: !0,
                        loading: !1,
                        salesList: new Array(8).fill({
                            skeleton: !0
                        }),
                        andrees: "",
                        sales_man_id: "",
                        project_img: "",
                        isBroker: "",
                        is_sales_man_id: "",
                        hasShowTestPage: !1,
                        firstLoad: !0
                    };
                },
                computed: {
                    showHome: function() {
                        return 1 === getCurrentPages().length;
                    }
                },
                onShareAppMessage: function() {
                    return i.share.share("".concat(this.project_name, "楼盘的置业顾问都在这里~"), "/pages/salesMan/index?id=".concat(this.project_id));
                },
                onReachBottom: function() {
                    var t = u(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.more) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                return t.next = 4, this.loadNext();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onPullDownRefresh: function() {
                    var e = u(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, this.reload();

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
                    var e = u(a.default.mark(function e(n) {
                        var s, i;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.q ? (s = decodeURIComponent(n.q), i = s.match(/\?id=([^&]+)&project_id=([^&]+)/i), 
                                this.project_id = i[1] || "", this.project_name = i[2] || "", this.project_img = i[4] || "") : (n.andrees && (this.andrees = n.andrees), 
                                this.project_name = decodeURIComponent(n.title), this.project_id = n.id, this.project_img = decodeURIComponent(n.project_img)), 
                                this.hasShowTestPage = r.default.getters.hasShowTestPage("pages/salesMan/index"), 
                                t.setNavigationBarTitle({
                                    title: "".concat(this.project_name, "-置业顾问")
                                }), this.loadNext();

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(),
                methods: {
                    loadNext: function() {
                        var t = u(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return this.loading = !0, t.next = 3, s.default.getSalesMan(this.project_id, this.page);

                                  case 3:
                                    (e = t.sent).data && (this.page >= e.data.last_page || !e.data.last_page ? this.more = !1 : this.page += 1, 
                                    this.firstLoad && (this.salesList = [], this.firstLoad = !1), this.tips = e.data.rule, 
                                    this.salesList = this.salesList.concat(e.data && e.data.data)), !this.project_name && this.salesList.length > 0 && (this.project_name = this.salesList[0].project_name), 
                                    this.loading = !1;

                                  case 7:
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
                        this.page = 1, this.more = !0, this.salesList = [], this.loadNext();
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d").default);
    },
    6285: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5be7"), s = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = s.a;
    }
}, [ [ "5756", "common/runtime", "common/vendor" ] ] ]);