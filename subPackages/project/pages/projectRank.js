require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/project/pages/projectRank" ], {
    "04cb": function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = i(e("a34a")), r = i(e("4ec3"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, a, e, n, r, i, s) {
                try {
                    var o = t[i](s), c = o.value;
                } catch (t) {
                    return void e(t);
                }
                o.done ? a(c) : Promise.resolve(c).then(n, r);
            }
            function o(t) {
                return function() {
                    var a = this, e = arguments;
                    return new Promise(function(n, r) {
                        var i = t.apply(a, e);
                        function o(t) {
                            s(i, n, r, o, c, "next", t);
                        }
                        function c(t) {
                            s(i, n, r, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var c = {
                components: {
                    BusiNavHeader: function() {
                        e.e("components/UILayout/BusiNavHeader").then(function() {
                            return resolve(e("5ed7"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    BusiAreaList: function() {
                        e.e("subPackages/project/pages/component/projectRank/BusiAreaList").then(function() {
                            return resolve(e("41fd"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    BusiProjectRankList: function() {
                        e.e("subPackages/project/pages/component/projectRank/BusiProjectRankList").then(function() {
                            return resolve(e("a6cf"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        tabList: [ {
                            id: 1,
                            name: "热门榜",
                            val: "hot"
                        }, {
                            id: 2,
                            name: "人气榜",
                            val: "popularity"
                        }, {
                            id: 3,
                            name: "热评榜",
                            val: "comment"
                        }, {
                            id: 4,
                            name: "访问榜",
                            val: "view"
                        } ],
                        activeTab: 1,
                        ishowRank: !1,
                        areaList: [],
                        params: {
                            type: "hot",
                            area_id: "",
                            area_name: "全城",
                            page: 1,
                            size: 20
                        },
                        projectList: [],
                        more: !0,
                        bgcolor: "rgba(0,0,0,0)"
                    };
                },
                onLoad: function(t) {
                    this.$refs.busiNavHeader.setTransparentMode(), this.params.type = t.type || "hot", 
                    this.params.area_id = t.area_id || "", this.params.area_name = t.area_name || "全城";
                    var a = this.tabList.find(function(a) {
                        return a.val === t.type;
                    });
                    this.activeTab = a && a.id || 1, this.loadAreaData(), this.loadProjectData();
                },
                onPullDownRefresh: function() {
                    var a = o(n.default.mark(function a() {
                        return n.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.next = 2, this.loadProjectData();

                              case 2:
                                t.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return a.stop();
                            }
                        }, a, this);
                    }));
                    return function() {
                        return a.apply(this, arguments);
                    };
                }(),
                onPageScroll: function(t) {
                    t.scrollTop > 50 ? this.$refs.busiNavHeader.setBackground("#1B086C") : this.$refs.busiNavHeader.setBackground("rgba(0,0,0,0)");
                },
                methods: {
                    goBack: function() {
                        1 === getCurrentPages().length ? t.switchTab({
                            url: "/pages/index"
                        }) : t.navigateBack();
                    },
                    loadAreaData: function() {
                        var t = o(n.default.mark(function t() {
                            var a;
                            return n.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.default.getAreasList({
                                        need_border: 0
                                    });

                                  case 2:
                                    a = t.sent, this.areaList = a.data || [], this.areaList.unshift({
                                        id: 0,
                                        area: "全城",
                                        areaid: ""
                                    });

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
                    loadProjectData: function() {
                        var a = o(n.default.mark(function a() {
                            var e;
                            return n.default.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                  case 0:
                                    return t.showLoading({
                                        title: "加载中...",
                                        mask: !0
                                    }), a.next = 3, r.default.projetcRank(this.params);

                                  case 3:
                                    (e = a.sent).data && (this.projectList = this.projectList.concat(e.data.list)), 
                                    e.data && e.data.list.length === Math.floor(this.params.size) ? this.params.page += 1 : this.more = !1, 
                                    t.hideLoading();

                                  case 7:
                                  case "end":
                                    return a.stop();
                                }
                            }, a, this);
                        }));
                        return function() {
                            return a.apply(this, arguments);
                        };
                    }(),
                    changeActiveTab: function(t) {
                        var a = t.id, e = t.val;
                        this.activeTab = a, this.params.page = 1, this.params.type = e, this.projectList = [], 
                        this.loadProjectData();
                    },
                    changeAreaBoxState: function() {
                        this.ishowRank = !this.ishowRank;
                    },
                    hideAreaBox: function() {
                        this.ishowRank = !1;
                    },
                    changeAreaHandler: function(t, a) {
                        this.params.area_id = t, this.params.area_name = a, this.ishowRank = !1, this.params.page = 1, 
                        this.projectList = [], this.loadProjectData();
                    }
                }
            };
            a.default = c;
        }).call(this, e("543d").default);
    },
    "26b7": function(t, a, e) {
        "use strict";
        var n = e("be58");
        e.n(n).a;
    },
    "2b6d": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("04cb"), r = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        a.default = r.a;
    },
    b066: function(t, a, e) {
        "use strict";
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), a(e("66fd")), t(a(e("ccb0")).default);
        }).call(this, e("543d").createPage);
    },
    b681: function(t, a, e) {
        "use strict";
        var n = function() {
            this.$createElement, this._self._c;
        }, r = [];
        e.d(a, "b", function() {
            return n;
        }), e.d(a, "c", function() {
            return r;
        }), e.d(a, "a", function() {});
    },
    be58: function(t, a, e) {},
    ccb0: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("b681"), r = e("2b6d");
        for (var i in r) "default" !== i && function(t) {
            e.d(a, t, function() {
                return r[t];
            });
        }(i);
        e("26b7");
        var s = e("f0c5"), o = Object(s.a)(r.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = o.exports;
    }
}, [ [ "b066", "common/runtime", "common/vendor" ] ] ]);