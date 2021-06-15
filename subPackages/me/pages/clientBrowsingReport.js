require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/clientBrowsingReport" ], {
    "04ae": function(e, t, n) {},
    "0588": function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("f1ea")).default);
        }).call(this, n("543d").createPage);
    },
    4917: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("ca71"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    "650f": function(e, t, n) {
        "use strict";
        var r = n("04ae");
        n.n(r).a;
    },
    "6a5b": function(e, t, n) {
        "use strict";
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    ca71: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(n("a34a")), a = o(n("4ec3"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, r, a, o, i) {
                try {
                    var u = e[o](i), s = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, a);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = e.apply(t, n);
                        function u(e) {
                            i(o, r, a, u, s, "next", e);
                        }
                        function s(e) {
                            i(o, r, a, u, s, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var s = {
                components: {
                    BusiNavHeader: function() {
                        n.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(n("5ed7"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        reportList: [ {
                            label: "楼盘浏览个数 (个)：",
                            value: "--"
                        }, {
                            label: "楼盘浏览次数 (次)：",
                            value: "--"
                        }, {
                            label: "浏览的楼盘均价 (元)：",
                            value: "--"
                        } ],
                        reportListArea: [ {
                            label: "浏览的楼盘包含的区/县 (个)：",
                            value: "--"
                        }, {
                            type: "area",
                            label: "用户购房意向度的区域排名",
                            value: []
                        } ],
                        reportListSales: [ {
                            label: "沟通过的顾问 (个)：",
                            value: "--"
                        }, {
                            label: "该楼盘沟通过的顾问 (个)：",
                            value: "--"
                        } ],
                        rankIcon: [ "https://imgcdn.huanjutang.com/file/2021/03/22/06d267e454ae574275481790329ce7f3.png", "https://imgcdn.huanjutang.com/file/2021/03/22/0d909e2c2841b369cb14ab140b6fca88.png", "https://imgcdn.huanjutang.com/file/2021/03/22/3ec48f63f25564eddd01cde2178775ab.png" ],
                        topInfo: {}
                    };
                },
                onLoad: function(e) {
                    this.$refs.busiNavHeader.setTransparentMode(), this.userId = e.user_id, this.projectId = e.project_id, 
                    this.getClientBrowsingReport();
                },
                onPullDownRefresh: function() {
                    var t = u(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.getClientBrowsingReport(), e.stopPullDownRefresh();

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onPageScroll: function(e) {
                    e.scrollTop > 32 ? this.$refs.busiNavHeader.setWhiteMode() : this.$refs.busiNavHeader.setTransparentMode();
                },
                methods: {
                    getClientBrowsingReport: function() {
                        var e = u(r.default.mark(function e() {
                            var t, n, o;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, a.default.sales.clientBrowsingReport({
                                        user_id: this.userId,
                                        project_id: this.projectId
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, o = void 0 === n ? {} : n, this.topInfo = {
                                        name: o.nick_name,
                                        date: "".concat(o.start_day, "-").concat(o.end_day)
                                    }, this.reportList[0].value = o.visitor_project_num || "--", this.reportList[1].value = o.visitor_project_page_views || "--", 
                                    this.reportList[2].value = o.visitor_project_avg_price || "--", this.reportListArea[0].value = o.visitor_project_area_num || "--", 
                                    this.reportListArea[1].value = o.visitor_project_area_ranking, this.reportListSales[0].value = o.communicate_salesman_num || "--", 
                                    this.reportListSales[1].value = o.current_project_salesman_ids || "--";

                                  case 13:
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
            t.default = s;
        }).call(this, n("543d").default);
    },
    f1ea: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("6a5b"), a = n("4917");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("650f");
        var i = n("f0c5"), u = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = u.exports;
    }
}, [ [ "0588", "common/runtime", "common/vendor" ] ] ]);