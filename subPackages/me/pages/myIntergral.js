require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "subPackages/me/pages/myIntergral" ], {
    1490: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("df65"), r = n("e4aa");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("d537");
        var s = n("f0c5"), i = Object(s.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = i.exports;
    },
    bb55: function(e, t, n) {},
    d537: function(e, t, n) {
        "use strict";
        var a = n("bb55");
        n.n(a).a;
    },
    de22: function(e, t, n) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("1490")).default);
        }).call(this, n("543d").createPage);
    },
    df65: function(e, t, n) {
        "use strict";
        var a = function() {
            this.$createElement, this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    e4aa: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("ecb8"), r = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = r.a;
    },
    ecb8: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = s(n("a34a")), r = s(n("4ec3")), o = n("b628");
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, a, r, o, s) {
                try {
                    var i = e[o](s), c = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(c) : Promise.resolve(c).then(a, r);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            i(o, a, r, s, c, "next", e);
                        }
                        function c(e) {
                            i(o, a, r, s, c, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var u = n("c909"), d = n("ca00"), f = n("79b9"), l = {
                components: {
                    guideImg: function() {
                        n.e("components/GuideImg/Index").then(function() {
                            return resolve(n("6c14"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        sales_man_id: "",
                        activeData: [],
                        pointData: [],
                        asiData: [],
                        guideImg: [],
                        showProjectBox: !1,
                        cityName: "hangzhou",
                        projectId: "",
                        projectName: ""
                    };
                },
                onShareAppMessage: function() {
                    var e = o.cache.get("userinfo");
                    return this.sales_man_id = e.sales_man_id, o.share.share("我在这里等着你一起入驻", "/subPackages/me/pages/myIntergral?inviter_id=".concat(this.sales_man_id));
                },
                onPullDownRefresh: function() {
                    var t = c(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.reload();

                              case 2:
                                e.stopPullDownRefresh();

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                onLoad: function() {
                    var t = c(a.default.mark(function t(n) {
                        var o, s;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.getDefaultProjectData(), t.next = 3, r.default.isSaleMan();

                              case 3:
                                if (o = t.sent, 1 === parseInt(o.isSalesMan, 10)) {
                                    t.next = 8;
                                    break;
                                }
                                e.redirectTo({
                                    url: "/subPackages/me/pages/salesMan?inviter_id=".concat(n.inviter_id)
                                }), t.next = 14;
                                break;

                              case 8:
                                return t.next = 10, r.default.getGuideImage("sales_man_points");

                              case 10:
                                return s = t.sent, this.guideImg = s.data, t.next = 14, this.reload();

                              case 14:
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
                    getDefaultProjectData: function() {
                        var e = c(a.default.mark(function e() {
                            var t, n, s, i, c;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = o.cache.get("userinfo"), this.sales_man_id = t.sales_man_id, e.next = 4, 
                                    r.default.sales.getDefaultProject(this.sales_man_id);

                                  case 4:
                                    n = e.sent, s = n.data.project, i = s.id, c = s.name, this.projectId = i, this.projectName = c;

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    stopTouch: function() {
                        return !1;
                    },
                    toRulesDetail: function() {
                        e.navigateTo({
                            url: d.webview2Url("".concat(f.webviewHost, "/salesman/pointsRule?_t=").concat(Date.now()))
                        });
                    },
                    toWebUrl: function(t, n) {
                        var a = t.split("redirect=")[1];
                        if ("上传楼盘信息" === n) {
                            var r = new u(u.decode(a)), o = r.addSearch("project_id", this.projectId);
                            o = r.addSearch("project_name", this.projectName), a = "/pages/webview2?redirect=".concat(u.encode(o));
                        }
                        e.navigateTo({
                            url: a
                        });
                    },
                    returnUrl: function() {
                        return !1;
                    },
                    showProjectInfo: function() {
                        this.showProjectBox = !this.showProjectBox;
                    },
                    toUrl: function(t) {
                        switch (parseInt(t, 10)) {
                          case 1:
                            e.navigateTo({
                                url: "/subPackages/lottery/pages/addHouseIn"
                            });
                            break;

                          case 2:
                            e.navigateTo({
                                url: "/subPackages/lottery/pages/uploadPic"
                            });
                            break;

                          case 3:
                            e.navigateTo({
                                url: "/subPackages/lottery/pages/uploadVideo"
                            });
                        }
                        this.showProjectBox = !1;
                    },
                    loadNext: function() {
                        var e = c(a.default.mark(function e() {
                            var t, n, o;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.default.myRecommendIndex();

                                  case 2:
                                    return t = e.sent, this.activeData = t.data, this.activeData.today_recommend_index = parseInt(this.activeData.today_recommend_index, 10), 
                                    e.next = 7, r.default.myPoints();

                                  case 7:
                                    return n = e.sent, this.pointData = n.data, this.pointData.today_points = parseInt(this.pointData.today_points, 10), 
                                    e.next = 12, r.default.pointsAssignment();

                                  case 12:
                                    o = e.sent, this.asiData = o.data;

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this);
                        }));
                        return function() {
                            return e.apply(this, arguments);
                        };
                    }(),
                    reload: function() {
                        var t = c(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e.showLoading({
                                        title: "加载中..."
                                    }), t.next = 3, this.loadNext();

                                  case 3:
                                    e.hideLoading();

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function() {
                            return t.apply(this, arguments);
                        };
                    }()
                }
            };
            t.default = l;
        }).call(this, n("543d").default);
    }
}, [ [ "de22", "common/runtime", "common/vendor" ] ] ]);